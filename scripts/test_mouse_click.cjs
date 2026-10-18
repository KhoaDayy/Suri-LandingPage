const http = require('http');
const { spawn } = require('child_process');

const cdpPort = 9367;
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
        // Get bounding rect of the theme toggle button
        ws.send(JSON.stringify({
          id: 3,
          method: 'Runtime.evaluate',
          params: {
            awaitPromise: true,
            returnByValue: true,
            expression: `
              (() => {
                const btn = Array.from(document.querySelectorAll('button')).find(b => {
                  const l = b.getAttribute('aria-label') || '';
                  return l.includes('giao diện') || l.includes('chế độ') || l.includes('sáng') || l.includes('tối');
                });
                if (!btn) return null;
                const rect = btn.getBoundingClientRect();
                return {
                  x: rect.x + rect.width / 2,
                  y: rect.y + rect.height / 2,
                  topElement: document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)?.tagName,
                  classes: btn.className,
                  htmlClass: document.documentElement.className
                };
              })()
            `
          }
        }));
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 3) {
          console.log('Button Coordinate Info:', msg.result?.result?.value);
          const coords = msg.result?.result?.value;
          if (coords) {
            // Send synthetic mouse click at x, y
            ws.send(JSON.stringify({
              id: 10,
              method: 'Input.dispatchMouseEvent',
              params: { type: 'mousePressed', x: coords.x, y: coords.y, button: 'left', clickCount: 1 }
            }));
            ws.send(JSON.stringify({
              id: 11,
              method: 'Input.dispatchMouseEvent',
              params: { type: 'mouseReleased', x: coords.x, y: coords.y, button: 'left', clickCount: 1 }
            }));
            
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 20,
                method: 'Runtime.evaluate',
                params: {
                  returnByValue: true,
                  expression: `document.documentElement.className`
                }
              }));
            }, 300);
          }
        }
        
        if (msg.id === 20) {
          console.log('HTML class after REAL mouse click:', msg.result?.result?.value);
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
