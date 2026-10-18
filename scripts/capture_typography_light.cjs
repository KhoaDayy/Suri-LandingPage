const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9384;
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
          params: { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }
        }));
        
        // Switch to Light Mode
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              expression: `(() => {
                const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Sáng'));
                if (btn) btn.click();
              })()`
            }
          }));
        }, 800);
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);

        if (msg.id === 10) {
          setTimeout(() => {
            ws.send(JSON.stringify({ id: 11, method: 'Page.captureScreenshot', params: { format: 'png' } }));
          }, 400);
        }

        if (msg.id === 11) {
          fs.writeFileSync('docs/typography_hero_light.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/typography_hero_light.png');
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
