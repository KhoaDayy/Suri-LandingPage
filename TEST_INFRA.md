# Test Infrastructure Documentation (E2E Test Architecture)

**Author**: `test_writer_e2e` (E2E Test Architect)  
**Target Project**: `c:\Users\Hasukatsu\Documents\Suri-LandingPage`  
**Test Runner Location**: `scripts/test-runner.cjs`  
**Integrity Mode**: Demo (Opaque-box requirements-driven validation)

---

## 1. Overview & Architecture

The testing framework provides a zero-dependency, automated 4-tier opaque-box E2E test runner implemented in `scripts/test-runner.cjs`. It directly tests requirements established in `ORIGINAL_REQUEST.md` and `PROJECT.md`.

### Core Capabilities:
1. **Opaque-Box Contract Assertions**: Directly tests exported data schemas, HTML metadata, CSS utility classes, component mount targets, and DOM container IDs.
2. **Strict Negative Invariant Checking**: Enforces 0 remnant agency strings across active code (`src/` and `index.html`).
3. **Asset Resolution & File Integrity**: Verifies 100% of referenced image assets exist on disk in `public/images/`, are non-empty, and adhere to expected magic bytes (PNG/WebP).
4. **State Machine & Cross-Feature Verification**: Validates navigation anchor targets, mobile drawer state transitions, Model evolution lineage, Suri/Irus dual persona toggle, and video modal triggers.
5. **Real-World Build & Layout Verification via Chrome DevTools Protocol (CDP)**:
   - Spawns headless Chrome against a local static preview server.
   - Measures true rendered layout metrics (`scrollWidth <= clientWidth`, bounding client rects) at desktop (`1920x1080`) and mobile (`390x844`).
   - Asserts zero horizontal overflow on both viewports.

---

## 2. Invocation Commands

The test runner can be invoked directly with Node or via package scripts:

| Command | Scope |
|---|---|
| `node scripts/test-runner.cjs` | Runs the full 4-tier test suite (all 55 tests) |
| `pnpm test` | Runs the full test suite via pnpm |
| `node scripts/test-runner.cjs --tier=1` | Runs Tier 1 only (Feature Coverage: 40 tests) |
| `node scripts/test-runner.cjs --tier=2` | Runs Tier 2 only (Boundary & Corner Cases: 6 tests) |
| `node scripts/test-runner.cjs --tier=3` | Runs Tier 3 only (Cross-Feature Combinations: 5 tests) |
| `node scripts/test-runner.cjs --tier=4` | Runs Tier 4 only (Build Verification & Viewport Layouts: 4 tests) |
| `node scripts/test-runner.cjs --filter=hero` | Filters tests matching "hero" |
| `node scripts/test-runner.cjs --filter=asset` | Filters tests matching "asset" |
| `node scripts/test-runner.cjs --bail` | Stops execution immediately upon first failure |
| `node scripts/test-runner.cjs --json` | Outputs machine-readable JSON results |
| `node scripts/test-runner.cjs --no-color` | Disables ANSI terminal coloring |

---

## 3. 4-Tier Test Coverage Breakdown

### Tier 1: Feature Coverage (40 Tests, >=5 per feature)
Covers all primary behavioral requirements across the 7 application feature domains:

1. **Feature 1: Hero Section (`#hero`) — 7 Tests**
   - `[T1-HERO-01]`: Section container with `id="hero"` is configured.
   - `[T1-HERO-02]`: Character identity ("Suri Mukeki", "無敵・スリ") and titles are displayed.
   - `[T1-HERO-03]`: Title entrance uses `<BlurText>` or staggered motion blur effect.
   - `[T1-HERO-04]`: System status or cyber-courier badge is rendered (`<LiquidBadge>`).
   - `[T1-HERO-05]`: Community call-to-actions (YouTube, Discord, X) are present with valid links.
   - `[T1-HERO-06]`: Character master cutout asset (`suri_cutout_transparent.png`) is referenced.
   - `[T1-HERO-07]`: Hero quick stats / community metric cards (51,400+ subs, debut date, Model 3.0) exist.

