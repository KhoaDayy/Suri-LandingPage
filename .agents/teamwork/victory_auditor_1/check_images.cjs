const fs = require('fs');
const path = require('path');

function findFiles(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) res = res.concat(findFiles(p));
    else if (/\.(tsx?|jsx?|html|css)$/.test(f.name)) res.push(p);
  }
  return res;
}

const root = path.resolve(__dirname, '../../..');
const files = [path.join(root, 'index.html'), ...findFiles(path.join(root, 'src'))];
const regex = /["'](\/?images\/[a-zA-Z0-9_\-\/.]+\.(png|webp|jpg|jpeg|svg))["']/g;
const refs = new Set();

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = regex.exec(content)) !== null) {
    refs.add(m[1]);
  }
}

console.log('Total referenced images count:', refs.size);
let broken = 0;
for (const r of refs) {
  const clean = r.startsWith('/') ? r.slice(1) : r;
  const p = path.join(root, 'public', clean);
  if (!fs.existsSync(p)) {
    console.error('BROKEN REF:', r, '->', p);
    broken++;
  } else {
    console.log('Valid:', r);
  }
}
console.log('Summary broken references:', broken);
process.exit(broken > 0 ? 1 : 0);
