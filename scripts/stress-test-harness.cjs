#!/usr/bin/env node
/**
 * ============================================================================
 * SURI MUKEKI SHOWCASE — TIER 5 INTERACTION & ACCESSIBILITY STRESS-TEST HARNESS
 * ============================================================================
 * Author: challenger_final_2 (Tier 5 Interaction & Accessibility Stress-Tester)
 *
 * Verifies live in Headless Chrome:
 * 1. Persona switcher lifecycle (Suri water slime vs. Irus lightning monarch)
 * 2. Model 3.0 glasses toggle lifecycle (suri_model3.webp vs. suri_model3_noglasses.webp)
 * 3. Video modal complete lifecycle (open, embed url, ESC key, backdrop, scroll lock/restore)
 * 4. Mobile navigation drawer lifecycle (open, link auto-close, ESC key, scroll lock/restore)
 * 5. Full keyboard accessibility audit (Tab reachability, accessible names, Enter/Space activation)
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m',
};

class StressTestHarness {
  constructor() {
    this.results = [];
    this.server = null;
    this.chrome = null;
    this.ws = null;
    this.msgId = 1;
    this.callbacks = new Map();
  }

  logPass(name, detail = '') {
    this.results.push({ name, status: 'PASS', detail });
    console.log(`  ${colors.green}✓ PASS${colors.reset} ${colors.bold}${name}${colors.reset}${detail ? ` (${colors.gray}${detail}${colors.reset})` : ''}`);
  }

  logFail(name, err) {
    this.results.push({ name, status: 'FAIL', error: err });
    console.error(`  ${colors.red}✗ FAIL${colors.reset} ${colors.bold}${name}${colors.reset}`);
    console.error(`    ${colors.red}Error: ${err}${colors.reset}`);
  }

  async startServer(port) {
    return new Promise((resolve, reject) => {
      this.server = http.createServer((req, res) => {
        let reqPath = req.url.split('?')[0];
        if (reqPath === '/') reqPath = '/index.html';
        const filePath = path.join(ROOT_DIR, 'dist', reqPath);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath);
          const mimeMap = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.png': 'image/png',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
            '.json': 'application/json',
          };
          res.writeHead(200, { 'Content-Type': mimeMap[ext] || 'application/octet-stream' });
          fs.createReadStream(filePath).pipe(res);
        } else {
          res.writeHead(404);
          res.end();
        }
      });

      this.server.listen(port, '127.0.0.1', () => {
        resolve();
      });
      this.server.on('error', reject);
    });
  }

  async launchChrome(serverPort, cdpPort) {
    this.chrome = spawn(CHROME_PATH, [
      '--headless=new',
      `--remote-debugging-port=${cdpPort}`,
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      `http://127.0.0.1:${serverPort}`,
    ]);

    // Wait for CDP to be ready
    for (let i = 0; i < 20; i++) {
      try {
        await new Promise(r => setTimeout(r, 200));
        const res = await fetch(`http://127.0.0.1:${cdpPort}/json`);
        const targets = await res.json();
        const page = targets.find(t => t.type === 'page');
        if (page && page.webSocketDebuggerUrl) {
          return page.webSocketDebuggerUrl;
        }
      } catch (e) {
        // retry
      }
    }
    throw new Error('Chrome remote debugging did not respond in time');
  }

  async connectCdp(wsUrl) {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const cb = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) {
            cb.reject(new Error(msg.error.message || JSON.stringify(msg.error)));
          } else {
            cb.resolve(msg.result);
          }
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.msgId++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval exception: ${res.exceptionDetails.text || res.exceptionDetails.exception?.description}`);
    }
    return res.result?.value;
  }

  async setViewport(width, height, isMobile = false) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: isMobile,
    });
  }

  async cleanup() {
    if (this.ws) {
      try { this.ws.close(); } catch (e) {}
    }
    if (this.chrome) {
      try { this.chrome.kill(); } catch (e) {}
    }
    if (this.server) {
      try { this.server.close(); } catch (e) {}
    }
  }

  async runAll() {
    console.log(`\n${colors.bold}${colors.cyan}======================================================================${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}  TIER 5 ADVERSARIAL INTERACTION & ACCESSIBILITY STRESS-TEST HARNESS  ${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}======================================================================${colors.reset}\n`);

    const serverPort = 8250 + Math.floor(Math.random() * 80);
    const cdpPort = serverPort + 100;

    try {
      await this.startServer(serverPort);
      const wsUrl = await this.launchChrome(serverPort, cdpPort);
      await this.connectCdp(wsUrl);

      await this.send('Page.enable');
      await this.send('Runtime.enable');
      await this.setViewport(1920, 1080, false);

      // Wait for initial render
      await new Promise(r => setTimeout(r, 1200));

      // ----------------------------------------------------------------------
      // SUITE 1: PERSONA SWITCHER STRESS TESTS
      // ----------------------------------------------------------------------
      console.log(`\n${colors.bold}${colors.magenta}▶ SUITE 1: Persona Switcher Stress Tests (Suri vs. Irus)${colors.reset}`);
      
      // Test 1.1: Initial State Verification
      try {
        const state = await this.eval(`(() => {
          const loreSection = document.getElementById('lore');
          if (!loreSection) return { error: 'Lore section not found' };
          const img = loreSection.querySelector('img[alt*="Suri Mukeki"]');
          const title = loreSection.querySelector('h4');
          return {
            hasImage: !!img,
            src: img ? img.src : '',
            title: title ? title.textContent.trim() : ''
          };
        })()`);
        if (state.error) throw new Error(state.error);
        if (!state.src.includes('suwi_courier_portrait.png')) {
          throw new Error(`Expected Suri image asset suwi_courier_portrait.png, got ${state.src}`);
        }
        if (!state.title.includes('Suri Mukeki')) {
          throw new Error(`Expected title containing Suri Mukeki, got "${state.title}"`);
        }
        this.logPass('T5-LORE-01: Persona Switcher initial state conforms to Suri Water Slime', `src: ...${state.src.slice(-30)}`);
      } catch (err) {
        this.logFail('T5-LORE-01: Persona Switcher initial state', err.message);
      }

      // Test 1.2: Toggle to Irus and Verify Visual Manifestation
      try {
        const state = await this.eval(`(async () => {
          const buttons = Array.from(document.querySelectorAll('#lore button'));
          const irusBtn = buttons.find(b => b.textContent.includes('Irus'));
          if (!irusBtn) return { error: 'Irus button not found' };
          irusBtn.click();
          await new Promise(r => setTimeout(r, 450));
          const loreSection = document.getElementById('lore');
          const img = loreSection.querySelector('img');
          const title = loreSection.querySelector('h4');
          return {
            src: img ? img.src : '',
            title: title ? title.textContent.trim() : ''
          };
        })()`);
        if (state.error) throw new Error(state.error);
        if (!state.src.includes('irus_alter_full.webp')) {
          throw new Error(`Expected Irus asset irus_alter_full.webp, got ${state.src}`);
        }
        if (!state.title.includes('Irus')) {
          throw new Error(`Expected title containing Irus, got "${state.title}"`);
        }
        this.logPass('T5-LORE-02: Persona Switcher transitions cleanly to Irus Lightning Sovereign', `src: ...${state.src.slice(-25)}`);
      } catch (err) {
        this.logFail('T5-LORE-02: Persona Switcher toggle to Irus', err.message);
      }

      // Test 1.3: Rapid Toggle Stress Test (Race Condition Resistance)
      try {
        const stress = await this.eval(`(async () => {
          const buttons = Array.from(document.querySelectorAll('#lore button'));
          const suriBtn = buttons.find(b => b.textContent.includes('Suri'));
          const irusBtn = buttons.find(b => b.textContent.includes('Irus'));
          if (!suriBtn || !irusBtn) return { error: 'Buttons not found' };

          // 24 rapid toggles with 20ms jitter
          for (let i = 0; i < 24; i++) {
            if (i % 2 === 0) suriBtn.click();
            else irusBtn.click();
            await new Promise(r => setTimeout(r, 20));
          }

          // Final click to Suri
          suriBtn.click();
          await new Promise(r => setTimeout(r, 500));

          const loreSection = document.getElementById('lore');
          const images = loreSection.querySelectorAll('img');
          const title = loreSection.querySelector('h4');
          return {
            imgCount: images.length,
            src: images[0] ? images[0].src : '',
            title: title ? title.textContent.trim() : ''
          };
        })()`);
        if (stress.error) throw new Error(stress.error);
        if (!stress.src.includes('suwi_courier_portrait.png')) {
          throw new Error(`Expected final Suri asset, got ${stress.src}`);
        }
        if (!stress.title.includes('Suri Mukeki')) {
          throw new Error(`Expected final Suri title, got "${stress.title}"`);
        }
        this.logPass('T5-LORE-03: Persona Switcher survives 24 rapid toggles without race condition', `resolved cleanly to Suri`);
      } catch (err) {
        this.logFail('T5-LORE-03: Rapid toggle race condition test', err.message);
      }

      // ----------------------------------------------------------------------
      // SUITE 2: MODEL 3.0 GLASSES TOGGLE STRESS TESTS
      // ----------------------------------------------------------------------
      console.log(`\n${colors.bold}${colors.magenta}▶ SUITE 2: Model 3.0 Glasses Toggle Stress Tests${colors.reset}`);

      // Test 2.1: Initial Glasses ON Verification
      try {
        const state = await this.eval(`(() => {
          const specsSection = document.getElementById('specs');
          if (!specsSection) return { error: 'Specs section not found' };
          const img = specsSection.querySelector('img[alt*="Model 3.0"]');
          return {
            hasImage: !!img,
            src: img ? img.src : '',
            alt: img ? img.alt : ''
          };
        })()`);
        if (state.error) throw new Error(state.error);
        if (!state.src.includes('suri_model3.webp') || state.src.includes('noglasses')) {
          throw new Error(`Expected glasses-on asset suri_model3.webp, got ${state.src}`);
        }
        this.logPass('T5-SPECS-01: Model 3.0 initial state renders glasses active (suri_model3.webp)', `alt: "${state.alt}"`);
      } catch (err) {
        this.logFail('T5-SPECS-01: Initial glasses state', err.message);
      }

      // Test 2.2: Toggle Glasses OFF Verification
      try {
        const state = await this.eval(`(async () => {
          const specsSection = document.getElementById('specs');
          const toggleBtn = Array.from(specsSection.querySelectorAll('button')).find(b => b.textContent.includes('Toggle Glasses'));
          if (!toggleBtn) return { error: 'Glasses toggle button not found' };
          toggleBtn.click();
          await new Promise(r => setTimeout(r, 450));
          const img = specsSection.querySelector('img[alt*="Model 3.0"]');
          return {
            src: img ? img.src : '',
            alt: img ? img.alt : '',
            btnText: toggleBtn.textContent.trim()
          };
        })()`);
        if (state.error) throw new Error(state.error);
        if (!state.src.includes('suri_model3_noglasses.webp')) {
          throw new Error(`Expected noglasses asset suri_model3_noglasses.webp, got ${state.src}`);
        }
        if (!state.alt.includes('without Glasses')) {
          throw new Error(`Expected alt text reflecting no glasses, got "${state.alt}"`);
        }
        this.logPass('T5-SPECS-02: Glasses toggle correctly swaps image to suri_model3_noglasses.webp', `btnText: "${state.btnText}"`);
      } catch (err) {
        this.logFail('T5-SPECS-02: Toggle glasses OFF', err.message);
      }

      // Test 2.3: Rapid Toggle Stress Test (30 cycles)
      try {
        const stress = await this.eval(`(async () => {
          const specsSection = document.getElementById('specs');
          const toggleBtn = Array.from(specsSection.querySelectorAll('button')).find(b => b.textContent.includes('Toggle Glasses'));
          if (!toggleBtn) return { error: 'Toggle button not found' };

          // 30 rapid clicks
          for (let i = 0; i < 30; i++) {
            toggleBtn.click();
            await new Promise(r => setTimeout(r, 15));
          }

          await new Promise(r => setTimeout(r, 400));
          const img = specsSection.querySelector('img[alt*="Model 3.0"]');
          return {
            src: img ? img.src : '',
            btnText: toggleBtn.textContent.trim()
          };
        })()`);
        if (stress.error) throw new Error(stress.error);
        // After 30 clicks starting from OFF, it should end at OFF (original was ON, toggle 1 made OFF, +30 toggles = OFF)
        if (!stress.src.includes('suri_model3_noglasses.webp')) {
          throw new Error(`Expected stable noglasses state after 30 clicks, got ${stress.src}`);
        }
        // One more click restores ON
        await this.eval(`(() => {
          const specsSection = document.getElementById('specs');
          const toggleBtn = Array.from(specsSection.querySelectorAll('button')).find(b => b.textContent.includes('Toggle Glasses'));
          toggleBtn.click();
        })()`);
        await new Promise(r => setTimeout(r, 400));
        const finalState = await this.eval(`(() => {
          const img = document.querySelector('#specs img[alt*="Model 3.0"]');
          return img ? img.src : '';
        })()`);
        if (!finalState.includes('suri_model3.webp') || finalState.includes('noglasses')) {
          throw new Error(`Expected restoration to suri_model3.webp, got ${finalState}`);
        }
        this.logPass('T5-SPECS-03: Model 3.0 glasses toggle survives 30 rapid clicks with exact parity', `restored to ON`);
      } catch (err) {
        this.logFail('T5-SPECS-03: Rapid glasses toggle stress test', err.message);
      }

      // ----------------------------------------------------------------------
      // SUITE 3: VIDEO MODAL LIFECYCLE STRESS TESTS
      // ----------------------------------------------------------------------
      console.log(`\n${colors.bold}${colors.magenta}▶ SUITE 3: Video Modal Lifecycle Stress Tests${colors.reset}`);

      // Test 3.1: Open Modal & Verify Embed URL and Body Scroll Lock
      try {
        const modalState = await this.eval(`(async () => {
          const scheduleSection = document.getElementById('schedule');
          if (!scheduleSection) return { error: 'Schedule section not found' };
          const coverCard = scheduleSection.querySelector('[role="button"]');
          if (!coverCard) return { error: 'Cover track card not found' };
          coverCard.click();

          await new Promise(r => setTimeout(r, 500));

          const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
          const iframe = modal ? modal.querySelector('iframe') : null;
          const bodyOverflow = document.body.style.overflow;

          return {
            hasModal: !!modal,
            hasIframe: !!iframe,
            src: iframe ? iframe.src : '',
            bodyOverflow,
            ariaLabel: modal ? modal.getAttribute('aria-label') : ''
          };
        })()`);

        if (modalState.error) throw new Error(modalState.error);
        if (!modalState.hasModal) throw new Error('Modal dialog did not appear in DOM');
        if (!modalState.hasIframe) throw new Error('Video iframe not rendered');
        if (!modalState.src.startsWith('https://www.youtube-nocookie.com/embed/')) {
          throw new Error(`Expected privacy-enhanced embed URL https://www.youtube-nocookie.com/embed/..., got ${modalState.src}`);
        }
        if (modalState.bodyOverflow !== 'hidden') {
          throw new Error(`Expected document.body.style.overflow === 'hidden', got "${modalState.bodyOverflow}"`);
        }
        this.logPass('T5-MODAL-01: Video Modal opens with verified nocookie embed URL and locks body scroll', `overflow: ${modalState.bodyOverflow}`);
      } catch (err) {
        this.logFail('T5-MODAL-01: Modal open & scroll lock', err.message);
      }

      // Test 3.2: Escape Key Dismiss & Scroll Restoration
      try {
        const escResult = await this.eval(`(async () => {
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
          await new Promise(r => setTimeout(r, 400));
          const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
          const bodyOverflow = document.body.style.overflow;
          return {
            modalClosed: !modal,
            bodyOverflow
          };
        })()`);

        if (!escResult.modalClosed) throw new Error('Modal dialog remained mounted after Escape key press');
        if (escResult.bodyOverflow !== '') {
          throw new Error(`Expected body overflow restored to empty string, got "${escResult.bodyOverflow}"`);
        }
        this.logPass('T5-MODAL-02: Escape key cleanly dismisses modal and restores body scroll', `restored to: "${escResult.bodyOverflow}"`);
      } catch (err) {
        this.logFail('T5-MODAL-02: Escape key dismiss & restoration', err.message);
      }

      // Test 3.3: Backdrop Click Dismiss vs. Modal Body Click Retention
      try {
        // Reopen modal
        await this.eval(`(() => {
          const coverCard = document.querySelector('#schedule [role="button"]');
          coverCard.click();
        })()`);
        await new Promise(r => setTimeout(r, 400));

        // Click inner modal card -> should NOT close
        const innerClickResult = await this.eval(`(async () => {
          const modalCard = document.querySelector('[role="dialog"] > div');
          if (!modalCard) return { error: 'Modal card inner div not found' };
          modalCard.click();
          await new Promise(r => setTimeout(r, 200));
          const modal = document.querySelector('[role="dialog"]');
          return { modalStillOpen: !!modal };
        })()`);
        if (innerClickResult.error) throw new Error(innerClickResult.error);
        if (!innerClickResult.modalStillOpen) {
          throw new Error('Modal unexpectedly closed when clicking inside modal card content');
        }

        // Now click backdrop (the outer dialog wrapper) -> should close
        const backdropClickResult = await this.eval(`(async () => {
          const backdrop = document.querySelector('[role="dialog"]');
          backdrop.click();
          await new Promise(r => setTimeout(r, 400));
          const modal = document.querySelector('[role="dialog"]');
          const bodyOverflow = document.body.style.overflow;
          return {
            modalClosed: !modal,
            bodyOverflow
          };
        })()`);
        if (!backdropClickResult.modalClosed) {
          throw new Error('Modal did not close on backdrop click');
        }
        if (backdropClickResult.bodyOverflow !== '') {
          throw new Error(`Body overflow not restored after backdrop click: "${backdropClickResult.bodyOverflow}"`);
        }
        this.logPass('T5-MODAL-03: Modal enforces stopPropagation internally and closes on backdrop click', `overflow restored`);
      } catch (err) {
        this.logFail('T5-MODAL-03: Backdrop click & click isolation', err.message);
      }

      // Test 3.4: Close Button Click Dismiss
      try {
        // Reopen modal
        await this.eval(`(() => {
          const coverCard = document.querySelector('#schedule [role="button"]');
          coverCard.click();
        })()`);
        await new Promise(r => setTimeout(r, 400));

        const closeBtnResult = await this.eval(`(async () => {
          const closeBtn = document.querySelector('button[aria-label="Close modal"]');
          if (!closeBtn) return { error: 'Close button not found' };
          closeBtn.click();
          await new Promise(r => setTimeout(r, 400));
          const modal = document.querySelector('[role="dialog"]');
          const bodyOverflow = document.body.style.overflow;
          return {
            modalClosed: !modal,
            bodyOverflow
          };
        })()`);
        if (closeBtnResult.error) throw new Error(closeBtnResult.error);
        if (!closeBtnResult.modalClosed) throw new Error('Modal did not close on close button click');
        if (closeBtnResult.bodyOverflow !== '') throw new Error(`Body overflow not restored: "${closeBtnResult.bodyOverflow}"`);
        this.logPass('T5-MODAL-04: Close button dismisses modal and restores body scroll', `restored`);
      } catch (err) {
        this.logFail('T5-MODAL-04: Close button dismiss', err.message);
      }

      // ----------------------------------------------------------------------
      // SUITE 4: MOBILE NAVIGATION DRAWER STRESS TESTS
      // ----------------------------------------------------------------------
      console.log(`\n${colors.bold}${colors.magenta}▶ SUITE 4: Mobile Navigation Drawer Stress Tests${colors.reset}`);

      // Set mobile viewport 390x844
      await this.setViewport(390, 844, true);
      await new Promise(r => setTimeout(r, 400));

      // Test 4.1: Hamburger Open & Scroll Lock
      try {
        const openResult = await this.eval(`(async () => {
          const hamburger = document.querySelector('button[aria-label="Toggle navigation menu"]');
          if (!hamburger) return { error: 'Hamburger toggle button not found' };
          hamburger.click();
          await new Promise(r => setTimeout(r, 400));

          const drawer = document.querySelector('[role="dialog"][aria-label="Mobile Navigation"]');
          const bodyOverflow = document.body.style.overflow;
          const links = drawer ? drawer.querySelectorAll('a') : [];

          return {
            drawerOpen: !!drawer,
            bodyOverflow,
            linkCount: links.length
          };
        })()`);
        if (openResult.error) throw new Error(openResult.error);
        if (!openResult.drawerOpen) throw new Error('Mobile navigation drawer did not open');
        if (openResult.bodyOverflow !== 'hidden') throw new Error(`Expected mobile scroll lock 'hidden', got "${openResult.bodyOverflow}"`);
        if (openResult.linkCount < 4) throw new Error(`Expected >=4 links in drawer, got ${openResult.linkCount}`);
        this.logPass('T5-NAV-01: Mobile hamburger toggle opens navigation drawer with scroll lock', `${openResult.linkCount} links available`);
      } catch (err) {
        this.logFail('T5-NAV-01: Hamburger toggle open', err.message);
      }

      // Test 4.2: Link Click Auto-Close
      try {
        const linkCloseResult = await this.eval(`(async () => {
          const drawer = document.querySelector('[role="dialog"][aria-label="Mobile Navigation"]');
          if (!drawer) return { error: 'Drawer not found' };
          const link = Array.from(drawer.querySelectorAll('a')).find(a => a.getAttribute('href') === '#lore');
          if (!link) return { error: '#lore link not found in drawer' };
          link.click();
          await new Promise(r => setTimeout(r, 400));
          const drawerAfter = document.querySelector('[role="dialog"][aria-label="Mobile Navigation"]');
          const bodyOverflow = document.body.style.overflow;
          return {
            drawerClosed: !drawerAfter,
            bodyOverflow
          };
        })()`);
        if (linkCloseResult.error) throw new Error(linkCloseResult.error);
        if (!linkCloseResult.drawerClosed) throw new Error('Mobile drawer did not auto-close upon navigation link click');
        if (linkCloseResult.bodyOverflow !== '') throw new Error(`Body overflow not restored upon link click: "${linkCloseResult.bodyOverflow}"`);
        this.logPass('T5-NAV-02: Mobile drawer auto-closes upon link navigation and restores body scroll', `restored to: "${linkCloseResult.bodyOverflow}"`);
      } catch (err) {
        this.logFail('T5-NAV-02: Link click auto-close', err.message);
      }

      // Test 4.3: Escape Key Dismiss for Mobile Drawer
      try {
        // Reopen drawer
        await this.eval(`(() => {
          const hamburger = document.querySelector('button[aria-label="Toggle navigation menu"]');
          hamburger.click();
        })()`);
        await new Promise(r => setTimeout(r, 400));

        const escResult = await this.eval(`(async () => {
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
          await new Promise(r => setTimeout(r, 400));
          const drawer = document.querySelector('[role="dialog"][aria-label="Mobile Navigation"]');
          const bodyOverflow = document.body.style.overflow;
          return {
            drawerClosed: !drawer,
            bodyOverflow
          };
        })()`);
        if (!escResult.drawerClosed) throw new Error('Mobile drawer did not close on Escape key');
        if (escResult.bodyOverflow !== '') throw new Error(`Body overflow not restored: "${escResult.bodyOverflow}"`);
        this.logPass('T5-NAV-03: Escape key dismisses mobile drawer and restores body scroll', `restored`);
      } catch (err) {
        this.logFail('T5-NAV-03: Escape key dismiss for drawer', err.message);
      }

      // Reset to desktop viewport 1920x1080
      await this.setViewport(1920, 1080, false);
      await new Promise(r => setTimeout(r, 400));

      // ----------------------------------------------------------------------
      // SUITE 5: KEYBOARD ACCESSIBILITY AUDIT
      // ----------------------------------------------------------------------
      console.log(`\n${colors.bold}${colors.magenta}▶ SUITE 5: Keyboard Accessibility & Focus Audit${colors.reset}`);

      // Test 5.1: Tab Reachability Audit
      try {
        const audit = await this.eval(`(() => {
          const interactive = Array.from(document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex="0"]'));
          const report = {
            total: interactive.length,
            unreachable: [],
            missingAria: [],
            interactiveKinds: {}
          };

          for (const el of interactive) {
            const tag = el.tagName.toLowerCase();
            report.interactiveKinds[tag] = (report.interactiveKinds[tag] || 0) + 1;

            // Check if element is hidden
            const style = window.getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') continue;

            // Check tabIndex
            const tabIndex = el.tabIndex;
            if (tabIndex < 0) {
              report.unreachable.push({
                tag,
                text: el.textContent.trim().slice(0, 30),
                ariaLabel: el.getAttribute('aria-label')
              });
            }

            // Check accessible name
            const accessibleName = el.getAttribute('aria-label') ||
                                   el.getAttribute('title') ||
                                   el.textContent.trim() ||
                                   (el.querySelector('img') && el.querySelector('img').alt);

            if (!accessibleName) {
              report.missingAria.push({
                tag,
                id: el.id,
                className: el.className ? String(el.className).slice(0, 40) : ''
              });
            }
          }

          return report;
        })()`);

        if (audit.unreachable.length > 0) {
          throw new Error(`Found ${audit.unreachable.length} interactive elements with negative tabIndex: ${JSON.stringify(audit.unreachable)}`);
        }
        if (audit.missingAria.length > 0) {
          throw new Error(`Found ${audit.missingAria.length} interactive elements without accessible name: ${JSON.stringify(audit.missingAria)}`);
        }

        this.logPass('T5-A11Y-01: Tab reachability and accessible name invariant verified', `audited ${audit.total} interactive elements`);
      } catch (err) {
        this.logFail('T5-A11Y-01: Tab reachability audit', err.message);
      }

      // Test 5.2: Enter / Space Keyboard Activation on Custom Interactive Cards
      try {
        const kbdResult = await this.eval(`(async () => {
          const card = document.querySelector('#schedule [role="button"]');
          if (!card) return { error: 'Schedule card not found' };

          // Focus the card
          card.focus();

          // Dispatch Enter keydown
          card.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }));
          await new Promise(r => setTimeout(r, 450));

          const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
          const openedViaEnter = !!modal;

          // Close modal
          if (modal) {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
            await new Promise(r => setTimeout(r, 400));
          }

          // Now test Space keydown
          card.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
          await new Promise(r => setTimeout(r, 450));

          const modal2 = document.querySelector('[role="dialog"][aria-modal="true"]');
          const openedViaSpace = !!modal2;

          // Close modal
          if (modal2) {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
            await new Promise(r => setTimeout(r, 400));
          }

          return {
            openedViaEnter,
            openedViaSpace,
            bodyOverflow: document.body.style.overflow
          };
        })()`);

        if (kbdResult.error) throw new Error(kbdResult.error);
        if (!kbdResult.openedViaEnter) throw new Error('LiquidCard [role="button"] failed to activate on Enter keydown');
        if (!kbdResult.openedViaSpace) throw new Error('LiquidCard [role="button"] failed to activate on Space keydown');
        if (kbdResult.bodyOverflow !== '') throw new Error(`Body overflow not restored: "${kbdResult.bodyOverflow}"`);

        this.logPass('T5-A11Y-02: LiquidCard custom interactive controls fully activatable via Enter and Space', `Enter: OK, Space: OK`);
      } catch (err) {
        this.logFail('T5-A11Y-02: Enter / Space keyboard activation', err.message);
      }

    } catch (fatal) {
      console.error(`\n${colors.red}${colors.bold}Fatal stress harness error: ${fatal.message}${colors.reset}\n${fatal.stack}`);
      this.results.push({ name: 'FATAL', status: 'FAIL', error: fatal.message });
    } finally {
      await this.cleanup();
    }

    // ----------------------------------------------------------------------
    // SUMMARY REPORT
    // ----------------------------------------------------------------------
    const total = this.results.length;
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;

    console.log(`\n${colors.bold}${colors.cyan}======================================================================${colors.reset}`);
    console.log(`${colors.bold}  STRESS-TEST HARNESS VERDICT: ${passed}/${total} PASSED  (${failed} FAILED)${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}======================================================================${colors.reset}\n`);

    if (failed > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  }
}

const harness = new StressTestHarness();
harness.runAll().catch(err => {
  console.error('Unhandled harness exception:', err);
  process.exit(1);
});
