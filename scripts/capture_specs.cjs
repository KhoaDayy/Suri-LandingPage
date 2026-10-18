const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const serverPort = 8352;
const cdpPort = 9352;
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
  }, 10000);

  setTimeout(() => {
    http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const targets = JSON.parse(data);
        const page = targets.find(t => t.type === 'page');
        if (!page) { cleanup(); clearTimeout(timer); return; }
        const ws = new WebSocket(page.webSocketDebuggerUrl);
        ws.onopen = () => {
          ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
          ws.send(JSON.stringify({
            id: 2,
            method: 'Emulation.setDeviceMetricsOverride',
            params: { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }
          }));
          ws.send(JSON.stringify({
            id: 3,
            method: 'Runtime.evaluate',
            params: {
              expression: `document.getElementById('specs').scrollIntoView();`
            }
          }));
        };
        let count = 0;
        ws.onmessage = (evt) => {
          count++;
          if (count === 3) {
            setTimeout(() => {
              ws.send(JSON.stringify({ id: 4, method: 'Page.captureScreenshot', params: { format: 'png' } }));
            }, 1200);
          }
          const msg = JSON.parse(evt.data);
          if (msg.id === 4 && msg.result) {
            fs.writeFileSync(path.join(ROOT_DIR, 'docs/specs_3d_preview.png'), Buffer.from(msg.result.data, 'base64'));
            console.log('Saved docs/specs_3d_preview.png');
            cleanup();
            clearTimeout(timer);
            process.exit(0);
          }
        };
      });
    }).on('error', () => {
      cleanup();
      clearTimeout(timer);
    });
  }, 1500);
});
