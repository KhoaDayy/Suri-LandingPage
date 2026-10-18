const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

function serveAndCapture(width, height, isMobile, outputPath, colorScheme = 'light') {
  return new Promise((resolve, reject) => {
    const serverPort = 8350;
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(ROOT_DIR, 'dist', reqPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const mime = ext === '.html' ? 'text/html' : ext === '.js' ? 'text/javascript' : ext === '.css' ? 'text/css' : ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404);
        res.end();
      }
    });

    server.listen(serverPort, '127.0.0.1', () => {
      const cdpPort = 9350;
      const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
      const chrome = spawn(chromePath, [
        '--headless=new',
        `--remote-debugging-port=${cdpPort}`,
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        `http://127.0.0.1:${serverPort}`
      ]);

      const cleanup = () => {
        try { chrome.kill(); } catch (e) {}
        try { server.close(); } catch (e) {}
      };

      const timer = setTimeout(() => {
        cleanup();
        reject(new Error(`Timed out capturing ${outputPath}`));
      }, 10000);

      setTimeout(() => {
        http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            const targets = JSON.parse(data);
            const page = targets.find(t => t.type === 'page');
            if (!page) {
              cleanup();
              clearTimeout(timer);
              return reject(new Error('No page target'));
            }

            const ws = new WebSocket(page.webSocketDebuggerUrl);
            ws.onopen = () => {
              ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
              ws.send(JSON.stringify({
                id: 2,
                method: 'Emulation.setDeviceMetricsOverride',
                params: { width, height, deviceScaleFactor: 1, mobile: isMobile }
              }));
              ws.send(JSON.stringify({
                id: 21,
                method: 'Emulation.setEmulatedMedia',
                params: {
                  media: 'screen',
                  features: [{ name: 'prefers-color-scheme', value: colorScheme }]
                }
              }));
              ws.send(JSON.stringify({
                id: 22,
                method: 'Page.addScriptToEvaluateOnNewDocument',
                params: {
                  source: `
                    try {
                      localStorage.setItem('suri-theme', '${colorScheme}');
                      if ('${colorScheme}' === 'light') {
                        document.documentElement.classList.remove('dark');
                        document.documentElement.classList.add('light');
                      } else {
                        document.documentElement.classList.add('dark');
                        document.documentElement.classList.remove('light');
                      }
                    } catch (e) {}
                  `
                }
              }));
              ws.send(JSON.stringify({ id: 3, method: 'Page.reload' }));
            };

            ws.onmessage = (evt) => {
              const msg = JSON.parse(evt.data);
              if (msg.method === 'Page.loadEventFired') {
                ws.send(JSON.stringify({
                  id: 5,
                  method: 'Runtime.evaluate',
                  params: {
                    expression: `
                      localStorage.setItem('suri-theme', '${colorScheme}');
                      if ('${colorScheme}' === 'light') {
                        document.documentElement.classList.remove('dark');
                        document.documentElement.classList.add('light');
                      } else {
                        document.documentElement.classList.add('dark');
                        document.documentElement.classList.remove('light');
                      }
                    `
                  }
                }));
                setTimeout(() => {
                  ws.send(JSON.stringify({
                    id: 10,
                    method: 'Page.captureScreenshot',
                    params: { format: 'png' }
                  }));
                }, 1200);
              }

              if (msg.id === 10) {
                clearTimeout(timer);
                const buffer = Buffer.from(msg.result.data, 'base64');
                fs.writeFileSync(outputPath, buffer);
                console.log(`Saved ${outputPath} (${buffer.length} bytes)`);
                cleanup();
                resolve();
              }
            };
          });
        }).on('error', (err) => {
          cleanup();
          clearTimeout(timer);
          reject(err);
        });
      }, 1500);
    });
  });
}

async function main() {
  console.log('Capturing desktop light...');
  await serveAndCapture(1440, 900, false, 'docs/current_hero_desktop.png', 'light');
  console.log('Capturing desktop dark...');
  await serveAndCapture(1440, 900, false, 'docs/current_hero_desktop_dark.png', 'dark');
  console.log('Capturing mobile light...');
  await serveAndCapture(390, 844, true, 'docs/current_hero_mobile.png', 'light');
  console.log('Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
