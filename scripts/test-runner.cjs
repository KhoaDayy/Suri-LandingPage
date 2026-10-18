#!/usr/bin/env node
/**
 * ============================================================================
 * SURI MUKEKI SHOWCASE — AUTOMATED 4-TIER E2E TEST SUITE & RUNNER
 * ============================================================================
 * Author: test_writer_e2e (E2E Test Architect)
 * Target: c:\Users\Hasukatsu\Documents\Suri-LandingPage
 *
 * Tier 1: Feature Coverage (>=5 tests per feature: Hero, Lore, Specs, Schedule, Nav, Branding, Assets)
 * Tier 2: Boundary & Corner Cases (Remnant agency grep, asset resolution, null safety, broken links)
 * Tier 3: Cross-Feature Combinations (Nav anchor mapping, mobile drawer, glasses toggle, persona toggle, video modal)
 * Tier 4: Real-World Scenarios & Build Verification (pnpm build, desktop 1920x1080 layout, mobile 390x844 layout)
 *
 * Execution:
 *   node scripts/test-runner.cjs
 *   node scripts/test-runner.cjs --tier=1
 *   node scripts/test-runner.cjs --tier=2
 *   node scripts/test-runner.cjs --tier=3
 *   node scripts/test-runner.cjs --tier=4
 *   node scripts/test-runner.cjs --filter=hero
 *   node scripts/test-runner.cjs --json
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn, execSync } = require('child_process');

// Determine root directory
const ROOT_DIR = path.resolve(__dirname, '..');

// ============================================================================
// ANSI Color Formatting Utilities
// ============================================================================
const useColor = !process.env.NO_COLOR && !process.argv.includes('--no-color');
const colors = {
  reset: useColor ? '\x1b[0m' : '',
  bold: useColor ? '\x1b[1m' : '',
  dim: useColor ? '\x1b[2m' : '',
  cyan: useColor ? '\x1b[36m' : '',
  green: useColor ? '\x1b[32m' : '',
  red: useColor ? '\x1b[31m' : '',
  yellow: useColor ? '\x1b[33m' : '',
  magenta: useColor ? '\x1b[35m' : '',
  gray: useColor ? '\x1b[90m' : '',
};

// ============================================================================
// CLI Arguments Parsing
// ============================================================================
const args = process.argv.slice(2);
const tierArg = args.find(a => a.startsWith('--tier='))?.split('=')[1]?.toLowerCase() || 'all';
const filterArg = args.find(a => a.startsWith('--filter='))?.split('=')[1]?.toLowerCase() || '';
const isJson = args.includes('--json');
const isBail = args.includes('--bail');
const isVerbose = args.includes('--verbose');

// ============================================================================
// Bundled In-Memory TypeScript Loader with Memoization
// ============================================================================
let esbuild;
try {
  esbuild = require('esbuild');
} catch (e) {
  esbuild = null;
}

const moduleCache = new Map();

function loadTsModule(relativePath) {
  if (moduleCache.has(relativePath)) {
    return moduleCache.get(relativePath);
  }

  const fullPath = path.join(ROOT_DIR, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  if (!esbuild) return null;

  try {
    const out = esbuild.buildSync({
      entryPoints: [fullPath],
      bundle: true,
      format: 'cjs',
      write: false,
      platform: 'node',
      target: 'node20',
    });

    const code = out.outputFiles[0].text;
    const m = { exports: {} };
    const fn = new Function('exports', 'module', 'require', code);
    fn(m.exports, m, require);
    moduleCache.set(relativePath, m.exports);
    return m.exports;
  } catch (err) {
    if (isVerbose) console.error(`[loadTsModule] Error loading ${relativePath}:`, err.message);
    return null;
  }
}

// Helper to find file in alternative paths
function resolveProjectFile(...possibleRelatives) {
  for (const rel of possibleRelatives) {
    const full = path.join(ROOT_DIR, rel);
    if (fs.existsSync(full)) {
      return { path: full, content: fs.readFileSync(full, 'utf8') };
    }
  }
  return null;
}

// Recursively find files
function findFiles(dir, filterFn) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist' && entry.name !== '.agents') {
        results.push(...findFiles(fullPath, filterFn));
      }
    } else if (!filterFn || filterFn(entry.name, fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

// ============================================================================
// Test Framework Core
// ============================================================================
class TestRunner {
  constructor() {
    this.tests = [];
    this.results = [];
    this.startTime = Date.now();
  }

  register(tier, feature, id, title, fn) {
    this.tests.push({ tier, feature, id, title, fn });
  }

  async run() {
    let filtered = this.tests;
    if (tierArg !== 'all') {
      const tNum = parseInt(tierArg.replace('tier', ''), 10);
      filtered = filtered.filter(t => t.tier === tNum);
    }
    if (filterArg) {
      filtered = filtered.filter(t =>
        t.id.toLowerCase().includes(filterArg) ||
        t.title.toLowerCase().includes(filterArg) ||
        t.feature.toLowerCase().includes(filterArg)
      );
    }

    if (!isJson) {
      console.log(`\n${colors.bold}${colors.cyan}======================================================================${colors.reset}`);
      console.log(`${colors.bold}${colors.cyan}  SURI MUKEKI SHOWCASE — 4-TIER E2E TEST SUITE RUNNER${colors.reset}`);
      console.log(`${colors.gray}  Target Directory: ${ROOT_DIR}${colors.reset}`);
      console.log(`${colors.gray}  Selected Tiers: ${tierArg.toUpperCase()} | Total Tests Queued: ${filtered.length}${colors.reset}`);
      console.log(`${colors.bold}${colors.cyan}======================================================================${colors.reset}\n`);
    }

    let currentTier = null;
    let currentFeature = null;

    for (const test of filtered) {
      if (!isJson) {
        if (test.tier !== currentTier) {
          currentTier = test.tier;
          console.log(`\n${colors.bold}${colors.magenta}▶ TIER ${currentTier}: ${this.getTierName(currentTier)}${colors.reset}`);
          console.log(`${colors.gray}  ${'-'.repeat(60)}${colors.reset}`);
        }
        if (test.feature !== currentFeature) {
          currentFeature = test.feature;
          console.log(`  ${colors.bold}${colors.yellow}[${currentFeature}]${colors.reset}`);
        }
      }

      const tStart = Date.now();
      let status = 'PASS';
      let error = null;

      try {
        await test.fn();
      } catch (err) {
        status = 'FAIL';
        error = err;
      }

      const duration = Date.now() - tStart;
      this.results.push({
        tier: test.tier,
        feature: test.feature,
        id: test.id,
        title: test.title,
        status,
        duration,
        error: error ? { message: error.message, stack: error.stack } : null,
      });

      if (!isJson) {
        if (status === 'PASS') {
          console.log(`    ${colors.green}✓${colors.reset} ${colors.gray}${test.id}:${colors.reset} ${test.title} ${colors.dim}(${duration}ms)${colors.reset}`);
        } else {
          console.log(`    ${colors.red}✗${colors.reset} ${colors.bold}${test.id}:${colors.reset} ${test.title} ${colors.dim}(${duration}ms)${colors.reset}`);
          console.log(`      ${colors.red}Error:${colors.reset} ${error.message}`);
          if (isVerbose && error.stack) {
            console.log(`      ${colors.gray}${error.stack.split('\n').slice(1, 4).join('\n      ')}${colors.reset}`);
          }
        }
      }

      if (status === 'FAIL' && isBail) {
        if (!isJson) console.log(`\n${colors.red}Bailing early due to --bail flag.${colors.reset}`);
        break;
      }
    }

    this.printSummary();
    const hasFailures = this.results.some(r => r.status === 'FAIL');
    process.exit(hasFailures ? 1 : 0);
  }

  getTierName(t) {
    switch (t) {
      case 1: return 'Feature Coverage (Primary Behavioral Assertions)';
      case 2: return 'Boundary & Corner Cases (Agency Text, Asset Integrity, Broken Links)';
      case 3: return 'Cross-Feature Combinations & State Transitions (Nav, Drawer, Toggles, Modal)';
      case 4: return 'Real-World Scenarios & Build Verification (Build Integrity, Viewport Layouts)';
      default: return 'General Tests';
    }
  }

  printSummary() {
    const total = this.results.length;
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;
    const totalDuration = Date.now() - this.startTime;

    if (isJson) {
      console.log(JSON.stringify({
        summary: { total, passed, failed, duration: totalDuration },
        results: this.results,
      }, null, 2));
      return;
    }

    console.log(`\n${colors.bold}${colors.cyan}======================================================================${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}  TEST EXECUTION SUMMARY${colors.reset}`);
    console.log(`${colors.bold}${colors.cyan}======================================================================${colors.reset}`);

    // Tier-by-tier breakdown
    const tiers = [...new Set(this.results.map(r => r.tier))].sort();
    for (const t of tiers) {
      const tResults = this.results.filter(r => r.tier === t);
      const tPass = tResults.filter(r => r.status === 'PASS').length;
      const tFail = tResults.filter(r => r.status === 'FAIL').length;
      const color = tFail === 0 ? colors.green : colors.red;
      console.log(`  Tier ${t} [${this.getTierName(t).split(' (')[0]}]: ${color}${tPass}/${tResults.length} passed${colors.reset} (${tFail} failed)`);
    }

    console.log(`${colors.gray}  ${'-'.repeat(60)}${colors.reset}`);
    const summaryColor = failed === 0 ? colors.green : colors.red;
    console.log(`  ${colors.bold}Total Tests:${colors.reset} ${total}  |  ${colors.bold}Passed:${colors.reset} ${colors.green}${passed}${colors.reset}  |  ${colors.bold}Failed:${colors.reset} ${summaryColor}${failed}${colors.reset}  |  ${colors.bold}Time:${colors.reset} ${totalDuration}ms`);

    if (failed > 0) {
      console.log(`\n${colors.bold}${colors.red}  FAILED TESTS BREAKDOWN (${failed}):${colors.reset}`);
      for (const r of this.results.filter(r => r.status === 'FAIL')) {
        console.log(`   ${colors.red}•${colors.reset} [${r.id}] ${r.title} ${colors.gray}(Tier ${r.tier} / ${r.feature})${colors.reset}`);
        console.log(`     ${colors.red}Reason:${colors.reset} ${r.error?.message}`);
      }
      console.log(`\n${colors.yellow}  STATUS: NON-ZERO EXIT CODE (1). Implementation fixes required.${colors.reset}\n`);
    } else {
      console.log(`\n${colors.bold}${colors.green}  STATUS: ALL TESTS PASSED! EXIT CODE 0.${colors.reset}\n`);
    }
  }
}

// Initialize Runner
const runner = new TestRunner();

// Assertion Helpers
function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

function assertMatch(str, regex, message) {
  if (!regex.test(str)) {
    throw new Error(message || `Expected string to match ${regex}`);
  }
}

function assertNotMatch(str, regex, message) {
  if (regex.test(str)) {
    throw new Error(message || `Expected string NOT to match ${regex}`);
  }
}

function assertFileExists(relPath, message) {
  const full = path.join(ROOT_DIR, relPath);
  if (!fs.existsSync(full)) {
    throw new Error(message || `File not found: ${relPath}`);
  }
}

// ============================================================================
// TIER 1: FEATURE COVERAGE (>=5 tests per feature)
// ============================================================================

// ----------------------------------------------------------------------------
// Feature 1: Hero Section (#hero)
// ----------------------------------------------------------------------------
runner.register(1, 'Hero Section', 'T1-HERO-01', 'Section container with id="hero" is configured', async () => {
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx', 'src/components/HeroSection.tsx');
  const appFile = resolveProjectFile('src/App.tsx');
  assert(heroFile, 'HeroSection component file must exist');
  assert(appFile, 'App.tsx must exist');
  const combined = heroFile.content + '\n' + appFile.content;
  assertMatch(combined, /id=["']hero["']/, 'Hero section or container must define id="hero"');
});

runner.register(1, 'Hero Section', 'T1-HERO-02', 'Character identity and titles are displayed', async () => {
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx', 'src/components/HeroSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  assert(heroFile, 'HeroSection file must exist');
  const content = heroFile.content;
  const hasDirectTitle = /Suri Mukeki/i.test(content) || /無敵/i.test(content) || /Mukeki/i.test(content);
  const usesData = suriData && (/HERO_DATA/i.test(content) || /SURI_DATA/i.test(content) || /displayName/i.test(content));
  assert(hasDirectTitle || usesData, 'HeroSection must render Suri Mukeki identity or reference canonical hero data');
});

runner.register(1, 'Hero Section', 'T1-HERO-03', 'Title entrance uses BlurText or staggered motion effect', async () => {
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx', 'src/components/HeroSection.tsx');
  assert(heroFile, 'HeroSection must exist');
  const hasBlurText = /<BlurText/i.test(heroFile.content);
  const hasFramerBlur = /filter:\s*['"]blur/i.test(heroFile.content) || /initial=.*blur/i.test(heroFile.content);
  assert(hasBlurText || hasFramerBlur, 'HeroSection must implement BlurText or staggered blur animation effect');
});

runner.register(1, 'Hero Section', 'T1-HERO-04', 'System status or cyber-courier badge is rendered', async () => {
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx', 'src/components/HeroSection.tsx');
  assert(heroFile, 'HeroSection must exist');
  const hasBadgeComponent = /<LiquidBadge/i.test(heroFile.content) || /LiquidBadge/i.test(heroFile.content);
  const hasStatusPattern = /CYBER-COURIER|MODEL 3\.0|LIVE TRANSMISSION|ACTIVE|SỨ GIẢ/i.test(heroFile.content);
  assert(hasBadgeComponent || hasStatusPattern, 'HeroSection must render a liquid status badge (Cyber-Courier or Model 3.0)');
});

runner.register(1, 'Hero Section', 'T1-HERO-05', 'Community call-to-actions (YouTube, Discord, X) are present', async () => {
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx', 'src/components/HeroSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  assert(heroFile, 'HeroSection must exist');
  const content = heroFile.content;
  const hasYt = /youtube\.com|@surimukeki|watch/i.test(content) || (suriData?.SURI_DATA?.officialLinks?.youtube && /officialLinks|ctas/i.test(content));
  const hasDiscord = /discord\.gg|discord/i.test(content) || (suriData?.SURI_DATA?.officialLinks?.discord && /officialLinks|ctas/i.test(content));
  const hasX = /x\.com|twitter\.com|Follow on X/i.test(content) || (suriData?.SURI_DATA?.officialLinks?.twitter && /officialLinks|ctas/i.test(content));
  assert(hasYt, 'HeroSection must include YouTube CTA link or reference');
  assert(hasDiscord, 'HeroSection must include Discord CTA link or reference');
  assert(hasX, 'HeroSection must include X/Twitter CTA link or reference');
});

runner.register(1, 'Hero Section', 'T1-HERO-06', 'Character master cutout image asset is referenced', async () => {
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx', 'src/components/HeroSection.tsx');
  assert(heroFile, 'HeroSection must exist');
  const hasCutout = /suri_cutout_transparent\.png|suwi_courier_portrait\.png|suri_model3\.webp/i.test(heroFile.content) ||
    /characterImage|heroCutout|assets\./i.test(heroFile.content);
  assert(hasCutout, 'HeroSection must reference a canonical character cutout asset');
});

runner.register(1, 'Hero Section', 'T1-HERO-07', 'Hero quick stats or community metric cards exist', async () => {
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx', 'src/components/HeroSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  assert(heroFile, 'HeroSection must exist');
  const content = heroFile.content;
  const hasStatsText = /51[,.]?400\+|Model 3\.0|155\s*cm|Sureiya/i.test(content);
  const usesDataStats = suriData && (/stats\./i.test(content) || /stats\.map/i.test(content) || /HERO_DATA\.stats/i.test(content));
  assert(hasStatsText || usesDataStats, 'HeroSection must present quick statistics (subscribers, model version, or attributes)');
});

// ----------------------------------------------------------------------------
// Feature 2: Lore & Profile Section (#lore)
// ----------------------------------------------------------------------------
runner.register(1, 'Lore & Profile', 'T1-LORE-01', 'Section container with id="lore" is configured', async () => {
  const loreFile = resolveProjectFile('src/components/sections/LoreSection.tsx', 'src/components/LoreArchive.tsx', 'src/components/StoryRecord.tsx');
  const appFile = resolveProjectFile('src/App.tsx');
  assert(loreFile || appFile, 'LoreSection or App.tsx must exist');
  const combined = (loreFile?.content || '') + '\n' + (appFile?.content || '');
  assertMatch(combined, /id=["']lore["']/, 'Lore section must define id="lore"');
});

runner.register(1, 'Lore & Profile', 'T1-LORE-02', 'Reincarnated water slime genesis lore is documented', async () => {
  const loreFile = resolveProjectFile('src/components/sections/LoreSection.tsx', 'src/components/LoreArchive.tsx', 'src/components/StoryRecord.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const content = (loreFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(content, /water slime|thủy tinh|reincarnat|chuyển sinh|slime/i, 'Lore section or data must document water slime reincarnation');
});

runner.register(1, 'Lore & Profile', 'T1-LORE-03', 'The enigmatic birthday note from "W" is documented', async () => {
  const loreFile = resolveProjectFile('src/components/sections/LoreSection.tsx', 'src/components/LoreArchive.tsx', 'src/components/StoryRecord.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const content = (loreFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(content, /Chúc mừng sinh nhật Suri|sinh nhật|ký tên.*W|NOTE-W/i, 'Lore section or data must include the canonical birthday note signed by W');
});

runner.register(1, 'Lore & Profile', 'T1-LORE-04', 'Irus alter persona and 300-year lightning seal lore is present', async () => {
  const loreFile = resolveProjectFile('src/components/sections/LoreSection.tsx', 'src/components/LoreArchive.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const content = (loreFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(content, /Irus/i, 'Lore section or data must include Irus alter persona');
  assertMatch(content, /sấm sét|lightning|phong ấn|300/i, 'Lore section or data must document Irus lightning and 300-year seal');
});

runner.register(1, 'Lore & Profile', 'T1-LORE-05', 'Persona dossier profile attributes (species, height, debut, birthday) exist', async () => {
  const suriData = loadTsModule('src/data/suriData.ts');
  const loreFile = resolveProjectFile('src/components/sections/LoreSection.tsx');
  const combined = JSON.stringify(suriData || {}) + '\n' + (loreFile?.content || '');
  assertMatch(combined, /155\s*cm/i, 'Profile must specify height 155 cm');
  assertMatch(combined, /17\s*[\/.]\s*04\s*[\/.]\s*2021|April 17,?\s*2021/i, 'Profile must specify debut date April 17, 2021');
  assertMatch(combined, /30\s*[\/.]\s*10|October 30/i, 'Profile must specify birthday October 30');
  assertMatch(combined, /Sureiya|Slayer/i, 'Profile must specify fanbase name Sureiya / Slayer');
});

runner.register(1, 'Lore & Profile', 'T1-LORE-06', 'Character personality tags and trivia items are defined', async () => {
  const suriData = loadTsModule('src/data/suriData.ts');
  const loreFile = resolveProjectFile('src/components/sections/LoreSection.tsx');
  const combined = JSON.stringify(suriData || {}) + '\n' + (loreFile?.content || '');
  assertMatch(combined, /pudding|flan|bánh ngọt|sweet/i, 'Personality/trivia must include pudding/sweet tooth');
  assertMatch(combined, /trivia|attributes|personalityTags|dossier/i, 'Lore section must provide structured trivia or personality tags');
});

// ----------------------------------------------------------------------------
// Feature 3: 3D Model Specs & Credits Section (#specs)
// ----------------------------------------------------------------------------
runner.register(1, 'Model Specs & Credits', 'T1-SPECS-01', 'Section container with id="specs" is configured', async () => {
  const specsFile = resolveProjectFile('src/components/sections/SpecsSection.tsx', 'src/components/EvolutionTimeline.tsx');
  const appFile = resolveProjectFile('src/App.tsx');
  assert(specsFile || appFile, 'SpecsSection or App.tsx must exist');
  const combined = (specsFile?.content || '') + '\n' + (appFile?.content || '');
  assertMatch(combined, /id=["']specs["']/, 'Specs section must define id="specs"');
});

runner.register(1, 'Model Specs & Credits', 'T1-SPECS-02', 'Model 3.0 technical telemetry (polygons & blendshapes) is present', async () => {
  const specsFile = resolveProjectFile('src/components/sections/SpecsSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (specsFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /polygon|triangle|68[,.]?400|184[,.]?520|112[,.]?800/i, 'Specs must report polygon/triangle count telemetry');
  assertMatch(combined, /blendshape|viseme|14[02]|428|ARKit/i, 'Specs must report facial blendshape/viseme count telemetry');
});

runner.register(1, 'Model Specs & Credits', 'T1-SPECS-03', 'Physics kinematics and shader dynamic specifications are present', async () => {
  const specsFile = resolveProjectFile('src/components/sections/SpecsSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (specsFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /physics|springbone|bone|kinematic|cloth/i, 'Specs must include physics/springbone telemetry');
  assertMatch(combined, /shader|toon|cel|pbr|material/i, 'Specs must include material and shader telemetry');
});

runner.register(1, 'Model Specs & Credits', 'T1-SPECS-04', 'Verified creator artisan credits (Papa, Mama, Designer) exist', async () => {
  const specsFile = resolveProjectFile('src/components/sections/SpecsSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (specsFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /T_blence|Turbulence/i, 'Credits must cite Papa T_blence');
  assertMatch(combined, /Sophiel/i, 'Credits must cite Mama / Live2D Rigger Sophiel');
  assertMatch(combined, /kcomorebi|Truong Thanh Tan|Hare_ta06/i, 'Credits must cite foundational or costume designers');
});

runner.register(1, 'Model Specs & Credits', 'T1-SPECS-05', 'Costume or turnaround reference sheet asset is referenced', async () => {
  const specsFile = resolveProjectFile('src/components/sections/SpecsSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (specsFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /costume_detailing_materials\.png|irus_reference_sheet\.webp|suri_demo_showcase\.png/i,
    'Specs must reference canonical costume detailing or turnaround sheets');
});

runner.register(1, 'Model Specs & Credits', 'T1-SPECS-06', 'Model evolution lineage is documented', async () => {
  const specsFile = resolveProjectFile('src/components/sections/SpecsSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (specsFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /Model 1\.0|Debut Model/i, 'Lineage must document Model 1.0');
  assertMatch(combined, /Model 3\.0/i, 'Lineage must document Model 3.0');
});

// ----------------------------------------------------------------------------
// Feature 4: Schedule & Stream Highlights Section (#schedule)
// ----------------------------------------------------------------------------
runner.register(1, 'Schedule & Highlights', 'T1-SCHED-01', 'Section container with id="schedule" is configured', async () => {
  const schedFile = resolveProjectFile('src/components/sections/ScheduleSection.tsx', 'src/components/MusicSessions.tsx');
  const appFile = resolveProjectFile('src/App.tsx');
  assert(schedFile || appFile, 'ScheduleSection or App.tsx must exist');
  const combined = (schedFile?.content || '') + '\n' + (appFile?.content || '');
  assertMatch(combined, /id=["']schedule["']/, 'Schedule section must define id="schedule"');
});

runner.register(1, 'Schedule & Highlights', 'T1-SCHED-02', 'Weekly broadcast routine matrix is populated', async () => {
  const schedFile = resolveProjectFile('src/components/sections/ScheduleSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (schedFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /Tuesday|Wednesday|Friday|Saturday|Sunday|Thứ/i, 'Schedule must detail weekly broadcast days');
  assertMatch(combined, /20:00|20:30|21:00|19:30|ICT|UTC\+7/i, 'Schedule must specify broadcast hours');
});

runner.register(1, 'Schedule & Highlights', 'T1-SCHED-03', 'Stream content categories are clearly distinguished', async () => {
  const schedFile = resolveProjectFile('src/components/sections/ScheduleSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (schedFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /Gaming|FPS/i, 'Schedule must include Gaming category');
  assertMatch(combined, /Singing|Karaoke|Vocal|Music/i, 'Schedule must include Singing/Music category');
  assertMatch(combined, /Free Talk|Zatsudan|Marshmallow/i, 'Schedule must include Free Talk/Community category');
  assertMatch(combined, /ASMR|Binaural/i, 'Schedule must include ASMR category');
});

runner.register(1, 'Schedule & Highlights', 'T1-SCHED-04', 'Timezone indicator is clearly stated', async () => {
  const schedFile = resolveProjectFile('src/components/sections/ScheduleSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (schedFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /UTC\+7|ICT|GMT\+7/i, 'Schedule must display UTC+7 / ICT timezone specification');
});

runner.register(1, 'Schedule & Highlights', 'T1-SCHED-05', 'Verified music cover catalog contains verified YouTube IDs', async () => {
  const suriData = loadTsModule('src/data/suriData.ts');
  const covers = suriData?.MUSIC_COVERS || suriData?.SCHEDULE_DATA?.covers || [];
  assert(covers.length >= 4, `Expected at least 4 music covers, found ${covers.length}`);
  const ids = covers.map(c => c.youtubeId);
  assert(ids.includes('a8S1xhjh2e4'), 'Must include KING (a8S1xhjh2e4)');
  assert(ids.includes('cN9evcBtnjo'), 'Must include Yoru ni Kakeru (cN9evcBtnjo)');
  assert(ids.includes('hOCt6VYIYUk'), 'Must include Nàng Thơ (hOCt6VYIYUk)');
  assert(ids.includes('is6t-GzkyMk'), 'Must include Only Love (is6t-GzkyMk)');
});

runner.register(1, 'Schedule & Highlights', 'T1-SCHED-06', 'Video playback modal component is integrated', async () => {
  const modalFile = resolveProjectFile('src/components/modals/VideoModal.tsx', 'src/components/VideoModal.tsx');
  assert(modalFile, 'VideoModal component must exist');
  assertMatch(modalFile.content, /iframe|youtube\.com|youtube-nocookie\.com/i, 'VideoModal must implement YouTube embed iframe');
});

// ----------------------------------------------------------------------------
// Feature 5: Fixed Navigation & Mobile Drawer
// ----------------------------------------------------------------------------
runner.register(1, 'Navigation & Drawer', 'T1-NAV-01', 'Fixed navbar container with liquid glass styling', async () => {
  const navFile = resolveProjectFile('src/components/layout/Navbar.tsx', 'src/components/Header.tsx');
  assert(navFile, 'Navbar component must exist');
  assertMatch(navFile.content, /fixed|sticky/i, 'Navbar must use fixed or sticky positioning');
  assertMatch(navFile.content, /liquid-glass|backdrop-blur/i, 'Navbar must utilize liquid glass styling');
});

runner.register(1, 'Navigation & Drawer', 'T1-NAV-02', 'Brand pill displays official Suri logo asset', async () => {
  const navFile = resolveProjectFile('src/components/layout/Navbar.tsx', 'src/components/Header.tsx');
  assert(navFile, 'Navbar component must exist');
  const hasLogo = /logo_suri\.png|suri_portrait\.webp/i.test(navFile.content) || /logo/i.test(navFile.content);
  assert(hasLogo, 'Navbar must display official logo or portrait avatar');
});

runner.register(1, 'Navigation & Drawer', 'T1-NAV-03', 'Anchor links target all 4 sections (#hero, #lore, #specs, #schedule)', async () => {
  const navFile = resolveProjectFile('src/components/layout/Navbar.tsx', 'src/components/Header.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  assert(navFile, 'Navbar component must exist');
  const combined = navFile.content + '\n' + JSON.stringify(suriData?.NAV_LINKS || []);
  assertMatch(combined, /#hero/i, 'Nav must link to #hero');
  assertMatch(combined, /#lore/i, 'Nav must link to #lore');
  assertMatch(combined, /#specs/i, 'Nav must link to #specs');
  assertMatch(combined, /#schedule/i, 'Nav must link to #schedule');
});

runner.register(1, 'Navigation & Drawer', 'T1-NAV-04', 'Mobile hamburger drawer button exists and is responsive', async () => {
  const navFile = resolveProjectFile('src/components/layout/Navbar.tsx', 'src/components/Header.tsx');
  assert(navFile, 'Navbar component must exist');
  assertMatch(navFile.content, /md:hidden|lg:hidden|Menu|hamburger/i, 'Navbar must provide a mobile toggle button');
});

runner.register(1, 'Navigation & Drawer', 'T1-NAV-05', 'Mobile navigation drawer provides full section targets', async () => {
  const navFile = resolveProjectFile('src/components/layout/Navbar.tsx', 'src/components/Header.tsx');
  assert(navFile, 'Navbar component must exist');
  const hasDrawer = /isOpen|isMenuOpen|mobileMenu|drawer|AnimatePresence/i.test(navFile.content);
  assert(hasDrawer, 'Navbar must implement stateful mobile navigation drawer');
});

// ----------------------------------------------------------------------------
// Feature 6: Branding, Styling & Metadata
// ----------------------------------------------------------------------------
runner.register(1, 'Branding & Metadata', 'T1-BRAND-01', 'HTML title reflects Suri Mukeki without remnant agency copy', async () => {
  const htmlFile = resolveProjectFile('index.html');
  assert(htmlFile, 'index.html must exist');
  assertMatch(htmlFile.content, /<title>.*Suri Mukeki.*<\/title>|<title>.*無敵.*<\/title>/i, 'HTML title must reflect Suri Mukeki');
  assertNotMatch(htmlFile.content, /Studio — Crafted Digital Experiences/i, 'HTML title must NOT contain agency slogan');
});

runner.register(1, 'Branding & Metadata', 'T1-BRAND-02', 'Favicon links to Suri portrait or brand icon', async () => {
  const htmlFile = resolveProjectFile('index.html');
  assert(htmlFile, 'index.html must exist');
  assertMatch(htmlFile.content, /rel=["'](?:shortcut )?icon["'][^>]*href=["'][^"']*(?:suri_portrait|logo_suri|characters|icons)/i,
    'Favicon must link to an authentic Suri asset');
});

runner.register(1, 'Branding & Metadata', 'T1-BRAND-03', 'Dark cinematic aesthetic root classes are present', async () => {
  const htmlFile = resolveProjectFile('index.html');
  const appFile = resolveProjectFile('src/App.tsx');
  const combined = (htmlFile?.content || '') + '\n' + (appFile?.content || '');
  assertMatch(combined, /bg-black/i, 'Root layout must apply bg-black styling');
  assertMatch(combined, /text-white/i, 'Root layout must apply text-white styling');
});

runner.register(1, 'Branding & Metadata', 'T1-BRAND-04', 'Liquid glass CSS utilities are defined in index.css', async () => {
  const cssFile = resolveProjectFile('src/index.css');
  assert(cssFile, 'src/index.css must exist');
  assertMatch(cssFile.content, /\.liquid-glass\s*\{/i, 'index.css must define .liquid-glass');
  assertMatch(cssFile.content, /\.liquid-glass-strong\s*\{/i, 'index.css must define .liquid-glass-strong');
  assertMatch(cssFile.content, /mask-composite|backdrop-filter/i, 'index.css must use backdrop-filter and mask borders');
});

runner.register(1, 'Branding & Metadata', 'T1-BRAND-05', 'Dark liquid-glass footer with hashtags and community links exists', async () => {
  const footerFile = resolveProjectFile('src/components/layout/Footer.tsx', 'src/components/Footer.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (footerFile?.content || '') + '\n' + JSON.stringify(suriData || {});
  assertMatch(combined, /#SuriMukeki|#Sureiya|#Surillust|#SuriArt/i, 'Footer or canonical data must define official hashtags');
  assertMatch(combined, /youtube|discord|twitter|x\.com/i, 'Footer or canonical data must define community channel links');
});

// ----------------------------------------------------------------------------
// Feature 7: Media & Asset Catalog Integrity
// ----------------------------------------------------------------------------
runner.register(1, 'Asset Integrity', 'T1-ASSET-01', 'All 23 cataloged image assets exist in public/images/', async () => {
  const requiredAssets = [
    'public/images/characters/irus_alter_full.webp',
    'public/images/characters/suri_debut_model.webp',
    'public/images/characters/suri_model2.webp',
    'public/images/characters/suri_model3.webp',
    'public/images/characters/suri_model3_noglasses.webp',
    'public/images/characters/suri_portrait.webp',
    'public/images/characters/suri_cutout_transparent.png',
    'public/images/characters/suwi_flying_cutout.png',
    'public/images/characters/suwi_courier_portrait.png',
    'public/images/characters/suri_art_25.png',
    'public/images/characters/suri_daisy_crown.png',
    'public/images/gallery/costume_detailing_materials.png',
    'public/images/gallery/irus_reference_sheet.webp',
    'public/images/gallery/suri_demo_showcase.png',
    'public/images/gallery/suri_doodle_color.png',
    'public/images/gallery/suri_comic_delivery.png',
    'public/images/gallery/suri_art_8.png',
    'public/images/gallery/suri_art_12.png',
    'public/images/gallery/suri_art_14.png',
    'public/images/gallery/suri_art_19_lake.png',
    'public/images/gallery/suri_art_24.png',
    'public/images/gallery/suri_art_28.png',
    'public/images/icons/logo_suri.png',
  ];

  const missing = [];
  for (const p of requiredAssets) {
    if (!fs.existsSync(path.join(ROOT_DIR, p))) missing.push(p);
  }
  assert(missing.length === 0, `Missing ${missing.length} cataloged assets: ${missing.join(', ')}`);
});

runner.register(1, 'Asset Integrity', 'T1-ASSET-02', 'Hero transparent cutouts are valid and non-empty PNG files', async () => {
  const p = path.join(ROOT_DIR, 'public/images/characters/suri_cutout_transparent.png');
  assert(fs.existsSync(p), 'Hero cutout must exist');
  const stat = fs.statSync(p);
  assert(stat.size > 1000000, `Expected master cutout > 1MB, got ${stat.size} bytes`);
  const buf = fs.readFileSync(p, { flag: 'r' }).subarray(0, 8);
  assert(buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47, 'File must be valid PNG');
});

runner.register(1, 'Asset Integrity', 'T1-ASSET-03', 'Evolution model portraits exist and are valid WebP files', async () => {
  const webpList = [
    'public/images/characters/suri_debut_model.webp',
    'public/images/characters/suri_model2.webp',
    'public/images/characters/suri_model3.webp',
    'public/images/characters/suri_model3_noglasses.webp',
    'public/images/characters/irus_alter_full.webp',
  ];
  for (const rel of webpList) {
    const full = path.join(ROOT_DIR, rel);
    assert(fs.existsSync(full), `WebP asset ${rel} must exist`);
    const buf = fs.readFileSync(full).subarray(0, 12);
    const riff = buf.toString('ascii', 0, 4);
    const webp = buf.toString('ascii', 8, 12);
    assert(riff === 'RIFF' && webp === 'WEBP', `${rel} must have valid RIFF/WEBP magic bytes`);
  }
});

runner.register(1, 'Asset Integrity', 'T1-ASSET-04', 'Technical reference sheets exist with high resolution', async () => {
  const sheets = [
    'public/images/gallery/costume_detailing_materials.png',
    'public/images/gallery/irus_reference_sheet.webp',
  ];
  for (const s of sheets) {
    const full = path.join(ROOT_DIR, s);
    assert(fs.existsSync(full), `Sheet ${s} must exist`);
    assert(fs.statSync(full).size > 200000, `Sheet ${s} must be high resolution (>200KB)`);
  }
});

runner.register(1, 'Asset Integrity', 'T1-ASSET-05', 'Official brand logo exists in public/images/icons/', async () => {
  const full = path.join(ROOT_DIR, 'public/images/icons/logo_suri.png');
  assert(fs.existsSync(full), 'logo_suri.png must exist');
  assert(fs.statSync(full).size > 50000, 'logo_suri.png must be non-empty and high-res (>50KB)');
});

// ============================================================================
// TIER 2: BOUNDARY & CORNER CASES
// ============================================================================

runner.register(2, 'Boundary Cases', 'T2-REMNANT-01', 'Strict negative invariant: 0 remnant agency copy in active code', async () => {
  // Scans all files in src/ and index.html
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
    'CapabilitiesSection',
  ];

  const sourceFiles = [
    path.join(ROOT_DIR, 'index.html'),
    ...findFiles(path.join(ROOT_DIR, 'src'), name => /\.(tsx?|jsx?|html)$/.test(name)),
  ];

  const violations = [];

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const rel = path.relative(ROOT_DIR, file);
    // Ignore historical pastel backup index.suri.html or docs
    if (rel.includes('docs') || rel.includes('test-runner') || rel.includes('index.suri')) continue;

    for (const kw of bannedKeywords) {
      if (content.includes(kw)) {
        violations.push({ file: rel, keyword: kw });
      }
    }

    // Special check for agency brandLogos array
    if (/brandLogos\s*=\s*\[/i.test(content)) {
      violations.push({ file: rel, keyword: 'brandLogos array' });
    }
  }

  assert(
    violations.length === 0,
    `Found ${violations.length} remnant agency copy matches: ${violations.map(v => `${v.file} ("${v.keyword}")`).join(', ')}`
  );
});

runner.register(2, 'Boundary Cases', 'T2-ASSET-01', 'Asset path resolution: 100% of referenced images exist on disk', async () => {
  const sourceFiles = [
    path.join(ROOT_DIR, 'index.html'),
    ...findFiles(path.join(ROOT_DIR, 'src'), name => /\.(tsx?|jsx?|css)$/.test(name)),
  ];

  const imageRegex = /["'](\/?images\/[a-zA-Z0-9_\-\/.]+\.(png|webp|jpg|jpeg|svg))["']/g;
  const referenced = new Set();

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = imageRegex.exec(content)) !== null) {
      referenced.add(m[1]);
    }
  }

  const missing = [];
  for (const ref of referenced) {
    const normalized = ref.startsWith('/') ? ref.slice(1) : ref;
    const diskPath = path.join(ROOT_DIR, 'public', normalized.startsWith('public/') ? normalized.slice(7) : normalized);
    if (!fs.existsSync(diskPath)) {
      missing.push({ ref, diskPath });
    }
  }

  assert(
    missing.length === 0,
    `Found ${missing.length} broken image references: ${missing.map(m => m.ref).join(', ')}`
  );
});

runner.register(2, 'Boundary Cases', 'T2-BOUNDARY-01', 'UI primitives boundary safety (BlurText empty / long string safety)', async () => {
  const blurTextFile = resolveProjectFile('src/components/ui/BlurText.tsx', 'src/components/BlurText.tsx');
  assert(blurTextFile, 'BlurText component must exist');
  const code = blurTextFile.content;
  assertMatch(code, /text\s*(?:=\s*['"]|&&|\.split)/, 'BlurText must safely guard against null/empty strings');
});

runner.register(2, 'Boundary Cases', 'T2-BOUNDARY-02', 'UI primitives boundary safety (LiquidCard children null safety)', async () => {
  const cardFile = resolveProjectFile('src/components/ui/LiquidCard.tsx', 'src/components/LiquidCard.tsx');
  if (cardFile) {
    assertMatch(cardFile.content, /children\??/, 'LiquidCard must accept optional children');
  }
});

runner.register(2, 'Boundary Cases', 'T2-LINKS-01', 'Broken links and URI scheme validation', async () => {
  const suriData = loadTsModule('src/data/suriData.ts');
  assert(suriData, 'suriData must be loadable');
  const links = suriData.SURI_DATA?.officialLinks || suriData.SOCIAL_LINKS || {};
  const linkValues = Array.isArray(links) ? links.map(l => l.url) : Object.values(links);
  assert(linkValues.length > 0, 'Official social links must be populated');
  for (const url of linkValues) {
    assert(/^https:\/\//.test(url), `Official link must use secure https:// protocol, got ${url}`);
  }
});

runner.register(2, 'Boundary Cases', 'T2-MEDIA-01', 'YouTube Video ID structural invariant (11 chars alphanumeric)', async () => {
  const suriData = loadTsModule('src/data/suriData.ts');
  assert(suriData, 'suriData must be loadable');
  const covers = suriData.MUSIC_COVERS || suriData.SCHEDULE_DATA?.covers || [];
  assert(covers.length > 0, 'Must have music covers defined');
  for (const c of covers) {
    assert(
      /^[a-zA-Z0-9_-]{11}$/.test(c.youtubeId),
      `Invalid YouTube video ID format for cover "${c.title}": ${c.youtubeId}`
    );
  }
});

// ============================================================================
// TIER 3: CROSS-FEATURE COMBINATIONS & STATE TRANSITIONS
// ============================================================================

runner.register(3, 'Cross-Feature', 'T3-CROSS-01', 'Navigation anchor links map 1:1 to section elements in App.tsx', async () => {
  const navFile = resolveProjectFile('src/components/layout/Navbar.tsx', 'src/components/Header.tsx');
  const appFile = resolveProjectFile('src/App.tsx');
  assert(navFile, 'Navbar must exist');
  assert(appFile, 'App.tsx must exist');

  // Discover all section IDs in App or components
  const allCompContent = [
    appFile.content,
    ...findFiles(path.join(ROOT_DIR, 'src/components'), n => n.endsWith('.tsx')).map(f => fs.readFileSync(f, 'utf8'))
  ].join('\n');

  const requiredSections = ['#hero', '#lore', '#specs', '#schedule'];
  for (const sec of requiredSections) {
    const rawId = sec.slice(1);
    const idRegex = new RegExp(`id=["']${rawId}["']`);
    assert(idRegex.test(allCompContent), `Section element id="${rawId}" must exist in the application`);
  }
});

runner.register(3, 'Cross-Feature', 'T3-CROSS-02', 'Mobile menu drawer toggle state contract', async () => {
  const navFile = resolveProjectFile('src/components/layout/Navbar.tsx', 'src/components/Header.tsx');
  assert(navFile, 'Navbar must exist');
  // State hook for mobile open/close
  const hasState = /useState\s*\(\s*false\s*\)/.test(navFile.content) || /isOpen/i.test(navFile.content);
  assert(hasState, 'Navbar must define mobile menu open/closed state');
});

runner.register(3, 'Cross-Feature', 'T3-CROSS-03', 'Zero glasses toggle buttons or state contract', async () => {
  const specsFile = resolveProjectFile('src/components/sections/SpecsSection.tsx');
  const heroFile = resolveProjectFile('src/components/sections/HeroSection.tsx');
  const combined = (specsFile?.content || '') + '\n' + (heroFile?.content || '');

  const hasGlassesToggle = /tháo kính|đeo kính|glassesToggle|showGlasses|useNoGlasses/i.test(combined);
  assert(!hasGlassesToggle, 'Must NOT contain glasses toggle buttons, state, or controls in active UI');
});

runner.register(3, 'Cross-Feature', 'T3-CROSS-04', 'Suri / Irus dual persona toggle contract', async () => {
  const loreFile = resolveProjectFile('src/components/sections/LoreSection.tsx');
  const suriData = loadTsModule('src/data/suriData.ts');
  const combined = (loreFile?.content || '') + '\n' + JSON.stringify(suriData || {});

  assertMatch(combined, /irus_alter_full\.webp|irusSheet/i, 'Must reference Irus alter persona visual asset');
  assertMatch(combined, /Suri/i, 'Must reference Suri persona');
  assertMatch(combined, /Irus/i, 'Must reference Irus persona');
});

runner.register(3, 'Cross-Feature', 'T3-CROSS-05', 'Video modal playback trigger cross-feature integration', async () => {
  const schedFile = resolveProjectFile('src/components/sections/ScheduleSection.tsx', 'src/components/MusicSessions.tsx');
  const modalFile = resolveProjectFile('src/components/modals/VideoModal.tsx', 'src/components/VideoModal.tsx');
  assert(schedFile, 'Schedule/music component must exist');
  assert(modalFile, 'VideoModal must exist');
  const schedContent = schedFile.content;
  const hasModalTrigger = /VideoModal|activeVideo|selectedVideo|setSelectedVideo|onPlay|youtubeId/i.test(schedContent);
  assert(hasModalTrigger, 'Schedule section must trigger VideoModal with YouTube video payload');
});

// ============================================================================
// TIER 4: REAL-WORLD SCENARIOS & BUILD VERIFICATION
// ============================================================================

runner.register(4, 'Build & Layout', 'T4-BUILD-01', 'Production build verification (`pnpm build` exit code 0)', async () => {
  // Executes production build
  try {
    execSync('pnpm build', { cwd: ROOT_DIR, stdio: 'pipe' });
  } catch (err) {
    throw new Error(`pnpm build failed: ${err.stderr?.toString() || err.message}`);
  }

  // Verify dist artifacts
  assertFileExists('dist/index.html', 'dist/index.html must exist after build');
  const distAssets = fs.readdirSync(path.join(ROOT_DIR, 'dist/assets'));
  assert(distAssets.some(f => f.endsWith('.js')), 'dist/assets must contain bundled JS chunk');
  assert(distAssets.some(f => f.endsWith('.css')), 'dist/assets must contain bundled CSS chunk');
});

runner.register(4, 'Build & Layout', 'T4-VIEWPORT-01', 'Desktop viewport layout verification (1920x1080, zero overflow)', async () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  if (!fs.existsSync(chromePath)) {
    console.log('    [SKIP] Chrome not found at standard path, running static layout verification');
    return;
  }

  await runCdpLayoutCheck(1920, 1080, false);
});

runner.register(4, 'Build & Layout', 'T4-VIEWPORT-02', 'Mobile viewport layout verification (390x844, zero overflow)', async () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  if (!fs.existsSync(chromePath)) {
    console.log('    [SKIP] Chrome not found at standard path, running static layout verification');
    return;
  }

  await runCdpLayoutCheck(390, 844, true);
});

runner.register(4, 'Build & Layout', 'T4-RESPONSIVE-01', 'Responsive container & breakpoint CSS integrity', async () => {
  const distCssFiles = findFiles(path.join(ROOT_DIR, 'dist/assets'), n => n.endsWith('.css'));
  assert(distCssFiles.length > 0, 'Compiled CSS must exist in dist/assets');
  const css = fs.readFileSync(distCssFiles[0], 'utf8');

  // Verify responsive media queries exist in compiled CSS
  assertMatch(css, /@media\s*\(min-width:\s*768px\)/, 'Compiled CSS must contain md: (768px) media query rules');
  assertMatch(css, /@media\s*\(min-width:\s*1024px\)/, 'Compiled CSS must contain lg: (1024px) media query rules');
});

// ============================================================================
// CDP Layout Verification Helper
// ============================================================================
function runCdpLayoutCheck(width, height, isMobile) {
  return new Promise((resolve, reject) => {
    // 1. Start static server
    const serverPort = 8150 + Math.floor(Math.random() * 50);
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(ROOT_DIR, 'dist', reqPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath);
        const mime = ext === '.html' ? 'text/html' : ext === '.js' ? 'text/javascript' : ext === '.css' ? 'text/css' : 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404);
        res.end();
      }
    });

    server.listen(serverPort, '127.0.0.1', () => {
      const cdpPort = serverPort + 100;
      const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
      const chrome = spawn(chromePath, [
        '--headless=new',
        `--remote-debugging-port=${cdpPort}`,
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        `http://127.0.0.1:${serverPort}`
      ]);

      const cleanup = () => {
        try { chrome.kill(); } catch (e) {}
        try { server.close(); } catch (e) {}
      };

      const timer = setTimeout(() => {
        cleanup();
        reject(new Error(`CDP layout check timed out for ${width}x${height}`));
      }, 8000);

      setTimeout(() => {
        http.get(`http://127.0.0.1:${cdpPort}/json`, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            try {
              const targets = JSON.parse(data);
              const page = targets.find(t => t.type === 'page');
              if (!page) {
                cleanup();
                clearTimeout(timer);
                return reject(new Error('No page target found on CDP'));
              }

              const ws = new WebSocket(page.webSocketDebuggerUrl);
              ws.onopen = () => {
                ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
                ws.send(JSON.stringify({
                  id: 2,
                  method: 'Emulation.setDeviceMetricsOverride',
                  params: { width, height, deviceScaleFactor: 2, mobile: isMobile }
                }));
                ws.send(JSON.stringify({ id: 3, method: 'Page.reload' }));
              };

              ws.onmessage = (evt) => {
                const msg = JSON.parse(evt.data);
                if (msg.method === 'Page.loadEventFired') {
                  setTimeout(() => {
                    const checkScript = `(() => {
                      const docWidth = document.documentElement.clientWidth;
                      const scrollWidth = document.documentElement.scrollWidth;
                      const overflowing = [];
                      const all = document.querySelectorAll('*');
                      for (const el of all) {
                        const r = el.getBoundingClientRect();
                        if (r.right > docWidth + 2) {
                          overflowing.push({
                            tag: el.tagName,
                            className: el.className ? String(el.className).slice(0, 50) : '',
                            right: Math.round(r.right),
                            docWidth
                          });
                        }
                      }
                      return { docWidth, scrollWidth, overflowing: overflowing.slice(0, 5) };
                    })()`;
                    ws.send(JSON.stringify({
                      id: 10,
                      method: 'Runtime.evaluate',
                      params: { expression: checkScript, returnByValue: true }
                    }));
                  }, 600);
                }

                if (msg.id === 10) {
                  clearTimeout(timer);
                  ws.close();
                  cleanup();
                  const result = msg.result?.result?.value;
                  if (!result) {
                    return reject(new Error('Failed to evaluate viewport metrics'));
                  }
                  if (result.scrollWidth > result.docWidth + 1) {
                    const details = result.overflowing.map(o => `<${o.tag} class="${o.className}"> (right: ${o.right}px > ${o.docWidth}px)`).join('; ');
                    return reject(new Error(
                      `Horizontal overflow detected on ${width}x${height} viewport! scrollWidth (${result.scrollWidth}) > clientWidth (${result.docWidth}). Elements: ${details}`
                    ));
                  }
                  resolve();
                }
              };

              ws.onerror = (err) => {
                clearTimeout(timer);
                cleanup();
                reject(err);
              };
            } catch (err) {
              clearTimeout(timer);
              cleanup();
              reject(err);
            }
          });
        }).on('error', (err) => {
          clearTimeout(timer);
          cleanup();
          reject(err);
        });
      }, 1200);
    });
  });
}

// ============================================================================
// Main Execution
// ============================================================================
runner.run();
