const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

async function capture() {
  const cdpPort = 9227;
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
        console.error('No page found');
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
          params: { url: 'http://127.0.0.1:8085/?v=' + Date.now() }
        }));
      };

      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.method === 'Page.loadEventFired') {
          setTimeout(() => {
            // 1. Capture Hero
            ws.send(JSON.stringify({
              id: 10,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 1500);
        }

        if (msg.id === 10) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('docs/candypop_hero_desktop.png', buffer);
          console.log('Saved docs/candypop_hero_desktop.png (' + buffer.length + ' bytes)');

          // 2. Scroll to Lore
          ws.send(JSON.stringify({
            id: 11,
            method: 'Runtime.evaluate',
            params: { expression: 'document.getElementById("lore").scrollIntoView();' }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 12,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 800);
        }

        if (msg.id === 12) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('docs/candypop_lore_desktop.png', buffer);
          console.log('Saved docs/candypop_lore_desktop.png (' + buffer.length + ' bytes)');

          // 3. Scroll to Specs
          ws.send(JSON.stringify({
            id: 13,
            method: 'Runtime.evaluate',
            params: { expression: 'document.getElementById("specs").scrollIntoView();' }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 14,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 800);
        }

        if (msg.id === 14) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('docs/candypop_specs_desktop.png', buffer);
          console.log('Saved docs/candypop_specs_desktop.png (' + buffer.length + ' bytes)');

          // 4. Scroll to Schedule
          ws.send(JSON.stringify({
            id: 15,
            method: 'Runtime.evaluate',
            params: { expression: 'document.getElementById("schedule").scrollIntoView();' }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 16,
              method: 'Page.captureScreenshot',
              params: { format: 'png' }
            }));
          }, 800);
        }

        if (msg.id === 16) {
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

capture();
