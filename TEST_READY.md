# Test Readiness & Feature Checklist (TEST_READY.md)

**Status**: E2E Test Suite Operational & Baseline Ready  
**Runner Command**: `node scripts/test-runner.cjs` (or `pnpm test`)  
**Test Suite Path**: `scripts/test-runner.cjs`  
**Total Tests**: 55 Tests across 4 Tiers  
**Current Baseline Results**: 44 Passed / 11 Pending Failures (Milestone 2 & Milestone 3 implementation scope)

---

## 1. Feature Checklist & Traceability Matrix (`ORIGINAL_REQUEST.md`)

| Requirement | Description | E2E Test IDs | Current State | Target Milestone |
|---|---|---|---|---|
| **R1. Identity & Remnant Removal** | Clean out all agency copy ("Booking Q3 2026", "AURA", "web design studio", "Aeon", etc.) | `T2-REMNANT-01`, `T1-BRAND-01` | `T1-BRAND-01` PASSED (HTML metadata updated); `T2-REMNANT-01` reports 11 remaining matches in unrefactored agency components (`HeroSection.tsx`, `CapabilitiesSection.tsx`, `App.tsx`) | M1 (Partially complete), M2 (Replaces remaining agency components) |
| **R1. Asset Replacement** | Use local character images in `public/images/` with 0 broken links | `T1-ASSET-01` through `T1-ASSET-05`, `T2-ASSET-01` | **PASSED (6/6)** — All 23 cataloged assets exist, have valid sizes & magic bytes, and 100% of referenced image paths resolve | M1 Complete |
| **R1. Metadata & Titles** | Page titles, favicon, and SEO meta tags reflect Suri Mukeki VTuber showcase | `T1-BRAND-01`, `T1-BRAND-02`, `T1-BRAND-03` | **PASSED (3/3)** — `index.html` updated with authentic title, favicon, OpenGraph, and Twitter tags | M1 Complete |
| **R2. Liquid Glass & Styling** | `.liquid-glass`, `.liquid-glass-strong`, mask borders, and dark aesthetic (`bg-black`) | `T1-BRAND-04`, `T2-BOUNDARY-02`, `T4-RESPONSIVE-01` | **PASSED (3/3)** — Morphism classes verified in `src/index.css` and compiled CSS chunks | M1 Complete |
| **R2.1 Hero Section** | Cyber-courier theme, BlurText, status badge, YouTube/Discord/X CTAs, master cutout | `T1-HERO-01` through `T1-HERO-07` | 1/7 Passed (`T1-HERO-03` BlurText passed); 6 tests failing because `HeroSection.tsx` still renders agency copy | M2 (HeroSection implementation) |
| **R2.2 Lore & Profile Section** | Water slime origin, Irus 300-yr lightning duality, persona dossier, trivia cards | `T1-LORE-01` through `T1-LORE-06`, `T3-CROSS-04` | 6/7 Passed (Canonical data in `suriData.ts` verified); 1 test failing (`T1-LORE-01` container `#lore` not yet in `App.tsx`) | M2 (LoreSection implementation) |
| **R2.3 3D Model Specs & Credits** | Model evolution lineage, telemetry (polygons, ARKit blendshapes, physics bones), creator credits | `T1-SPECS-01` through `T1-SPECS-06`, `T3-CROSS-03` | 7/7 Passed (Canonical telemetry, credits, turnaround sheet, and zero-glasses invariant verified) | M2 (SpecsSection implementation) |
| **R2.4 Schedule & Stream Highlights** | Weekly broadcast routine (UTC+7), stream categories, 6 YouTube covers, VideoModal | `T1-SCHED-01` through `T1-SCHED-06`, `T3-CROSS-05` | 6/7 Passed (Routine, categories, timezone, 6 video IDs, and VideoModal verified); 1 test failing (`T1-SCHED-01` container `#schedule` not yet in `App.tsx`) | M2 (ScheduleSection implementation) |
| **R3. Fixed Navigation** | Fixed liquid-glass capsule navbar, logo pill, anchor links mapping to sections | `T1-NAV-01` through `T1-NAV-03`, `T3-CROSS-01` | 3/4 Passed (`Navbar.tsx` styling and logo verified); 1 test failing (`T3-CROSS-01` mapping `#lore` section container in active DOM) | M3 (Navbar assembly) |
| **R3. Mobile Navigation Drawer** | Mobile hamburger drawer toggle button, full section links | `T1-NAV-04`, `T1-NAV-05`, `T3-CROSS-02` | **PASSED (3/3)** — Mobile button and stateful drawer contracts verified | M3 Complete |
| **Acceptance: Build & Integrity** | `pnpm build` executes cleanly with 0 errors and zero warnings | `T4-BUILD-01` | **PASSED (1/1)** — `tsc && vite build` exits code 0 in ~6.5s | M1/M4 Complete |
| **Acceptance: Viewport Layouts** | Zero horizontal overflow at desktop (`1920x1080`) and mobile (`390x844`) via Chrome CDP | `T4-VIEWPORT-01`, `T4-VIEWPORT-02` | **PASSED (2/2)** — Live headless Chrome verification confirms `scrollWidth === clientWidth` on both viewports | M1/M4 Baseline Complete |

