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
        params: {
          width: 390,
          height: 844,
          deviceScaleFactor: 2,
          mobile: true
        }
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
        setTimeout(() => {
          // Check metrics
          const metricsCode = `(() => {
            const inner = document.querySelector('.nav__inner').getBoundingClientRect();
            const brand = document.querySelector('.nav__brand').getBoundingClientRect();
            const actions = document.querySelector('.nav__actions').getBoundingClientRect();
            const heroLead = document.querySelector('.hero__lead').getBoundingClientRect();
            return {
              docWidth: document.documentElement.clientWidth,
              inner: { left: inner.left, right: inner.right, width: inner.width },
              brand: { left: brand.left, right: brand.right, width: brand.width },
              actions: { left: actions.left, right: actions.right, width: actions.width },
              heroLead: { left: heroLead.left, right: heroLead.right, width: heroLead.width }
            };
          })()`;

          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: { expression: metricsCode, returnByValue: true }
          }));

          // Capture screenshot via CDP
          ws.send(JSON.stringify({
            id: 11,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 800);
      }

      if (msg.id === 10) {
        console.log('METRICS:', JSON.stringify(msg.result.result.value, null, 2));
      }

      if (msg.id === 11) {
        const buffer = Buffer.from(msg.result.data, 'base64');
        fs.writeFileSync('docs/mobile_cdp.png', buffer);
        console.log('Screenshot saved to docs/mobile_cdp.png (' + buffer.length + ' bytes)');
        ws.close();
        process.exit(0);
      }
    };
  });
});
