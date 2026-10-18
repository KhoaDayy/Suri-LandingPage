const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9364;
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
                
                // Read current state
                const state1 = {
                  themeAttr: document.documentElement.className,
                  heroBg: getComputedStyle(document.getElementById('hero')).backgroundColor,
                  heroColor: getComputedStyle(document.getElementById('hero')).color,
                  loreBg: getComputedStyle(document.getElementById('lore')).backgroundColor,
                  loreColor: getComputedStyle(document.getElementById('lore')).color,
                  headerBg: getComputedStyle(document.querySelector('header')).backgroundColor,
                  headerColor: getComputedStyle(document.querySelector('header')).color,
                  btnLabel: btn ? btn.getAttribute('aria-label') : null,
                  btnSvg: btn ? btn.querySelector('svg')?.getAttribute('class') : null
                };
                
                // Click button
                if (btn) btn.click();
                await new Promise(r => setTimeout(r, 300));
                
                const state2 = {
                  themeAttr: document.documentElement.className,
                  heroBg: getComputedStyle(document.getElementById('hero')).backgroundColor,
                  heroColor: getComputedStyle(document.getElementById('hero')).color,
                  loreBg: getComputedStyle(document.getElementById('lore')).backgroundColor,
                  loreColor: getComputedStyle(document.getElementById('lore')).color,
                  headerBg: getComputedStyle(document.querySelector('header')).backgroundColor,
                  headerColor: getComputedStyle(document.querySelector('header')).color,
                  btnLabel: btn ? btn.getAttribute('aria-label') : null,
                  btnSvg: btn ? btn.querySelector('svg')?.getAttribute('class') : null
                };
                
                return { state1, state2 };
              })()
            `
          }
        }));
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 3) {
          console.log('Real Test Result:', JSON.stringify(msg.result?.result?.value, null, 2));
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
