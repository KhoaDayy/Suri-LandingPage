## 2026-10-15T13:28:18Z
You are worker_m2 (role: Showcase Section Architect).
Your working directory is:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\worker_m2\

MANDATORY FIRST STEP: Read the authoritative user request at:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\ORIGINAL_REQUEST.md

Read the project specification:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\orchestrator_1\PROJECT.md

Read the test readiness specification and E2E runner:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\TEST_READY.md
(You can run `node scripts/test-runner.cjs` or `pnpm test` to test your implementations against the 55 E2E tests!)

Read the architectural blueprint and verified content schemas:
- c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\explorer_survey_2\handoff.md
- c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\explorer_survey_3\handoff.md
- c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\worker_m1\handoff.md

Your exclusive write ownership:
- `src/components/sections/HeroSection.tsx` (and `src/components/HeroSection.tsx`)
- `src/components/sections/LoreSection.tsx`
- `src/components/sections/SpecsSection.tsx`
- `src/components/sections/ScheduleSection.tsx`
- `src/components/modals/VideoModal.tsx`
- `src/components/CapabilitiesSection.tsx` (clean out or remove agency capabilities)

Scope of Milestone 2 (M2):
Implement the 4 core dark cinematic liquid-glass showcase sections using `src/data/suriData.ts`, `src/types/index.ts`, and UI primitives (`BlurText`, `LiquidCard`, `LiquidBadge`):

1. **Section 1: Hero Section** (`src/components/sections/HeroSection.tsx`, `id="hero"`):
   - Replace old agency hero completely! Ensure zero agency text remains ("Booking Q3 2026", "Aeon", "Vela", "Apex", "Orbit", "Zeno", "Start a Project", "Crafted Digital", "140+ Brands").
   - Cyber-courier aesthetic, character title with `<BlurText>`, status badge (`<LiquidBadge>`), CTAs (YouTube, Discord, X), background radial atmospheric glow, dynamic master cutout (`/images/characters/suri_cutout_transparent.png`), 3 liquid-glass hero stats cards (51,400+ Sureiya community, Model 3.0, 155cm/40kg), and community credibility bar.
   - Also update `src/components/HeroSection.tsx` (or re-export `src/components/sections/HeroSection.tsx`) so that the active DOM immediately reflects the new Hero!

2. **Section 2: Lore & Profile Section** (`src/components/sections/LoreSection.tsx`, `id="lore"`):
   - Classified origin chronicle: Reincarnated Water Slime (REC-001) & birthday note from "W", Irus 300-year lightning monarch duality (REC-002), and Cyber-Courier protocol (REC-003).
   - Interactive persona tab: Switch between Suri (Water Slime, `/images/characters/suwi_courier_portrait.png`) and Irus (Lightning Monarch, `/images/characters/irus_alter_full.webp`).
   - Profile attributes table (Species, Birthday, Height/Weight, Languages, Fanbase).
   - Personality tags and 4 trivia cards in `.liquid-glass`.

3. **Section 3: 3D Model Specs & Credits Section** (`src/components/sections/SpecsSection.tsx`, `id="specs"`):
   - Model 3.0 technical telemetry cards: 68,400 polygons (112,800 tris), 142 ARKit blendshapes & visemes, 38 dynamic spring physics chains, 12 toon/PBR shader slots.
   - Interactive glasses toggle: Switch between glasses (`/images/characters/suri_model3.webp`) and open-eyed expression (`/images/characters/suri_model3_noglasses.webp`).
   - Official costume design turnaround showcase (`/images/gallery/costume_detailing_materials.png`).
   - Creator & rigger credits grid in `.liquid-glass` cards (T_blence, Sophiel, Hare_ta06, kcomorebi, Truong Thanh Tan).

4. **Section 4: Schedule & Stream Highlights Section** (`src/components/sections/ScheduleSection.tsx`, `id="schedule"`):
   - Weekly stream routine broadcast matrix (Tue, Thu, Fri, Sat, Sun in ICT UTC+7).
   - 6 verified YouTube cover cards (KING, Yoru ni Kakeru, Nàng Thơ, Renai Circulation, Only Love, Bocca della Verità) with drink pairings.
   - Clicking a cover triggers `<VideoModal />` with the respective YouTube embed ID.

5. **Video Modal** (`src/components/modals/VideoModal.tsx`):
   - Liquid-glass modal frame with backdrop blur, accessible iframe player (`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`), Escape key dismissal, and close button.

6. Clean out `src/components/CapabilitiesSection.tsx`: Replace agency service marketing ("Design", "Engineering", "Growth") or remove it cleanly so that no agency text remains.

7. Verification:
   - Run `pnpm build` (must compile with 0 TypeScript errors and 0 warnings).
   - Run `node scripts/test-runner.cjs` (verify feature tests for hero, lore, specs, schedule pass).

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Follow the Handoff Protocol: Observation, Logic Chain, Caveats, Conclusion, Verification Method.
Deliver your report to:
c:\Users\Hasukatsu\Documents\Suri-LandingPage\.agents\teamwork\worker_m2\handoff.md
Notify caller when complete.
