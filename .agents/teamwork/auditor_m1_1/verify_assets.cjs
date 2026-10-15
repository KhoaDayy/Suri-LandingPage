const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const files = [
  path.join(ROOT_DIR, 'index.html'),
  path.join(ROOT_DIR, 'src/data/suriData.ts')
];

const regex = /["'](\/?images\/[a-zA-Z0-9_\-\/.]+\.(?:png|webp|jpg|jpeg|svg))["']/g;
const extracted = new Set();

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = regex.exec(content)) !== null) {
    extracted.add(m[1]);
  }
}

console.log('Total unique image paths found in M1 files:', extracted.size);
let missing = 0;
for (const img of extracted) {
  const norm = img.startsWith('/') ? img.slice(1) : img;
  const disk = path.join(ROOT_DIR, 'public', norm.startsWith('public/') ? norm.slice(7) : norm);
  if (!fs.existsSync(disk)) {
    console.error('MISSING:', img, '->', disk);
    missing++;
  } else {
    const stat = fs.statSync(disk);
    console.log('OK:', img, '(' + stat.size + ' bytes)');
  }
}

if (missing === 0) {
  console.log('SUCCESS: All ' + extracted.size + ' assets verified existent on disk!');
} else {
  console.error('FAIL: ' + missing + ' assets missing!');
  process.exit(1);
}
