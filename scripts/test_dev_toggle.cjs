const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const cdpPort = 9356;
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${cdpPort}`,
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  'http://localhost:5173'
]);

const cleanup = () => {
  try { chrome.kill(); } catch (e) {}
};

const timer = setTimeout(() => {
  cleanup();
  console.log('Timeout');
  process.exit(1);
}, 12000);

setTimeout(() => {
  http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const targets = JSON.parse(data);
      const page = targets.find(t => t.type === 'page');
      if (!page) { cleanup(); return console.error('No page'); }
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
            awaitPromise: true,
            returnByValue: true,
            expression: `
              (async () => {
                const rootBefore = document.documentElement.className;
                const storageBefore = localStorage.getItem('suri-theme');
                
                // Let's capture info about buttons
                const allButtons = Array.from(document.querySelectorAll('button')).map((b, idx) => ({
                  idx,
                  aria: b.getAttribute('aria-label'),
                  text: b.innerText,
                  classes: b.className,
                  visible: b.offsetParent !== null
                }));
                
                // Find theme toggle button
                const btn = Array.from(document.querySelectorAll('button')).find(b => {
                  const l = b.getAttribute('aria-label') || '';
                  return l.toLowerCase().includes('giao diện') || l.toLowerCase().includes('chế độ') || l.toLowerCase().includes('sáng') || l.toLowerCase().includes('tối');
                });
                
                let clicked = false;
                if (btn) {
                  btn.click();
                  clicked = true;
                }
                
                await new Promise(r => setTimeout(r, 400));
                
                const rootAfter = document.documentElement.className;
                const storageAfter = localStorage.getItem('suri-theme');
                
                return {
                  rootBefore,
                  storageBefore,
                  allButtons,
                  clicked,
                  btnFoundLabel: btn ? btn.getAttribute('aria-label') : null,
                  rootAfter,
                  storageAfter
                };
              })()
            `
          }
        }));
      };
      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 3) {
          console.log('Dev Server Diagnosis:', JSON.stringify(msg.result?.result?.value, null, 2));
          // Now capture screenshot after click
          ws.send(JSON.stringify({ id: 4, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }
        if (msg.id === 4 && msg.result) {
          fs.writeFileSync('docs/after_click_toggle.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/after_click_toggle.png');
          cleanup();
          clearTimeout(timer);
          process.exit(0);
        }
      };
    });
  }).on('error', (err) => {
    cleanup();
    console.error('Error connecting to CDP:', err);
  });
}, 2000);
