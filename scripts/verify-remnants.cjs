const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const FORBIDDEN_PATTERNS = [
  { name: 'Booking Q3', regex: /booking\s*q3/i },
  { name: 'Agency AURA project', regex: /\bAURA\b/ }, // exact case AURA
  { name: 'VALENCE', regex: /valence/i },
  { name: 'web design studio', regex: /web\s*design\s*studio/i },
  { name: 'web design agency', regex: /web\s*design\s*agency/i },
  { name: 'Aeon', regex: /\baeon\b/i },
  { name: 'Vela', regex: /\bvela\b/i },
  { name: 'Orbit', regex: /\borbit\b/i },
  { name: 'Zeno', regex: /\bzeno\b/i },
  { name: 'Start a Project', regex: /start\s*a\s*project/i },
  { name: '140+ Brands', regex: /140\+\s*brands/i },
];

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const filesToCheck = [
  path.join(ROOT, 'index.html'),
  ...getFiles(path.join(ROOT, 'src')),
  ...getFiles(path.join(ROOT, 'dist')),
].filter(f => /\.(html|js|jsx|ts|tsx|css|json)$/i.test(f));

console.log(`Checking ${filesToCheck.length} files across index.html, src/**/*, dist/**/* for forbidden branding...\n`);

let totalViolations = 0;

for (const file of filesToCheck) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(ROOT, file);

  for (const pattern of FORBIDDEN_PATTERNS) {
    if (pattern.regex.test(content)) {
      console.error(`[VIOLATION] Found forbidden pattern "${pattern.name}" in ${rel}!`);
      // Find matching line
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (pattern.regex.test(line)) {
          console.error(`   Line ${idx + 1}: ${line.trim()}`);
        }
      });
      totalViolations++;
    }
  }
}

if (totalViolations === 0) {
  console.log(`\nSUCCESS: STRICT ZERO (0) REMNANT AGENCY BRANDING FOUND ACROSS ALL ${filesToCheck.length} FILES!`);
  process.exit(0);
} else {
  console.error(`\nFAILURE: Found ${totalViolations} remnant agency branding violations!`);
  process.exit(1);
}
