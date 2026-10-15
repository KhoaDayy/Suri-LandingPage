const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

const VIEWPORTS = [
  { name: 'Ultrawide Desktop', width: 2560, height: 1440, isMobile: false },
  { name: 'Standard Desktop', width: 1920, height: 1080, isMobile: false },
  { name: 'Tablet', width: 768, height: 1024, isMobile: true },
  { name: 'iPhone', width: 390, height: 844, isMobile: true },
  { name: 'Compact Android', width: 360, height: 740, isMobile: true },
];

function runCdpLayoutCheck(width, height, isMobile) {
  return new Promise((resolve, reject) => {
    const serverPort = 8200 + Math.floor(Math.random() * 50);
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(ROOT_DIR, 'dist', reqPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const mime = ext === '.html' ? 'text/html' : ext === '.js' ? 'text/javascript' : ext === '.css' ? 'text/css' : 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404);
        res.end();
      }
    });

    server.listen(serverPort, '127.0.0.1', () => {
      const cdpPort = serverPort + 100;
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
        reject(new Error(`CDP layout check timed out for ${width}x${height}`));
      }, 10000);

      setTimeout(() => {
        http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              const targets = JSON.parse(data);
              const page = targets.find(t => t.type === 'page');
              if (!page) {
                cleanup();
                clearTimeout(timer);
                return reject(new Error('No page target found on CDP'));
              }

              const ws = new WebSocket(page.webSocketDebuggerUrl);
              ws.onopen = () => {
                ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
                ws.send(JSON.stringify({
                  id: 2,
                  method: 'Emulation.setDeviceMetricsOverride',
                  params: { width, height, deviceScaleFactor: 2, mobile: isMobile }
                }));
                ws.send(JSON.stringify({ id: 3, method: 'Page.reload' }));
              };

              ws.onmessage = (evt) => {
                const msg = JSON.parse(evt.data);
                if (msg.method === 'Page.loadEventFired') {
                  setTimeout(() => {
                    const checkScript = `(() => {
                      const docWidth = document.documentElement.clientWidth;
                      const scrollWidth = document.documentElement.scrollWidth;
                      const bodyScrollWidth = document.body ? document.body.scrollWidth : 0;
                      const maxScroll = Math.max(scrollWidth, bodyScrollWidth);
                      const overflowing = [];
                      const all = document.querySelectorAll('*');
                      for (const el of all) {
                        const r = el.getBoundingClientRect();
                        if (r.right > docWidth + 2) {
                          overflowing.push({
                            tag: el.tagName,
                            id: el.id || '',
                            className: el.className ? String(el.className).slice(0, 60) : '',
                            right: Math.round(r.right),
                            docWidth
                          });
                        }
                      }
                      return { docWidth, scrollWidth: maxScroll, overflowing: overflowing.slice(0, 5) };
                    })()`;
                    ws.send(JSON.stringify({
                      id: 10,
                      method: 'Runtime.evaluate',
                      params: { expression: checkScript, returnByValue: true }
                    }));
                  }, 800);
                }

                if (msg.id === 10) {
                  clearTimeout(timer);
                  ws.close();
                  cleanup();
                  const result = msg.result?.result?.value;
                  if (!result) {
                    return reject(new Error('Failed to evaluate viewport metrics'));
                  }
                  if (result.scrollWidth > result.docWidth + 1) {
                    const details = result.overflowing.map(o => `<${o.tag} id="${o.id}" class="${o.className}"> (right: ${o.right}px > ${o.docWidth}px)`).join('; ');
                    return reject(new Error(
                      `Horizontal overflow on ${width}x${height}! scrollWidth (${result.scrollWidth}) > clientWidth (${result.docWidth}). Elements: ${details}`
                    ));
                  }
                  resolve(result);
                }
              };

              ws.onerror = (err) => {
                clearTimeout(timer);
                cleanup();
                reject(err);
              };
            } catch (err) {
              clearTimeout(timer);
              cleanup();
              reject(err);
            }
          });
        }).on('error', (err) => {
          clearTimeout(timer);
          cleanup();
          reject(err);
        });
      }, 1500);
    });
  });
}

async function runAll() {
  console.log('Testing Layout Invariance across 5 viewports via Chrome CDP...');
  let allPassed = true;
  for (const vp of VIEWPORTS) {
    try {
      const res = await runCdpLayoutCheck(vp.width, vp.height, vp.isMobile);
      console.log(`[PASS] ${vp.name} (${vp.width}x${vp.height}): clientWidth=${res.docWidth}, scrollWidth=${res.scrollWidth}, overflow=0px`);
    } catch (err) {
      console.error(`[FAIL] ${vp.name} (${vp.width}x${vp.height}): ${err.message}`);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log('\nAll 5 viewports verified with ZERO horizontal overflow!');
    process.exit(0);
  } else {
    console.error('\nViewport layout verification failed!');
    process.exit(1);
  }
}

runAll();
