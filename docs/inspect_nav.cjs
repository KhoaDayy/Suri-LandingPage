const http = require('http');

http.get('http://127.0.0.1:9222/json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const page = JSON.parse(data).find(t => t.type === 'page' && (t.url.includes('trycloudflare') || t.url.includes('8085')));
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    ws.onopen = () => {
      const code = `
        (() => {
          const inner = document.querySelector('.nav__inner').getBoundingClientRect();
          const brand = document.querySelector('.nav__brand').getBoundingClientRect();
          const actions = document.querySelector('.nav__actions').getBoundingClientRect();
          const btn = document.querySelector('.btn-pill--dark').getBoundingClientRect();
          return {
            inner: { left: inner.left, right: inner.right, width: inner.width },
            brand: { left: brand.left, right: brand.right, width: brand.width },
            actions: { left: actions.left, right: actions.right, width: actions.width },
            btn: { left: btn.left, right: btn.right, width: btn.width },
            docWidth: document.documentElement.clientWidth,
            winWidth: window.innerWidth
          };
        })()
      `;
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: code, returnByValue: true }
      }));
    };
    ws.onmessage = (msg) => {
      const parsed = JSON.parse(msg.data);
      if (parsed.id === 1) {
        console.log('NAV METRICS:', JSON.stringify(parsed.result.result.value, null, 2));
        ws.close();
        process.exit(0);
      }
    };
  });
});
