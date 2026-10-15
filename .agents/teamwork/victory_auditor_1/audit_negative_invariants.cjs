const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../../..');

const bannedKeywords = [
  'Booking Q3 2026',
  'Crafted Digital Experiences',
  'web design studio',
  'web design agency',
  'Start a Project',
  '12+ Industry Awards',
  '140+ Brands Shipped',
  '6 Weeks Average End-to-End',
  'Studio craft, end to end',
  '// Capabilities',
  "'Aeon'",
  "'Vela'",
  "'Orbit'",
  "'Zeno'",
  'VALENCE',
  'KINETIC',
  'AURA', // Check as standalone word
];

function findSourceFiles(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) {
      if (['node_modules', '.git', 'dist', '.agents', 'docs'].includes(f.name)) continue;
      res = res.concat(findSourceFiles(p));
    } else if (/\.(tsx?|jsx?|html|css|json)$/.test(f.name)) {
      if (f.name.includes('index.suri')) continue; // Ignore legacy backup
      res.push(p);
    }
  }
  return res;
}

const files = [path.join(root, 'index.html'), ...findSourceFiles(path.join(root, 'src'))];
let violations = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);

  for (const kw of bannedKeywords) {
    if (kw === 'AURA') {
      const auraRegex = /\bAURA\b/;
      if (auraRegex.test(content)) {
        violations.push({ file: rel, keyword: kw });
      }
    } else {
      if (content.toLowerCase().includes(kw.toLowerCase())) {
        violations.push({ file: rel, keyword: kw });
      }
    }
  }
}

console.log('Scanned files count:', files.length);
console.log('Violations count:', violations.length);
if (violations.length > 0) {
  console.error('Violations found:', violations);
}
process.exit(violations.length > 0 ? 1 : 0);
