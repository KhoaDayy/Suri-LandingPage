## 2026-10-15T13:45:39Z
You are worker_m3 (role: Navigation and Polish Specialist).
Your working directory is:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\worker_m3\

MANDATORY FIRST STEP: Read the authoritative user request at:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\ORIGINAL_REQUEST.md

Read the project specification:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\orchestrator_1\PROJECT.md

Read the test readiness specification and E2E runner:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\TEST_READY.md
(Run `node scripts/test-runner.cjs` or `pnpm test` to test your code!)

Read the UI architecture blueprint:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\explorer_survey_3\handoff.md
Read the Milestone 2 handoff:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\worker_m2\handoff.md

Your exclusive write ownership:
- `src/components/layout/Navbar.tsx` (and `src/components/Navbar.tsx`)
- `src/components/layout/Footer.tsx` (and `src/components/Footer.tsx`)
- `src/App.tsx`
- `src/index.css` (if needed for styling tweaks)

Scope of Milestone 3 (M3):
1. **Fixed Liquid-Glass Navbar** (`src/components/layout/Navbar.tsx` and `src/components/Navbar.tsx`):
   - Fixed capsule navbar with `.liquid-glass` / `.liquid-glass-strong`.
   - Brand logo pill with `/images/icons/logo_suri.png` and text "SURI MUKEKI" / "無敵スリ".
   - Smooth-scroll anchor links to all 4 sections: `#hero`, `#lore`, `#specs`, `#schedule` (using `NAV_LINKS` from `src/data/suriData.ts`).
   - Action CTA pill button linking to YouTube Channel or Discord.
   - Mobile hamburger button (`flex md:hidden pointer-events-auto`) toggling an accessible animated liquid-glass mobile menu drawer (`AnimatePresence`) with section links and socials. Drawer must close on link click or close button.
2. **Liquid-Glass Footer** (`src/components/layout/Footer.tsx` and `src/components/Footer.tsx`):
   - Dark cinematic liquid-glass footer with official channels (YouTube, X, Discord, Carrd, Marshmallow, Facebook).
   - Official community hashtags: `#SuriMukeki`, `#Suristream`, `#SuriArt`, `#Sureiya`.
   - Copyright notice and community tribute.
3. **Master Page Assembly** (`src/App.tsx`):
   - Mount `<Navbar />`, `<main><HeroSection /><LoreSection /><SpecsSection /><ScheduleSection /></main>`, and `<Footer />`.
   - Ensure `id="hero"`, `id="lore"`, `id="specs"`, `id="schedule"` are correctly mapped and navigate smoothly.
4. **Responsive Polish & Layout Verification**:
   - Verify smooth scrolling (`html { scroll-behavior: smooth; }`).
   - Verify zero horizontal overflow on desktop (1920x1080) and mobile (390x844).
   - Run `node scripts/test-runner.cjs` to confirm 55/55 tests pass (especially Tier 1 Nav, Tier 3 Cross-feature, and Tier 4 Viewports).
   - Run `pnpm build` to ensure 0 TypeScript errors and 0 warnings.