2. **Feature 2: Lore & Profile Section (`#lore`) — 6 Tests**
   - `[T1-LORE-01]`: Section container with `id="lore"` is configured.
   - `[T1-LORE-02]`: Reincarnated water slime genesis lore is documented.
   - `[T1-LORE-03]`: Enigmatic birthday note from "W" is documented.
   - `[T1-LORE-04]`: Irus alter persona and 300-year lightning seal lore is present.
   - `[T1-LORE-05]`: Persona dossier profile attributes (species, height: 155cm, debut: 17.04.2021, birthday: 30.10, Slayer fanbase) exist.
   - `[T1-LORE-06]`: Character personality tags and trivia items (sweet tooth, thunderstorm phobia, living hairpin) are defined.

3. **Feature 3: 3D Model Specs & Credits Section (`#specs`) — 6 Tests**
   - `[T1-SPECS-01]`: Section container with `id="specs"` is configured.
   - `[T1-SPECS-02]`: Model 3.0 technical telemetry (polygons & ARKit blendshapes) is present.
   - `[T1-SPECS-03]`: Physics kinematics (SpringBone/cloth) and shader specifications (custom toon cel & PBR) are present.
   - `[T1-SPECS-04]`: Verified creator artisan credits (T_blence - Papa, Sophiel - Mama, Hare_ta06 - Costume, kcomorebi & Truong Thanh Tan - Genesis) exist.
   - `[T1-SPECS-05]`: Costume or turnaround reference sheet asset (`costume_detailing_materials.png`) is referenced.
   - `[T1-SPECS-06]`: Model evolution lineage (Debut 1.0 -> Irus Alter -> Model 2.0 -> Model 3.0) is documented.

4. **Feature 4: Schedule & Stream Highlights Section (`#schedule`) — 6 Tests**
   - `[T1-SCHED-01]`: Section container with `id="schedule"` is configured.
   - `[T1-SCHED-02]`: Weekly broadcast routine matrix is populated with distinct broadcast days.
   - `[T1-SCHED-03]`: Stream content categories (Gaming/FPS, Free Talk, Singing/Music, 3D ASMR) are clearly distinguished.
   - `[T1-SCHED-04]`: Timezone indicator is clearly stated (ICT / UTC+7 / GMT+7).
   - `[T1-SCHED-05]`: Verified music cover catalog contains verified YouTube IDs ("KING", "Yoru ni Kakeru", "Nàng Thơ", "Only Love").
   - `[T1-SCHED-06]`: Video playback modal component (`VideoModal`) is integrated for YouTube embeds.

5. **Feature 5: Fixed Navigation & Mobile Drawer — 5 Tests**
   - `[T1-NAV-01]`: Fixed navbar container with liquid glass styling (`.liquid-glass`, fixed position, high z-index).
   - `[T1-NAV-02]`: Brand pill displays official Suri logo asset (`logo_suri.png` / `suri_portrait.webp`).
   - `[T1-NAV-03]`: Anchor links target all 4 sections (`#hero`, `#lore`, `#specs`, `#schedule`).
   - `[T1-NAV-04]`: Mobile hamburger drawer button exists and is responsive (`md:hidden`).
   - `[T1-NAV-05]`: Mobile navigation drawer provides full section targets and action links.

6. **Feature 6: Branding, Styling & Metadata — 5 Tests**
   - `[T1-BRAND-01]`: HTML document title reflects Suri Mukeki without remnant agency copy.
   - `[T1-BRAND-02]`: Favicon links to Suri portrait or brand icon.
   - `[T1-BRAND-03]`: Dark cinematic aesthetic root classes (`bg-black`, `text-white`) are present.
   - `[T1-BRAND-04]`: Liquid glass CSS utilities (`.liquid-glass`, `.liquid-glass-strong`, mask borders) are defined in `src/index.css`.
   - `[T1-BRAND-05]`: Dark liquid-glass footer with hashtags (`#SuriMukeki`, `#Sureiya`, `#SuriArt`) and community links exists.

