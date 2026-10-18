const http = require('http');
const { spawn } = require('child_process');

const cdpPort = 9366;
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  `--remote-debugging-port=${cdpPort}`,
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  'http://localhost:5173'
]);

setTimeout(() => {
  http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const targets = JSON.parse(data);
      const page = targets.find(t => t.type === 'page');
      const ws = new WebSocket(page.webSocketDebuggerUrl);
      const errors = [];
      ws.onopen = () => {
        ws.send(JSON.stringify({ id: 1, method: 'Log.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
      };
      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.method === 'Runtime.exceptionThrown') {
          errors.push(msg.params.exceptionDetails);
        }
        if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
          errors.push(msg.params.entry);
        }
      };
      setTimeout(() => {
        console.log('Console Errors:', JSON.stringify(errors, null, 2));
        chrome.kill();
        process.exit(0);
      }, 2500);
    });
  });
}, 1500);
