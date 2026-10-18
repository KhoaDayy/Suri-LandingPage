const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const cdpPort = 9358;
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
        
        // Force LIGHT mode first
        ws.send(JSON.stringify({
          id: 3,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add('light');
              localStorage.setItem('suri-theme', 'light');
            `
          }
        }));
      };
      
      let step = 0;
      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 3) {
          setTimeout(() => {
            ws.send(JSON.stringify({ id: 10, method: 'Page.captureScreenshot', params: { format: 'png' } }));
          }, 300);
        }
        if (msg.id === 10 && msg.result) {
          fs.writeFileSync('docs/test_light_mode.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/test_light_mode.png');
          
          // Now force DARK mode
          ws.send(JSON.stringify({
            id: 20,
            method: 'Runtime.evaluate',
            params: {
              expression: `
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
                localStorage.setItem('suri-theme', 'dark');
              `
            }
          }));
        }
        if (msg.id === 20) {
          setTimeout(() => {
            ws.send(JSON.stringify({ id: 30, method: 'Page.captureScreenshot', params: { format: 'png' } }));
          }, 300);
        }
        if (msg.id === 30 && msg.result) {
          fs.writeFileSync('docs/test_dark_mode.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved docs/test_dark_mode.png');
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