---

## 2. Baseline Test Run Results (October 15, 2026)

```
======================================================================
  SURI MUKEKI SHOWCASE — 4-TIER E2E TEST SUITE RUNNER
  Target Directory: C:\Users\Hasukatsu\Documents\Suri-LandingPage
  Selected Tiers: ALL | Total Tests Queued: 55
======================================================================

▶ TIER 1: Feature Coverage: 31/40 passed (9 failed)
▶ TIER 2: Boundary & Corner Cases: 5/6 passed (1 failed)
▶ TIER 3: Cross-Feature Combinations: 4/5 passed (1 failed)
▶ TIER 4: Real-World Scenarios & Build Verification: 4/4 passed (0 failed)
----------------------------------------------------------------------
Total Tests: 55  |  Passed: 44  |  Failed: 11  |  Time: 10,521ms
```

### Breakdown of Current 11 Failures (Expected Under Progressive Milestones):
1. **Hero Section (`T1-HERO-01`, `T1-HERO-02`, `T1-HERO-04`, `T1-HERO-05`, `T1-HERO-06`, `T1-HERO-07`)**: Currently `src/components/HeroSection.tsx` contains legacy agency text ("Booking Q3 2026", "Aeon", "Start a Project"). Worker M2 will replace this with Suri Hero.
2. **Section Containers (`T1-LORE-01`, `T1-SPECS-01`, `T1-SCHED-01`)**: `App.tsx` has not yet mounted `LoreSection`, `SpecsSection`, and `ScheduleSection`. Worker M2/M3 will mount them.
3. **Remnant Agency Text (`T2-REMNANT-01`)**: Agency copy remains in `CapabilitiesSection.tsx`, `HeroSection.tsx`, and `App.tsx`. Worker M2 will delete or replace these files.
4. **Nav Target Parity (`T3-CROSS-01`)**: Section `#lore` element is not yet rendered in the active DOM. Worker M2/M3 will supply the container.

---

## 3. How Implementing Agents Should Use This Suite

Implementing workers (`worker_m2`, `worker_m3`, `sentinel`) should run:

```powershell
# Run full suite
pnpm test

# Focus on specific feature while implementing
node scripts/test-runner.cjs --filter=hero
node scripts/test-runner.cjs --filter=lore
node scripts/test-runner.cjs --filter=specs
node scripts/test-runner.cjs --filter=schedule

# Verify agency text eradication
node scripts/test-runner.cjs --filter=remnant

# Verify real viewport layouts on Chrome
node scripts/test-runner.cjs --tier=4
```

When Milestone 2 and Milestone 3 are finished, all 55 tests will pass cleanly with **Exit Code 0**.
