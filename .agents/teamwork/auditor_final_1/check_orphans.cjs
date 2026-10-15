const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../../../src');
const topComponents = fs.readdirSync(path.join(srcDir, 'components')).filter(f => f.endsWith('.tsx'));

function getAllFiles(d) {
  let res = [];
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const full = path.join(d, f.name);
    if (f.isDirectory()) res.push(...getAllFiles(full));
    else if (f.name.endsWith('.tsx') || f.name.endsWith('.ts')) res.push(full);
  }
  return res;
}

const allTsFiles = getAllFiles(srcDir);

for (const comp of topComponents) {
  const baseName = comp.replace('.tsx', '');
  let importedBy = [];
  for (const f of allTsFiles) {
    if (f === path.join(srcDir, 'components', comp)) continue;
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes(`/${baseName}'`) || content.includes(`/${baseName}"`) || content.includes(`./${baseName}'`) || content.includes(`./${baseName}"`)) {
      importedBy.push(path.relative(srcDir, f));
    }
  }
  console.log(comp.padEnd(25), '->', importedBy.length > 0 ? importedBy.join(', ') : 'UNREFERENCED IN ACTIVE APP');
}
