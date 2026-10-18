const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9380;
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
        
        setTimeout(() => {
          ws.send(JSON.stringify({ id: 10, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }, 1200);
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);

        if (msg.id === 10) {
          fs.writeFileSync('docs/typography_hero_dark.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/typography_hero_dark.png');

          // Scroll to Lore section
          ws.send(JSON.stringify({
            id: 20,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              expression: `(() => {
                const el = document.getElementById('lore');
                if (el) el.scrollIntoView();
                return 'Scrolled to lore';
              })()`
            }
          }));
        }

        if (msg.id === 20) {
          setTimeout(() => {
            ws.send(JSON.stringify({ id: 21, method: 'Page.captureScreenshot', params: { format: 'png' } }));
          }, 800);
        }

        if (msg.id === 21) {
          fs.writeFileSync('docs/typography_lore_dark.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/typography_lore_dark.png');

          // Scroll to Specs section
          ws.send(JSON.stringify({
            id: 30,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              expression: `(() => {
                const el = document.getElementById('specs');
                if (el) el.scrollIntoView();
                return 'Scrolled to specs';
              })()`
            }
          }));
        }

        if (msg.id === 30) {
          setTimeout(() => {
            ws.send(JSON.stringify({ id: 31, method: 'Page.captureScreenshot', params: { format: 'png' } }));
          }, 800);
        }

        if (msg.id === 31) {
          fs.writeFileSync('docs/typography_specs_dark.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/typography_specs_dark.png');
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
