const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const suriData = fs.readFileSync(path.join(ROOT, 'src/data/suriData.ts'), 'utf8');
const regex = /\/images\/[a-zA-Z0-9_\-\.\/]+/g;
const matches = [...new Set(suriData.match(regex) || [])];

console.log(`Found ${matches.length} unique image paths in src/data/suriData.ts:`);
let missing = 0;
for (const p of matches) {
  const full = path.join(ROOT, 'public', p.replace(/^\//, ''));
  if (fs.existsSync(full)) {
    const stat = fs.statSync(full);
    console.log(`  [OK] ${p} (${stat.size} bytes)`);
  } else {
    console.error(`  [MISSING] ${p} -> ${full}`);
    missing++;
  }
}

if (missing === 0) {
  console.log(`\nSUCCESS: 100% (${matches.length}/${matches.length}) referenced image assets exist in public/`);
  process.exit(0);
} else {
  console.error(`\nFAILURE: ${missing} images missing!`);
  process.exit(1);
}
