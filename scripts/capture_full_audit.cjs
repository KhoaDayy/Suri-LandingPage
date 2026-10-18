const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const serverPort = 8360;
const cdpPort = 9360;

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

  setTimeout(() => {
    http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        const targets = JSON.parse(data);
        const page = targets.find(t => t.type === 'page');
        if (!page) { cleanup(); return; }

        const ws = new WebSocket(page.webSocketDebuggerUrl);
        let idCounter = 1;
        const send = (method, params = {}) => {
          return new Promise((resolve) => {
            const id = idCounter++;
            const handler = (evt) => {
              const msg = JSON.parse(evt.data);
              if (msg.id === id) {
                ws.removeEventListener('message', handler);
                resolve(msg.result);
              }
            };
            ws.addEventListener('message', handler);
            ws.send(JSON.stringify({ id, method, params }));
          });
        };

        ws.onopen = async () => {
          await send('Page.enable');
          await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
          
          const captureFull = async (filename, theme = 'light') => {
            await send('Runtime.evaluate', {
              expression: `
                localStorage.setItem('suri-theme', '${theme}');
                if ('${theme}' === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              `
            });
            await new Promise(r => setTimeout(r, 600));

            // Capture sections
            const sections = ['hero', 'lore', 'specs', 'schedule'];
            for (const sec of sections) {
              await send('Runtime.evaluate', {
                expression: `document.getElementById('${sec}')?.scrollIntoView({behavior: 'instant', block: 'start'});`
              });
              await new Promise(r => setTimeout(r, 600));
              const ss = await send('Page.captureScreenshot', { format: 'png' });
              fs.writeFileSync(path.join(ROOT_DIR, 'docs', `${filename}_${sec}.png`), Buffer.from(ss.data, 'base64'));
              console.log(`Saved docs/${filename}_${sec}.png`);
            }
            
            // Footer
            await send('Runtime.evaluate', {
              expression: `window.scrollTo({top: document.body.scrollHeight, behavior: 'instant'});`
            });
            await new Promise(r => setTimeout(r, 600));
            const ssFooter = await send('Page.captureScreenshot', { format: 'png' });
            fs.writeFileSync(path.join(ROOT_DIR, 'docs', `${filename}_footer.png`), Buffer.from(ssFooter.data, 'base64'));
            console.log(`Saved docs/${filename}_footer.png`);
          };

          await captureFull('audit_light', 'light');
          await captureFull('audit_dark', 'dark');

          cleanup();
          process.exit(0);
        };
      });
    });
  }, 1500);
});
