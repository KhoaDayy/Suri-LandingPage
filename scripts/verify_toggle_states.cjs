const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9372;
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
          ws.send(JSON.stringify({
            id: 11,
            method: 'Runtime.evaluate',
            params: {
              returnByValue: true,
              expression: `({
                htmlClass: document.documentElement.className,
                bodyClass: document.body.className,
                colorScheme: document.documentElement.style.colorScheme
              })`
            }
          }));
        }, 1000);
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);

        if (msg.id === 11) {
          console.log('1. Initial State:', msg.result?.result?.value);
          // Screenshot Dark state
          ws.send(JSON.stringify({ id: 12, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }

        if (msg.id === 12) {
          fs.writeFileSync('docs/screenshot_dark_verified.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/screenshot_dark_verified.png');

          // Click "Sáng"
          ws.send(JSON.stringify({
            id: 20,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              returnByValue: true,
              expression: `(() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const btn = buttons.find(b => b.textContent && b.textContent.includes('Sáng'));
                if (btn) {
                  btn.click();
                  return 'Clicked Sáng successfully';
                }
                return 'Button Sáng not found';
              })()`
            }
          }));
        }

        if (msg.id === 20) {
          console.log('2. Action Result:', msg.result?.result?.value);
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 21,
              method: 'Runtime.evaluate',
              params: {
                returnByValue: true,
                expression: `({
                  htmlClass: document.documentElement.className,
                  bodyClass: document.body.className,
                  colorScheme: document.documentElement.style.colorScheme
                })`
              }
            }));
          }, 400);
        }

        if (msg.id === 21) {
          console.log('3. After clicking Sáng:', msg.result?.result?.value);
          // Screenshot Light state
          ws.send(JSON.stringify({ id: 22, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }

        if (msg.id === 22) {
          fs.writeFileSync('docs/screenshot_light_verified.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/screenshot_light_verified.png');

          // Click "Tối" to verify toggling back
          ws.send(JSON.stringify({
            id: 30,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              returnByValue: true,
              expression: `(() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const btn = buttons.find(b => b.textContent && b.textContent.includes('Tối'));
                if (btn) {
                  btn.click();
                  return 'Clicked Tối successfully';
                }
                return 'Button Tối not found';
              })()`
            }
          }));
        }

        if (msg.id === 30) {
          console.log('4. Action Result:', msg.result?.result?.value);
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 31,
              method: 'Runtime.evaluate',
              params: {
                returnByValue: true,
                expression: `({
                  htmlClass: document.documentElement.className,
                  bodyClass: document.body.className,
                  colorScheme: document.documentElement.style.colorScheme
                })`
              }
            }));
          }, 400);
        }

        if (msg.id === 31) {
          console.log('5. After clicking Tối (Back to Dark):', msg.result?.result?.value);
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
