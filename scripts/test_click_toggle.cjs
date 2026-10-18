const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9361;
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
        // Scroll down slightly so we can see lore/specs section as well
        ws.send(JSON.stringify({
          id: 3,
          method: 'Runtime.evaluate',
          params: {
            awaitPromise: true,
            returnByValue: true,
            expression: `
              (async () => {
                const btn = Array.from(document.querySelectorAll('button')).find(b => {
                  const l = b.getAttribute('aria-label') || '';
                  return l.includes('giao diện') || l.includes('chế độ') || l.includes('sáng') || l.includes('tối');
                });
                
                const initialIcon = btn ? btn.innerHTML : null;
                const initialLabel = btn ? btn.getAttribute('aria-label') : null;
                const initialClasses = document.documentElement.className;
                
                return { initialLabel, initialClasses };
              })()
            `
          }
        }));
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 3) {
          console.log('Step 0 (Initial):', msg.result?.result?.value);
          // Capture initial screenshot
          ws.send(JSON.stringify({ id: 10, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }
        if (msg.id === 10 && msg.result) {
          fs.writeFileSync('docs/step0_initial.png', Buffer.from(msg.result.data, 'base64'));
          // Click toggle button
          ws.send(JSON.stringify({
            id: 20,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              returnByValue: true,
              expression: `
                (async () => {
                  const btn = Array.from(document.querySelectorAll('button')).find(b => {
                    const l = b.getAttribute('aria-label') || '';
                    return l.includes('giao diện') || l.includes('chế độ') || l.includes('sáng') || l.includes('tối');
                  });
                  if (btn) btn.click();
                  await new Promise(r => setTimeout(r, 400));
                  return {
                    labelAfterClick: btn ? btn.getAttribute('aria-label') : null,
                    classesAfterClick: document.documentElement.className,
                    storageAfterClick: localStorage.getItem('suri-theme')
                  };
                })()
              `
            }
          }));
        }
        if (msg.id === 20) {
          console.log('Step 1 (After 1 Click):', msg.result?.result?.value);
          ws.send(JSON.stringify({ id: 30, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }
        if (msg.id === 30 && msg.result) {
          fs.writeFileSync('docs/step1_after_1_click.png', Buffer.from(msg.result.data, 'base64'));
          // Click toggle button AGAIN
          ws.send(JSON.stringify({
            id: 40,
            method: 'Runtime.evaluate',
            params: {
              awaitPromise: true,
              returnByValue: true,
              expression: `
                (async () => {
                  const btn = Array.from(document.querySelectorAll('button')).find(b => {
                    const l = b.getAttribute('aria-label') || '';
                    return l.includes('giao diện') || l.includes('chế độ') || l.includes('sáng') || l.includes('tối');
                  });
                  if (btn) btn.click();
                  await new Promise(r => setTimeout(r, 400));
                  return {
                    labelAfterClick2: btn ? btn.getAttribute('aria-label') : null,
                    classesAfterClick2: document.documentElement.className,
                    storageAfterClick2: localStorage.getItem('suri-theme')
                  };
                })()
              `
            }
          }));
        }
        if (msg.id === 40) {
          console.log('Step 2 (After 2 Clicks):', msg.result?.result?.value);
          ws.send(JSON.stringify({ id: 50, method: 'Page.captureScreenshot', params: { format: 'png' } }));
        }
        if (msg.id === 50 && msg.result) {
          fs.writeFileSync('docs/step2_after_2_clicks.png', Buffer.from(msg.result.data, 'base64'));
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
