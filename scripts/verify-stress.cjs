const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

console.log('=== RUNNING ADVERSARIAL WHITE-BOX & EDGE CASE SUITE ===\n');

let passCount = 0;
let failCount = 0;

function check(title, fn) {
  try {
    fn();
    console.log(`[PASS] ${title}`);
    passCount++;
  } catch (err) {
    console.error(`[FAIL] ${title}: ${err.message}`);
    failCount++;
  }
}

// 1. YouTube Video IDs
check('All YouTube Video IDs are strictly 11-char alphanumeric strings', () => {
  const suriData = fs.readFileSync(path.join(ROOT, 'src/data/suriData.ts'), 'utf8');
  const matches = [...suriData.matchAll(/youtubeId:\s*['"]([a-zA-Z0-9_\-]+)['"]/g)];
  if (matches.length === 0) throw new Error('No youtubeId found');
  for (const m of matches) {
    const id = m[1];
    if (id.length !== 11) throw new Error(`Invalid youtubeId length: "${id}" (${id.length} != 11)`);
    if (!/^[a-zA-Z0-9_\-]{11}$/.test(id)) throw new Error(`Invalid youtubeId format: "${id}"`);
  }
  console.log(`       Verified ${matches.length} YouTube Video IDs.`);
});

// 2. All External URLs are https and legitimate
check('All external URLs use secure HTTPS and trusted domains', () => {
  const suriData = fs.readFileSync(path.join(ROOT, 'src/data/suriData.ts'), 'utf8');
  const urls = [...new Set(suriData.match(/https?:\/\/[^\s'"\)]+/g) || [])];
  if (urls.length === 0) throw new Error('No URLs found');
  for (const u of urls) {
    if (!u.startsWith('https://')) throw new Error(`Insecure HTTP URL found: ${u}`);
    const parsed = new URL(u);
    const trustedDomains = [
      'youtube.com', 'www.youtube.com',
      'x.com', 'twitter.com',
      'discord.gg',
      'surimukeki.carrd.co',
      'www.facebook.com', 'facebook.com',
      'marshmallow-qa.com'
    ];
    if (!trustedDomains.some(d => parsed.hostname === d || parsed.hostname.endsWith('.' + d))) {
      throw new Error(`Untrusted domain in data: ${parsed.hostname}`);
    }
  }
  console.log(`       Verified ${urls.length} external URLs across trusted domains.`);
});

// 3. Anchor Target Integrity
check('All in-page navigation anchors map directly to section IDs in active components', () => {
  const navContent = fs.readFileSync(path.join(ROOT, 'src/components/layout/Navbar.tsx'), 'utf8');
  const appContent = fs.readFileSync(path.join(ROOT, 'src/App.tsx'), 'utf8');
  const suriData = fs.readFileSync(path.join(ROOT, 'src/data/suriData.ts'), 'utf8');
  
  const expectedSections = ['hero', 'lore', 'specs', 'schedule'];
  for (const s of expectedSections) {
    if (!suriData.includes(`'#${s}'`) && !suriData.includes(`"#${s}"`)) {
      throw new Error(`Section #${s} missing in NAV_LINKS`);
    }
    const sectionFile = fs.readFileSync(path.join(ROOT, `src/components/sections/${s.charAt(0).toUpperCase() + s.slice(1)}Section.tsx`), 'utf8');
    if (!sectionFile.includes(`id="${s}"`)) {
      throw new Error(`Component does not have id="${s}"`);
    }
  }
  console.log('       All 4 primary sections (#hero, #lore, #specs, #schedule) map 1:1 to active section components.');
});

// 4. White-box check: index.html metadata integrity
check('index.html contains complete authentic metadata, title, favicon, and dark background', () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  if (!html.includes('Suri Mukeki — VTuber Showcase')) {
    throw new Error('Title does not match Suri Mukeki format');
  }
  if (!html.includes('/images/icons/logo_suri.png')) {
    throw new Error('Favicon link missing or unauthentic');
  }
  if (!/name="description"[\s\S]*?content="Suri Mukeki/i.test(html)) {
    throw new Error('Meta description missing or unauthentic');
  }
  if (!html.includes('class="bg-black text-white font-body')) {
    throw new Error('Root HTML element missing dark cinematic base classes');
  }
});

// 5. White-box check: CSS overflow prevention
check('CSS enforces overflow-x hidden on root html and body', () => {
  const css = fs.readFileSync(path.join(ROOT, 'src/index.css'), 'utf8');
  if (!/html,\s*body\s*\{[^}]*overflow-x:\s*hidden/m.test(css)) {
    throw new Error('index.css does not enforce overflow-x: hidden on html, body');
  }
});

console.log(`\n========================================`);
console.log(`RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
if (failCount > 0) process.exit(1);
