const esbuild = require('esbuild');
const path = require('path');
const React = require('react');

const ROOT_DIR = path.resolve(__dirname, '../../..');

function bundleAndRequire(relPath) {
  const fullPath = path.join(ROOT_DIR, relPath);
  const out = esbuild.buildSync({
    entryPoints: [fullPath],
    bundle: true,
    format: 'cjs',
    write: false,
    platform: 'node',
    target: 'node20',
    external: ['react', 'framer-motion']
  });
  const code = out.outputFiles[0].text;
  const m = { exports: {} };
  const fn = new Function('exports', 'module', 'require', code);
  fn(m.exports, m, (mod) => {
    if (mod === 'react') return React;
    if (mod === 'framer-motion') {
      return {
        motion: {
          div: 'motion.div',
          span: 'motion.span',
        },
        useInView: () => true,
        useReducedMotion: () => false,
      };
    }
    return require(mod);
  });
  return m.exports;
}

try {
  console.log('Testing suriData.ts...');
  const suriData = bundleAndRequire('src/data/suriData.ts');
  console.log('  NAV_LINKS count:', suriData.NAV_LINKS.length);
  console.log('  HERO_DATA title:', suriData.HERO_DATA.title);
  console.log('  LORE_DATA headline:', suriData.LORE_DATA.headline);
  console.log('  SPECS_DATA headline:', suriData.SPECS_DATA.headline);
  console.log('  SCHEDULE_DATA covers count:', suriData.SCHEDULE_DATA.covers.length);

  console.log('Testing BlurText.tsx...');
  const BlurText = bundleAndRequire('src/components/ui/BlurText.tsx');
  console.log('  BlurText export:', typeof (BlurText.BlurText || BlurText.default));

  console.log('Testing LiquidCard.tsx...');
  const LiquidCard = bundleAndRequire('src/components/ui/LiquidCard.tsx');
  console.log('  LiquidCard export:', typeof (LiquidCard.LiquidCard || LiquidCard.default));

  console.log('Testing LiquidBadge.tsx...');
  const LiquidBadge = bundleAndRequire('src/components/ui/LiquidBadge.tsx');
  console.log('  LiquidBadge export:', typeof (LiquidBadge.LiquidBadge || LiquidBadge.default));

  console.log('ALL M1 ARTIFACTS SUCCESSFULLY BUNDLED AND LOADED!');
} catch (err) {
  console.error('ERROR testing M1 modules:', err);
  process.exit(1);
}
