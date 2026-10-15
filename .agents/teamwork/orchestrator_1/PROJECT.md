# Project: Suri Mukeki VTuber Showcase Landing Page

## Architecture
- **Framework**: React 18.3.1 + Vite 6.0.1 + TypeScript (strict mode) + Tailwind CSS 3.4.16.
- **Animation & Aesthetics**: Framer Motion 14.2.0, `.liquid-glass` / `.liquid-glass-strong` morphism cards, glow borders, `<BlurText>`, dark cinematic void (`bg-black`).
- **Data Flow**: Static verified canonical data store (`src/data/suriData.ts`) typed by `src/types/index.ts`, driving self-contained section components.
- **Entry Point**: `src/App.tsx` orchestrates fixed `Navbar`, `HeroSection`, `LoreSection`, `SpecsSection`, `ScheduleSection`, `Footer`, and `VideoModal`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Metadata & Agency Remnant Removal | Clean out all agency copy ("Booking Q3 2026", "AURA", "web design studio", "Aeon", etc.) and set VTuber page title/favicon/meta | M1 | ORIGINAL_REQUEST §R1 |
| 2 | Canonical Data & Types | Typesafe data definitions for Suri Mukeki lore, specs, schedule, and assets | M1 | ORIGINAL_REQUEST §R1, R2 |
| 3 | Core Liquid-Glass UI Primitives | Refactor `BlurText.tsx`, build `LiquidCard.tsx`, `LiquidBadge.tsx` | M1 | ORIGINAL_REQUEST §R2 |
| 4 | Fixed Liquid-Glass Navbar & Mobile Drawer | Floating glass capsule navigation with logo, anchor links, and mobile menu | M3 | ORIGINAL_REQUEST §R3 |
| 5 | Hero Section (`#hero`) | Cyber-courier theme, BlurText, status badge, YouTube/Discord/X CTAs, master transparent cutout | M2 | ORIGINAL_REQUEST §R2.1 |
| 6 | Lore & Profile Section (`#lore`) | Reincarnated water slime lore, Irus duality, persona dossier, trivia cards | M2 | ORIGINAL_REQUEST §R2.2 |
| 7 | 3D Model Specs & Credits (`#specs`) | Model 3.0 telemetry cards, glasses toggle, costume turnaround sheet, artisan credits | M2 | ORIGINAL_REQUEST §R2.3 |
| 8 | Schedule & Stream Highlights (`#schedule`) | Weekly stream routine matrix, 6 verified YouTube cover cards, and VideoModal | M2 | ORIGINAL_REQUEST §R2.4 |
| 9 | Liquid-Glass Footer | Social channel pill links, official hashtags, copyright tribute | M3 | ORIGINAL_REQUEST §R1, R2 |
| 10 | Responsive Layout & Polish | Zero horizontal overflow on 1920x1080 and 390x844 viewports, smooth scrolling | M3 | ORIGINAL_REQUEST §R3 |
| 11 | Comprehensive E2E Test Suite | Automated test suite covering Tiers 1-4 with test runner and verification | E2E-Track | ORIGINAL_REQUEST Acceptance Criteria |
| 12 | Final E2E Verification & Adversarial Hardening | 100% pass of E2E suite, Tier 5 adversarial hardening, Forensic Integrity Audit | M-Final | ORIGINAL_REQUEST Acceptance Criteria |

## Code Layout
```
src/
├── types/
│   └── index.ts                    # Strict TypeScript interfaces
├── data/
│   └── suriData.ts                 # Authoritative Suri Mukeki data & asset paths
├── components/
│   ├── ui/
│   │   ├── BlurText.tsx            # Word-staggered blur entrance
│   │   ├── LiquidCard.tsx          # Reusable liquid-glass morphism card
│   │   └── LiquidBadge.tsx         # Liquid-glass status pill badge
│   ├── layout/
│   │   ├── Navbar.tsx              # Fixed liquid-glass navbar + mobile drawer
│   │   └── Footer.tsx              # Dark liquid-glass footer with socials & hashtags
│   ├── sections/
│   │   ├── HeroSection.tsx         # Section 1: #hero
│   │   ├── LoreSection.tsx         # Section 2: #lore
│   │   ├── SpecsSection.tsx        # Section 3: #specs
│   │   └── ScheduleSection.tsx     # Section 4: #schedule
│   └── modals/
│       └── VideoModal.tsx          # YouTube embed modal with liquid glass frame
├── App.tsx                         # Master page layout assembly
├── index.css                       # Liquid glass styles & Tailwind base
└── main.tsx                        # App bootstrap
```

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| E2E | E2E Testing Track | Independent opaque-box test runner & multi-tier test suite (Tiers 1-4) | none | DONE |
| M1 | Core Branding, Data & Primitives | Metadata in index.html, types/index.ts, data/suriData.ts, UI primitives | none | DONE |
| M2 | Four Core Showcase Sections | HeroSection, LoreSection, SpecsSection, ScheduleSection, VideoModal | M1 | DONE |
| M3 | Navigation, Polish & Viewports | Fixed Navbar, Footer, App.tsx assembly, mobile drawer, responsive polish | M2 | DONE |
| M-Final | Final E2E Pass & Hardening | 100% E2E test pass, adversarial hardening (Tier 5), Forensic Integrity Audit | M3, E2E | DONE |

## Interface Contracts
### `src/data/suriData.ts` ↔ UI Components
- `HERO_DATA`: `{ badge, title, japaneseTitle, tagline, ctas, stats, communityTags, characterImage }`
- `LORE_DATA`: `{ sectionTag, headline, leadParagraph, dossiers, attributes, personalityTags, trivia, irusAsset, suriAsset }`
- `SPECS_DATA`: `{ sectionTag, headline, telemetry, glassesToggle, costumeSheet, credits }`
- `SCHEDULE_DATA`: `{ sectionTag, headline, timezone, routine, covers }`
- `NAV_LINKS`: `Array<{ label: string; href: string }>` mapping to `#hero`, `#lore`, `#specs`, `#schedule`.
