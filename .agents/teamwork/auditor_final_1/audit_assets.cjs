const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../..');

function findFiles(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) res.push(...findFiles(full));
    else if (/\.(tsx?|jsx?|html)$/.test(f.name)) res.push(full);
  }
  return res;
}

const files = findFiles(path.join(rootDir, 'src'));
files.push(path.join(rootDir, 'index.html'));

const imagePathRegex = /['"](\/images\/[^'"]+)['"]/g;
const foundPaths = new Set();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = imagePathRegex.exec(content)) !== null) {
    foundPaths.add(m[1]);
  }
}

console.log('Referenced Image Paths Count:', foundPaths.size);
let missing = 0;
for (const img of Array.from(foundPaths).sort()) {
  const localDiskPath = path.join(rootDir, 'public', img.replace(/^\//, ''));
  const exists = fs.existsSync(localDiskPath);
  console.log((exists ? '✓' : '✗ MISSING:'), img);
  if (!exists) missing++;
}

if (missing > 0) {
  console.error('FAILED: missing images found:', missing);
  process.exit(1);
} else {
  console.log('SUCCESS: All referenced images resolve cleanly on disk.');
}
