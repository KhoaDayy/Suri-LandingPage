const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const serverPort = 8363;
const cdpPort = 9363;
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
          
          await new Promise(r => setTimeout(r, 600));

          // 1. Simulate mouse moving in circle and clicking on Hero to trigger trail & click splash
          await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 400, y: 300 });
          await new Promise(r => setTimeout(r, 40));
          await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 450, y: 320 });
          await new Promise(r => setTimeout(r, 40));
          await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 500, y: 350 });
          await new Promise(r => setTimeout(r, 40));
          await send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 550, y: 400 });
          await new Promise(r => setTimeout(r, 40));
          // Click splash
          await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: 550, y: 400, button: 'left', clickCount: 1 });
          await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: 550, y: 400, button: 'left' });
          
          await new Promise(r => setTimeout(r, 120)); // capture mid-splash!
          let shot = await send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(ROOT_DIR, 'docs/effect_hero_splash.png'), Buffer.from(shot.data, 'base64'));
          console.log('Saved effect_hero_splash.png');

          // 2. Scroll to Lore Section
          await send('Runtime.evaluate', { expression: `document.getElementById('lore').scrollIntoView();` });
          await new Promise(r => setTimeout(r, 600));
          shot = await send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(ROOT_DIR, 'docs/effect_lore_bubbles.png'), Buffer.from(shot.data, 'base64'));
          console.log('Saved effect_lore_bubbles.png');

          // 3. Scroll to Specs Section
          await send('Runtime.evaluate', { expression: `document.getElementById('specs').scrollIntoView();` });
          await new Promise(r => setTimeout(r, 600));
          shot = await send('Page.captureScreenshot', { format: 'png' });
          fs.writeFileSync(path.join(ROOT_DIR, 'docs/effect_specs_preview.png'), Buffer.from(shot.data, 'base64'));
          console.log('Saved effect_specs_preview.png');

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
