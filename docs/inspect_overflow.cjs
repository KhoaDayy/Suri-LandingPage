const http = require('http');

http.get('http://127.0.0.1:9222/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const targets = JSON.parse(data);
    const page = targets.find(t => t.type === 'page' && (t.url.includes('trycloudflare') || t.url.includes('8085')));
    if (!page) {
      console.log('No matching page found');
      return;
    }
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      ws.send(JSON.stringify({
        id: 2,
        method: 'Emulation.setDeviceMetricsOverride',
        params: { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }
      }));
      ws.send(JSON.stringify({ id: 3, method: 'Page.reload' }));
    };

    ws.onmessage = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.method === 'Page.loadEventFired') {
        setTimeout(() => {
          const checkScript = `
            (() => {
              const docWidth = document.documentElement.clientWidth;
              const res = [];
              const all = document.querySelectorAll('*');
              for (const el of all) {
                const r = el.getBoundingClientRect();
                if (r.right > docWidth + 1) {
                  res.push({
                    tag: el.tagName,
                    class: el.className,
                    right: Math.round(r.right),
                    docWidth
                  });
                }
              }
              return res;
            })()
          `;
          ws.send(JSON.stringify({
            id: 10,
            method: 'Runtime.evaluate',
            params: { expression: checkScript, returnByValue: true }
          }));
        }, 500);
      }
      if (msg.id === 10) {
        console.log('OVERFLOW CHECK ON MOBILE (390px):', JSON.stringify(msg.result.result.value, null, 2));
        ws.close();
        process.exit(0);
      }
    };
  });
});
