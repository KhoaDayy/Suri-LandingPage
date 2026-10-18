const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const serverPort = 8355;
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, '..', 'dist', reqPath);
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
  const cdpPort = 9355;
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${cdpPort}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `http://127.0.0.1:${serverPort}`
  ]);

  setTimeout(() => {
    http.get(`http://127.0.0.1:${cdpPort}/json`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const targets = JSON.parse(data);
        const page = targets.find(t => t.type === 'page');
        const ws = new WebSocket(page.webSocketDebuggerUrl);
        ws.onopen = () => {
          ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
        };
        ws.onmessage = evt => {
          const msg = JSON.parse(evt.data);
          if (msg.method === 'Page.loadEventFired') {
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 100,
                method: 'Runtime.evaluate',
                params: {
                  expression: `
                    Array.from(document.querySelectorAll('#hero img')).map(img => ({
                      src: img.src,
                      alt: img.alt,
                      rect: {
                        top: img.getBoundingClientRect().top,
                        left: img.getBoundingClientRect().left,
                        width: img.getBoundingClientRect().width,
                        height: img.getBoundingClientRect().height
                      },
                      naturalWidth: img.naturalWidth,
                      naturalHeight: img.naturalHeight
                    }))
                  `,
                  returnByValue: true
                }
              }));
            }, 1000);
          }
          if (msg.id === 100) {
            console.log(JSON.stringify(msg.result.result.value, null, 2));
            chrome.kill();
            server.close();
            process.exit(0);
          }
        };
      });
    });
  }, 1000);
});
