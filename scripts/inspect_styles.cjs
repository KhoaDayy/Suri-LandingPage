const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

const cdpPort = 9359;
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
                const hero = document.getElementById('hero');
                const html = document.documentElement;
                
                // Let's test in light mode
                html.className = 'scroll-smooth light';
                
                const headerStyle = getComputedStyle(header);
                const heroStyle = getComputedStyle(hero);
                
                // Check all stylesheets in document
                const sheets = Array.from(document.styleSheets).map(s => {
                  try {
                    return { href: s.href, rulesCount: s.cssRules.length };
                  } catch (e) {
                    return { href: s.href, error: e.message };
                  }
                });
                
                return {
                  htmlClasses: html.className,
                  headerBg: headerStyle.backgroundColor,
                  headerColor: headerStyle.color,
                  heroBg: heroStyle.backgroundColor,
                  heroColor: heroStyle.color,
                  sheets
                };
              })()
            `
          }
        }));
      };
      ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 1) {
          console.log('Inspection:', JSON.stringify(msg.result?.result?.value, null, 2));
          chrome.kill();
          process.exit(0);
        }
      };
    });
  });
}, 2000);
