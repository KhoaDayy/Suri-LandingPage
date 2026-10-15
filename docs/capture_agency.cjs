const http = require('http');
const fs = require('fs');

http.get('http://127.0.0.1:9222/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    const targets = JSON.parse(data);
    const page = targets.find(t => t.type === 'page' && (t.url.includes('trycloudflare') || t.url.includes('8085')));
    if (!page) {
      console.log('No page target found');
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
        params: { url: 'http://127.0.0.1:8085/?nocache=' + Date.now() }
      }));
    };

    ws.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.method === 'Page.loadEventFired') {
        // Wait 2200ms for Framer Motion stagger animations (up to 1.4s) to complete
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 11,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 2200);
      }

      if (msg.id === 11) {
        const buffer = Buffer.from(msg.result.data, 'base64');
        fs.writeFileSync('docs/agency_desktop_rendered.png', buffer);
        console.log('Desktop screenshot saved (' + buffer.length + ' bytes)');

        // Now emulate mobile and capture
        ws.send(JSON.stringify({
          id: 12,
          method: 'Emulation.setDeviceMetricsOverride',
          params: { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 13,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 800);
      }

      if (msg.id === 13) {
        const buffer = Buffer.from(msg.result.data, 'base64');
        fs.writeFileSync('docs/agency_mobile_rendered.png', buffer);
        console.log('Mobile screenshot saved (' + buffer.length + ' bytes)');
        ws.close();
        process.exit(0);
      }
    };
  });
});
