const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const serverPort = 8355;
const cdpPort = 9355;
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
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              returnByValue: true,
              expression: `
                (async () => {
                  const rootBefore = document.documentElement.className;
                  const storageBefore = localStorage.getItem('suri-theme');
                  
                  // Find all buttons
                  const btns = Array.from(document.querySelectorAll('button'));
                  const themeBtn = btns.find(b => {
                    const label = b.getAttribute('aria-label') || '';
                    return label.includes('giao diện') || label.includes('chế độ') || label.includes('sáng') || label.includes('tối');
                  });
                  
                  if (!themeBtn) {
                    return { error: 'Theme button not found!', allBtnLabels: btns.map(b => b.getAttribute('aria-label')) };
                  }
                  
                  // Click the button
                  themeBtn.click();
                  
                  await new Promise(r => setTimeout(r, 200));
                  
                  const rootAfter = document.documentElement.className;
                  const storageAfter = localStorage.getItem('suri-theme');
                  
                  const lore = document.getElementById('lore');
                  const loreBg = lore ? getComputedStyle(lore).backgroundColor : null;
                  const loreColor = lore ? getComputedStyle(lore).color : null;
                  
                  const bodyBg = getComputedStyle(document.body).backgroundColor;
                  const bodyColor = getComputedStyle(document.body).color;
                  
                  return {
                    foundBtn: true,
                    btnLabel: themeBtn.getAttribute('aria-label'),
                    rootBefore,
                    storageBefore,
                    rootAfter,
                    storageAfter,
                    bodyBg,
                    bodyColor,
                    loreBg,
                    loreColor
                  };
                })()
              `
            }
          }));
        };
        ws.onmessage = (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === 2) {
            console.log('Diagnosis Result:', JSON.stringify(msg.result?.result?.value, null, 2));
            cleanup();
            clearTimeout(timer);
            process.exit(0);
          }
        };
      });
    }).on('error', (err) => {
      cleanup();
      clearTimeout(timer);
      console.error(err);
    });
  }, 1500);
});
