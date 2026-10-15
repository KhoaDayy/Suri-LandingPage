const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

async function captureSections() {
  const cdpPort = 9226;
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  
  const chrome = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${cdpPort}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'http://127.0.0.1:8085'
  ]);

  const cleanup = () => {
    try { chrome.kill(); } catch (e) {}
  };

  await new Promise(r => setTimeout(r, 1500));

  http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const targets = JSON.parse(data);
      const page = targets.find(t => t.type === 'page');
      if (!page) {
        cleanup();
        return;
      }

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
          method: 'Page.navigate',
          params: { url: 'http://127.0.0.1:8085/#lore' }
        }));
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.method === 'Page.loadEventFired') {
          // Scroll to lore and capture
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 10,
              method: 'Runtime.evaluate',
              params: { expression: 'document.getElementById("lore").scrollIntoView();' }
            }));
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 11,
                method: 'Page.captureScreenshot',
                params: { format: 'png' }
              }));
            }, 600);
          }, 1000);
        }

        if (msg.id === 11) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('docs/candypop_lore_desktop.png', buffer);
          console.log('Saved docs/candypop_lore_desktop.png (' + buffer.length + ' bytes)');

          // Scroll to specs
          ws.send(JSON.stringify({
            id: 20,
            method: 'Runtime.evaluate',
            params: { expression: 'document.getElementById("specs").scrollIntoView();' }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 21,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 600);
        }

        if (msg.id === 21) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('docs/candypop_specs_desktop.png', buffer);
          console.log('Saved docs/candypop_specs_desktop.png (' + buffer.length + ' bytes)');

          // Scroll to schedule
          ws.send(JSON.stringify({
            id: 30,
            method: 'Runtime.evaluate',
            params: { expression: 'document.getElementById("schedule").scrollIntoView();' }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 31,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 600);
        }

        if (msg.id === 31) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('docs/candypop_schedule_desktop.png', buffer);
          console.log('Saved docs/candypop_schedule_desktop.png (' + buffer.length + ' bytes)');
          cleanup();
          process.exit(0);
        }
      };
    });
  });
}

captureSections();
