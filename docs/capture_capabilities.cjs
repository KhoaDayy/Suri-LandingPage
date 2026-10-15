const http = require('http');
const fs = require('fs');

http.get('http://127.0.0.1:9222/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    const page = JSON.parse(data).find(t => t.type === 'page' && (t.url.includes('trycloudflare') || t.url.includes('8085')));
    if (!page) {
      console.log('No page target found');
      return;
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    ws.onopen = () => {
      // Set desktop viewport
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }
      }));

      // Scroll to Section 2 (Capabilities)
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `window.scrollTo({ top: window.innerHeight, behavior: 'instant' })`
          }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 3,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 800);
      }, 500);
    };

    ws.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === 3) {
        const buffer = Buffer.from(msg.result.data, 'base64');
        fs.writeFileSync('docs/agency_capabilities_desktop.png', buffer);
        console.log('Capabilities screenshot saved (' + buffer.length + ' bytes)');
        ws.close();
        process.exit(0);
      }
    };
  });
});
