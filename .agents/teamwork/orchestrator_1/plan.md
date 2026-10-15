# Project Execution Plan: Suri Mukeki VTuber Showcase Landing Page

## Objective
Transform the dark cinematic React + Vite + Tailwind landing page into a comprehensive, multi-section VTuber showcase landing page for Suri Mukeki meeting all requirements (R1, R2, R3) and acceptance criteria.

## Phase 0: Survey & Codebase Mapping
- Spawn 3 parallel Explorers to inspect:
  - Explorer 1 (`survey_explorer_1`): Codebase inventory, dependencies, scripts, build tooling, available character assets in `public/images/`.
  - Explorer 2 (`survey_explorer_2`): Agency branding remnants audit across all code/HTML/components, identifying all strings needing replacement.
  - Explorer 3 (`survey_explorer_3`): UI component hierarchy, liquid glass styling (`.liquid-glass`, `.liquid-glass-strong`), Framer Motion setup, and responsive navigation structure.
- Synthesize findings into `PROJECT.md` (Feature Inventory, Architecture, Code Layout, Interface Contracts, Milestones).

## Phase 1: Dual Track Launch
### Track A: Implementation Track
- Milestone 1: Core Branding, Metadata, Assets & Config
  - Update `index.html`, package metadata, site title, favicon, OpenGraph metadata.
  - Establish data models / lore constants for Suri Mukeki.
- Milestone 2: Section Architecture & Content Implementation
  - Section 1: Hero Section (cyber-courier aesthetic, `<BlurText>`, status badge, CTA buttons, background).
  - Section 2: Lore & Profile Section (character backstory, personality tags, key trivia, visual portraits).
  - Section 3: 3D Model Specs & Credits (poly count, blendshapes, physics bones, artist/rigger credits in liquid glass cards).
  - Section 4: Schedule & Stream Highlights (weekly broadcast schedule, highlights, video/clip showcase).
- Milestone 3: Navigation, Polishing & Responsive Design
  - Fixed liquid-glass navbar with smooth scroll links to each section.
  - Fluid mobile (390x844) & desktop (1920x1080) responsive adjustments.
  - Glow masks, hover states, and transitions.

### Track B: E2E Testing Track
- Test infrastructure creation (`TEST_INFRA.md`).
- Automated tests across Tiers 1-4:
  - Tier 1: Feature coverage (all 4 sections, CTA links, metadata).
  - Tier 2: Boundary & Corner cases (broken assets check, remnant text search, empty states).
  - Tier 3: Cross-feature combinations (navigation smooth-scroll, mobile menu toggles, interactive cards).
  - Tier 4: Real-world user scenario & build verification (`pnpm build`, responsive layout rendering).
- Signal readiness via `TEST_READY.md`.

## Phase 2: Final Verification & Adversarial Hardening
- Run E2E test suite against implementation (100% pass required).
- Phase 2 adversarial coverage hardening (Challengers + Workers + Reviewers).
- Forensic Integrity Audit (`teamwork_preview_auditor`).
- Final synthesis & victory claim reporting to parent orchestrator.
