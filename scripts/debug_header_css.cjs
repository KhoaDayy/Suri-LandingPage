const http = require('http');
const { spawn } = require('child_process');

const cdpPort = 9360;
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
      ws.onopen = () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            awaitPromise: true,
            returnByValue: true,
            expression: `
              (() => {
                const header = document.querySelector('header');
                const matchedRules = [];
                for (const sheet of document.styleSheets) {
                  try {
                    for (const rule of sheet.cssRules) {
                      if (rule.selectorText && header.matches(rule.selectorText)) {
                        matchedRules.push({
                          selector: rule.selectorText,
                          cssText: rule.cssText
                        });
                      }
                    }
                  } catch (e) {}
                }
                return {
                  headerClass: header.className,
                  matchedRules
                };
              })()
            `
          }
        }));
      };
      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 1) {
          console.log('Matched Rules:', JSON.stringify(msg.result?.result?.value, null, 2));
          chrome.kill();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