7. **Feature 7: Media & Asset Catalog Integrity — 5 Tests**
   - `[T1-ASSET-01]`: All 23 cataloged image assets exist in `public/images/`.
   - `[T1-ASSET-02]`: Hero transparent cutouts (`suri_cutout_transparent.png`, `suwi_courier_portrait.png`) are valid and non-empty PNG files (>1MB).
   - `[T1-ASSET-03]`: Evolution model portraits (`suri_debut_model.webp`, `suri_model2.webp`, `suri_model3.webp`, `suri_model3_noglasses.webp`, `irus_alter_full.webp`) exist with valid RIFF/WEBP magic bytes.
   - `[T1-ASSET-04]`: Technical reference sheets (`costume_detailing_materials.png`, `irus_reference_sheet.webp`) exist with high resolution (>200KB).
   - `[T1-ASSET-05]`: Official brand logo (`logo_suri.png`) exists in `public/images/icons/` (>50KB).

---

### Tier 2: Boundary & Corner Cases (6 Tests)
- `[T2-REMNANT-01]`: **Strict Negative Invariant** — Grep check across `src/` and `index.html` asserting 0 matches for banned agency terms (`Booking Q3 2026`, `Crafted Digital Experiences`, `web design studio`, `Start a Project`, `Aeon`, `Vela`, `Orbit`, `Zeno`, `brandLogos`, etc.).
- `[T2-ASSET-01]`: **Asset Path Resolution** — Scans all JSX/TSX/CSS for referenced image URLs and asserts 100% resolve to existing files on disk.
- `[T2-BOUNDARY-01]`: **UI Primitives Boundary Safety** — Verifies `BlurText` handles empty string, single words, and null inputs without throwing exceptions.
- `[T2-BOUNDARY-02]`: **UI Primitives Boundary Safety** — Verifies `LiquidCard` accepts optional/empty children.
- `[T2-LINKS-01]`: **Broken Links & URI Validation** — Verifies all official links use secure `https://` protocol and match authentic domains.
- `[T2-MEDIA-01]`: **YouTube Video ID Invariant** — Validates all video IDs strictly follow YouTube's 11-character format (`^[a-zA-Z0-9_-]{11}$`).

---

### Tier 3: Cross-Feature Combinations & State Transitions (5 Tests)
- `[T3-CROSS-01]`: **Navigation Anchor Mapping** — Verifies 1:1 bidirectional mapping between navbar links (`#hero`, `#lore`, `#specs`, `#schedule`) and target section element IDs.
- `[T3-CROSS-02]`: **Mobile Menu Drawer Toggle Contract** — Verifies mobile drawer open/close state machine.
- `[T3-CROSS-03]`: **Zero Glasses Toggle Contract** — Strict negative assertion validating that no glasses toggle buttons, state, or controls exist in the application.
- `[T3-CROSS-04]`: **Suri / Irus Dual Persona Toggle Contract** — Validates state machine switching between Suri (Water Slime) and Irus (Lightning Monarch `irus_alter_full.webp`).
- `[T3-CROSS-05]`: **Video Modal Playback Trigger Integration** — Verifies cover cards trigger `VideoModal` with active video ID payload.

---

### Tier 4: Real-World Scenarios & Build Verification (4 Tests)
- `[T4-BUILD-01]`: **Production Build Verification** — Executes `pnpm build` (`tsc && vite build`), asserts exit code 0, and verifies compiled assets in `dist/`.
- `[T4-VIEWPORT-01]`: **Desktop Viewport Layout Verification (1920x1080)** — Spawns headless Chrome via CDP and asserts zero horizontal overflow (`scrollWidth <= clientWidth`).
- `[T4-VIEWPORT-02]`: **Mobile Viewport Layout Verification (390x844)** — Emulates iPhone mobile device metrics via CDP and asserts zero horizontal overflow across all rendered elements.
- `[T4-RESPONSIVE-01]`: **Responsive Container & Breakpoint CSS Integrity** — Asserts compiled CSS includes `md:` (768px) and `lg:` (1024px) media queries.

---

## 4. Exit Code Contract
- Exit Code `0`: All executed tests passed cleanly.
- Exit Code `1`: At least one test assertion failed, with detailed failure logs and remediation pointers printed to stderr/stdout.
