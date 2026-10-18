const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9374;
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=' + cdpPort,
  '--disable-gpu',
  '--no-first-run',
  'http://localhost:5173'
]);

const cleanup = () => { try { chrome.kill(); } catch (e) {} };

setTimeout(() => {
  http.get('http://127.0.0.1:' + cdpPort + '/json', (res) => {
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
          params: { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }
        }));
        
        // Open drawer
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              returnByValue: true,
              expression: `(() => {
                const btn = Array.from(document.querySelectorAll('button')).find(b => {
                  const l = b.getAttribute('aria-label') || '';
                  return l.includes('mục lục') || l.includes('Mở');
                });
                if (btn) { btn.click(); return 'Opened menu'; }
                return 'Menu button not found';
              })()`
            }
          }));
        }, 800);
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);

        if (msg.id === 10) {
          console.log('Mobile menu open result:', msg.result?.result?.value);
          setTimeout(() => {
            ws.send(JSON.stringify({ id: 11, method: 'Page.captureScreenshot', params: { format: 'png' } }));
          }, 400);
        }

        if (msg.id === 11) {
          fs.writeFileSync('docs/screenshot_mobile_drawer.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/screenshot_mobile_drawer.png');
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
