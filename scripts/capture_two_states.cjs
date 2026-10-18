const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9365;
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
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

setTimeout(() => {
  http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const targets = JSON.parse(data);
      const page = targets.find(t => t.type === 'page');
      const ws = new WebSocket(page.webSocketDebuggerUrl);
      ws.onopen = () => {
        ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
        ws.send(JSON.stringify({
          id: 2,
          method: 'Emulation.setDeviceMetricsOverride',
          params: { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }
        }));
        
        // Capture initial screenshot (state1)
        setTimeout(() => {
          ws.send(JSON.stringify({ id: 10, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }, 500);
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 10 && msg.result) {
          fs.writeFileSync('docs/screenshot_state1.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved screenshot_state1.png');
          
          // Click button to toggle
          ws.send(JSON.stringify({
            id: 20,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              expression: `
                (async () => {
                  const btn = Array.from(document.querySelectorAll('button')).find(b => {
                    const l = b.getAttribute('aria-label') || '';
                    return l.includes('giao diện') || l.includes('chế độ') || l.includes('sáng') || l.includes('tối');
                  });
                  if (btn) btn.click();
                  await new Promise(r => setTimeout(r, 500));
                })()
              `
            }
          }));
        }
        
        if (msg.id === 20) {
          // Capture after-click screenshot (state2)
          ws.send(JSON.stringify({ id: 30, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }
        
        if (msg.id === 30 && msg.result) {
          fs.writeFileSync('docs/screenshot_state2.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved screenshot_state2.png');
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
