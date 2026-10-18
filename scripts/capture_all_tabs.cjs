const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const serverPort = 8354;
const cdpPort = 9354;
const ROOT_DIR = path.resolve(__dirname, '..');

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

  const timer = setTimeout(() => {
    cleanup();
    process.exit(1);
  }, 25000);

  setTimeout(() => {
    http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        const targets = JSON.parse(data);
        const page = targets.find(t => t.type === 'page');
        if (!page) { cleanup(); clearTimeout(timer); return; }
        const ws = new WebSocket(page.webSocketDebuggerUrl);

        let reqId = 1;
        const send = (method, params = {}) => new Promise((resolve) => {
          const id = reqId++;
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

        ws.onopen = async () => {
          await send('Page.enable');
          await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
          await send('Runtime.evaluate', { expression: `document.getElementById('specs').scrollIntoView();` });
          
          await new Promise(r => setTimeout(r, 800));

          const tabs = ['Model 3D', 'Chibi', 'Model 3.0', 'Model 2.0', 'Model 1.0'];
          for (let i = 0; i < tabs.length; i++) {
            const tabName = tabs[i];
            const evalRes = await send('Runtime.evaluate', {
              expression: `(() => {
                const tabs = Array.from(document.querySelectorAll('#specs [role="tab"]'));
                const target = tabs.find(b => b.textContent.includes('${tabName}'));
                if (target) {
                  target.click();
                  return 'Clicked ' + target.textContent.trim();
                }
                return 'Not found among: ' + tabs.map(t => t.textContent.trim()).join(' | ');
              })()`,
              returnByValue: true
            });
            console.log(`[${i}] ${tabName}:`, evalRes.result ? evalRes.result.value : evalRes);
            await new Promise(r => setTimeout(r, 600));
            const shot = await send('Page.captureScreenshot', { format: 'png' });
            const fname = `docs/specs_tab_${i}_${tabName.replace(/\s+/g, '_').toLowerCase()}.png`;
            fs.writeFileSync(path.join(ROOT_DIR, fname), Buffer.from(shot.data, 'base64'));
            console.log(`Saved ${fname}`);
          }

          cleanup();
          clearTimeout(timer);
          process.exit(0);
        };
      });
    }).on('error', () => {
      cleanup();
      clearTimeout(timer);
    });
  }, 1500);
});
