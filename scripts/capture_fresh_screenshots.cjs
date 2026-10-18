const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  console.log('=== STARTING FRESH SCREENSHOT CAPTURE PIPELINE ===');

  // 1. Start HTTP Server serving dist/
  const port = 8245;
  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(ROOT_DIR, 'dist', reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const mimes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.webp': 'image/webp',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      };
      res.writeHead(200, { 'Content-Type': mimes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  await new Promise(r => server.listen(port, '127.0.0.1', r));
  console.log(`[HTTP Server] Listening on http://127.0.0.1:${port}`);

  // 2. Launch headless Chrome with CDP
  const cdpPort = 9482;
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${cdpPort}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `http://127.0.0.1:${port}`
  ]);

  const cleanup = () => {
    try { chrome.kill(); } catch (e) {}
    try { server.close(); } catch (e) {}
  };

  // Wait for Chrome remote debugging
  await new Promise(r => setTimeout(r, 1500));

  const pageTarget = await new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${cdpPort}/json`, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const targets = JSON.parse(data);
          const p = targets.find(t => t.type === 'page');
          if (p) resolve(p);
          else reject(new Error('Page target not found'));
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();

  function sendCmd(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (evt) => {
    const data = JSON.parse(evt.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(new Error(data.error.message));
      else resolve(data.result);
    }
  };

  await new Promise(r => ws.onopen = r);
  console.log('[CDP] Connected to Chrome page target');

  await sendCmd('Page.enable');
  await sendCmd('DOM.enable');

  async function setViewport(width, height, isMobile = false) {
    await sendCmd('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2, // High-DPI crisp capture
      mobile: isMobile
    });
    await new Promise(r => setTimeout(r, 300));
  }

  async function captureToFile(relPath, clip = null) {
    const params = { format: 'png' };
    if (clip) params.clip = clip;
    const res = await sendCmd('Page.captureScreenshot', params);
    const buf = Buffer.from(res.data, 'base64');
    const outPath = path.join(ROOT_DIR, relPath);
    fs.writeFileSync(outPath, buf);
    console.log(`[Captured] ${relPath} (${(buf.length / 1024).toFixed(1)} KB)`);
  }

  async function evaluate(code) {
    const res = await sendCmd('Runtime.evaluate', {
      expression: code,
      returnByValue: true,
      awaitPromise: true
    });
    return res.result?.value;
  }

  try {
    // ------------------------------------------------------------------------
    // A. Desktop Captures (1440 x 900)
    // ------------------------------------------------------------------------
    await setViewport(1440, 920, false);
    await sendCmd('Page.navigate', { url: `http://127.0.0.1:${port}` });
    await new Promise(r => setTimeout(r, 2000)); // wait for animations to settle

    // 1. Dark Mode Full / Hero View
    await evaluate(`window.scrollTo(0, 0);`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/screenshot_dark_verified.png');
    await captureToFile('docs/audit_dark_hero.png');

    // 2. Toggle to Light Mode
    await evaluate(`
      const btn = Array.from(document.querySelectorAll('button')).find(b => {
        const l = (b.getAttribute('aria-label') || '').toLowerCase();
        return l.includes('chế độ') || l.includes('sáng') || l.includes('giao diện');
      });
      if (btn) btn.click();
    `);
    await new Promise(r => setTimeout(r, 800));

    // 3. Light Mode Full / Hero View
    await captureToFile('docs/screenshot_light_verified.png');
    await captureToFile('docs/audit_light_hero.png');

    // Light Mode Lore Section
    await evaluate(`document.getElementById('lore')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_light_lore.png');

    // Light Mode Specs Section
    await evaluate(`document.getElementById('specs')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_light_specs.png');

    // Light Mode Schedule Section
    await evaluate(`document.getElementById('schedule')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_light_schedule.png');

    // Light Mode Footer Section
    await evaluate(`document.querySelector('footer')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_light_footer.png');

    // 4. Toggle back to Dark Mode for Dark Mode section captures
    await evaluate(`
      const btn = Array.from(document.querySelectorAll('button')).find(b => {
        const l = (b.getAttribute('aria-label') || '').toLowerCase();
        return l.includes('chế độ') || l.includes('tối') || l.includes('giao diện');
      });
      if (btn) btn.click();
    `);
    await new Promise(r => setTimeout(r, 800));

    // Dark Mode Lore Section (redesigned!)
    await evaluate(`document.getElementById('lore')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_dark_lore.png');

    // Dark Mode Specs Section (with 3D model)
    await evaluate(`document.getElementById('specs')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_dark_specs.png');

    // Dark Mode Schedule Section
    await evaluate(`document.getElementById('schedule')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_dark_schedule.png');

    // Dark Mode Footer Section (with new Contact Card)
    await evaluate(`document.querySelector('footer')?.scrollIntoView({ behavior: 'instant' });`);
    await new Promise(r => setTimeout(r, 800));
    await captureToFile('docs/audit_dark_footer.png');

    // ------------------------------------------------------------------------
    // B. Mobile Captures (390 x 844 - iPhone standard)
    // ------------------------------------------------------------------------
    await setViewport(390, 844, true);
    await evaluate(`window.scrollTo(0, 0);`);
    await new Promise(r => setTimeout(r, 800));

    // Mobile Hero
    await captureToFile('docs/current_hero_mobile.png');

    // Open Mobile Drawer
    await evaluate(`
      const hamburger = Array.from(document.querySelectorAll('button')).find(b => {
        const l = (b.getAttribute('aria-label') || '').toLowerCase();
        return l.includes('menu') || l.includes('mở menu') || l.includes('navigation');
      });
      if (hamburger) hamburger.click();
    `);
    await new Promise(r => setTimeout(r, 600));

    // Mobile Drawer
    await captureToFile('docs/screenshot_mobile_drawer.png');

    console.log('=== ALL FRESH SCREENSHOTS CAPTURED SUCCESSFULLY! ===');
  } catch (err) {
    console.error('Error during screenshot capture:', err);
  } finally {
    ws.close();
    cleanup();
  }
}

main().catch(err => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});
