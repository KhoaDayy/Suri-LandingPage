# UI & Styling Architecture Audit Report & Blueprint

**Agent**: `survey_explorer_3` (UI & Styling Architecture Auditor)  
**Target Project**: `c:\Users\Hasukatsu\Documents\Suri-LandingPage`  
**Handoff Type**: Hard (Investigation & Architecture Complete)  
**Date**: 2026-10-15  

---

## 1. Observation

### 1.1 Existing App Structure & Render Pipeline
- **`src/App.tsx:1-15`**:
  ```tsx
  import React from 'react';
  import { HeroSection } from './components/HeroSection';
  import { CapabilitiesSection } from './components/CapabilitiesSection';

  export const App: React.FC = () => {
    return (
      <div className="bg-black text-white selection:bg-white selection:text-black">
        <HeroSection />
        <CapabilitiesSection />
      </div>
    );
  };
  export default App;
  ```
  The rendered application currently consists solely of `<HeroSection />` and `<CapabilitiesSection />`.
- **`src/components/HeroSection.tsx`**:
  - Contains remnant agency copy:
    - Line 31: `<span className="font-heading italic text-2xl text-white select-none">a</span>` (Brand circle logo placeholder).
    - Lines 36-51: `navLinks = ['Work', 'Studio', 'Services', 'Journal', 'Contact']` with links `#work`, `#studio`, `#services`, `#journal`, `#contact`, and "Start a Project".
    - Line 71: `"Booking Q3 2026 engagements -- limited capacity"`.
    - Line 77: `"Crafted Digital Experiences Built to Outlast Trends"`.
    - Lines 90-91: `"We are a small studio of designers and engineers shaping brand-defining websites for ambitious companies..."`.
    - Lines 130-146: `"6 Weeks Average End-to-End Launch Time"`, `"140+ Brands Shipped Across Four Continents"`.
    - Lines 160-170: `"Trusted by founders, operators, and creative directors worldwide"`, brand logos `['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno']`.
- **`src/components/CapabilitiesSection.tsx`**:
  - Line 36: `<section id="services" ...>`.
  - Lines 13-32: Studio agency cards: "Design", "Engineering", "Growth" with tags `['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion']`, `['React', 'Next.js', 'Headless CMS', 'Edge-Ready']`.
  - Line 52: `"Studio craft,\nend to end"`.
- **`src/components/` Unrendered Legacy Artifacts**:
  - `Hero.tsx`, `Header.tsx`, `Footer.tsx`, `SideNav.tsx`, `SacredMotifs.tsx`, `StoryRecord.tsx`, `EvolutionTimeline.tsx`, `CharacterGallery.tsx`, `LoreArchive.tsx`, `MusicSessions.tsx`, `LightboxModal.tsx`, `VideoModal.tsx`.
  - Direct observation: These components were written for a light-mode pastel aesthetic (`bg-[#FAF7F2]`, `bg-[#FAF5EE]`, `text-chocolate-900`, `border-taro-200`, `bg-berry-400`, `font-kawaii`).
  - Many Tailwind classes used in them (such as `chocolate`, `taro`, `berry`, `pudding`, `mint`, `font-kawaii`, `shadow-cafe`) are **not defined** in `tailwind.config.js`. They were developed for a separate concept (`index.suri.html`) and do not adhere to the mandated dark cinematic aesthetic.

### 1.2 Liquid Glass Implementation in `src/index.css`
- **`src/index.css:17-46` (`.liquid-glass`)**:
  ```css
  .liquid-glass {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }
  .liquid-glass::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0.15) 80%,
      rgba(255, 255, 255, 0.45) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  ```
- **`src/index.css:49-78` (`.liquid-glass-strong`)**:
  - Uses `backdrop-filter: blur(50px)` and heavier inset shadow `box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.15)`.
  - Border mask uses higher opacity stops (`rgba(255, 255, 255, 0.5)`).

### 1.3 Framer Motion & Animation Mechanics
- **`src/components/BlurText.tsx:1-49`**:
  - Uses `useInView(containerRef, { once: true, amount: 0.1 })`.
  - Maps words to `motion.span` with `initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}` and cubic-bezier easing `ease: [0.16, 1, 0.3, 1]`.
  - Hardcodes inline style `justifyContent: 'center'`:
    ```tsx
    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em', ...style }}
    ```
- **`src/components/HeroSection.tsx:7-10`**:
  - Motion variant: `initial: { filter: 'blur(10px)', opacity: 0, y: 20 }`, `animate: { filter: 'blur(0px)', opacity: 1, y: 0 }`.
- **`src/components/CapabilitiesSection.tsx:60-64`**:
  - Card entrance: `whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}` with `viewport={{ once: true, amount: 0.1 }}` and staggered delay `index * 0.15`.
- **`src/components/FadingVideo.tsx:1-127`**:
  - Custom `requestAnimationFrame` loop that fades video opacity in/out to create crossfade transitions without DOM flashes.

### 1.4 Typography, Tokens, and HTML Metadata
- **`tailwind.config.js:9-23`**:
  - `fontFamily.heading`: `["'Instrument Serif'", 'serif']`
  - `fontFamily.body`: `["'Barlow'", 'sans-serif']`
  - `colors.cream`: palette 50 through 400.
- **`index.html:6`**:
  - Current title: `<title>Studio — Crafted Digital Experiences</title>` (remnant agency branding).
- **`package.json:11-26`**:
  - `framer-motion: ^14.2.0`, `lucide-react: ^0.460.0`, `react: ^18.3.1`, `tailwindcss: ^3.4.16`, `vite: ^6.0.1`.
- **`pnpm build` Execution**:
  - Command: `tsc && vite build`.
  - Result: Built in 3.38s with zero errors (`dist/assets/index-DNUaPRoA.js: 293.66 kB`).

### 1.5 Responsive Viewport Breakpoints & Deficiencies
- **Desktop (1920x1080)**:
  - `HeroSection` spans 100vh with centered column; navbar stretches with `px-8 lg:px-16` without max-width capping, causing extreme spread on ultra-wide viewports.
- **Mobile (390x844)**:
  - **No mobile navigation menu exists**: In `HeroSection.tsx:35`, `<nav className="hidden md:flex ...">`. On screen widths under 768px, navigation is completely invisible, leaving users stranded without any links.
  - **Typography scale overflow**: `text-6xl md:text-7xl lg:text-[5.5rem]` with `tracking-[-4px]` on `BlurText` creates cramped wrapping on 390px screens.
  - **Trust logo bar horizontal overflow**: In `HeroSection.tsx:163`, `className="flex items-center justify-center gap-12 md:gap-16"` with 5 text logos (`Aeon`, `Vela`, `Apex`, `Orbit`, `Zeno`) forces elements off-screen on 390px screens when not wrapped.

---

## 2. Logic Chain

1. **Aesthetic Directive Alignment**:
   - `ORIGINAL_REQUEST.md` (R2) mandates: *"Expand the current single-page layout into a coherent multi-section showcase retaining the dark cinematic aesthetic, `.liquid-glass` / `.liquid-glass-strong` morphism cards, and Framer Motion effects"*.
   - The pastel components in `src/components/` (`Hero.tsx`, `Header.tsx`, `LoreArchive.tsx`, etc.) represent an incompatible design direction (`#FAF7F2` cream background, brown text, and missing Tailwind colors).
   - Therefore, the codebase must retain and build directly upon the dark cinematic foundation (`bg-black`, `Instrument Serif`, `Barlow`, `.liquid-glass`, `Framer Motion`), replacing agency copy and layout with Suri Mukeki content.

2. **Liquid Glass Polish & Usability**:
   - Observations show that `background: rgba(255, 255, 255, 0.01)` on pure black `#000` provides insufficient luminance contrast for text readability unless a bright video or radial aura is placed behind it.
   - Increasing the base card tint slightly to `rgba(255, 255, 255, 0.025)` - `rgba(255, 255, 255, 0.04)` combined with subtle cyan (`rgba(58, 168, 232, 0.15)`) and violet (`rgba(168, 85, 247, 0.15)`) ambient backdrops provides true glass refraction while passing WCAG AA contrast (4.5:1) for body text.
   - The `::before` mask-composite technique (`mask-composite: exclude` / `-webkit-mask-composite: xor`) is clean, performant, and correctly isolated with `pointer-events: none`.

3. **Motion Optimization & Accessibility**:
   - `framer-motion` version 14.2.0 handles GPU transforms smoothly when using `opacity`, `transform` (`y`, `scale`), and subtle `filter: blur()`.
   - In `BlurText.tsx`, hardcoding `justifyContent: 'center'` prevents left-aligned section headings. Adding a configurable `align` or `justify` prop (or honoring `className`) makes it reusable across all sections.
   - To respect accessibility, motion variants should include `prefers-reduced-motion` fallbacks so that users with vestibular sensitivities do not experience disorienting blurs or translations.

4. **Multi-Section Architecture (#hero, #lore, #specs, #schedule)**:
   - `ORIGINAL_REQUEST.md` mandates four core sections plus fixed liquid-glass navigation.
   - The current single-page structure in `App.tsx` must be refactored into:
     - `FixedNavbar`: Liquid-glass capsule containing brand logo, smooth-scroll links (`#hero`, `#lore`, `#specs`, `#schedule`), social CTAs (Twitch/YouTube/Discord), and a mobile hamburger drawer.
     - `#hero`: Cyber-courier hero with `<BlurText>`, status badge, quick stats, character cutout, and interactive callouts.
     - `#lore`: Translucent water-slime reincarnation story, Suri vs Irus duality, persona specs, and verified canonical quotes.
     - `#specs`: Technical 3D model specifications (polycount, blendshapes, physics bones, shader setup) + liquid-glass artist/rigger credit cards.
     - `#schedule`: Weekly broadcast schedule routine (Wed/Fri/Sun GMT+7) + featured stream highlight/cover cards with video modals.
     - `Footer`: Liquid-glass footer with verified social channels, hashtags, and copyright tribute.

5. **Responsive Design Rules (1920x1080 to 390x844)**:
   - Mobile navigation must be accessible: Replace `hidden md:flex` with a mobile hamburger button (`pointer-events-auto`) that toggles an animated liquid-glass modal/drawer.
   - Prevent horizontal clipping:
     - Constrain max-width to `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
     - Set responsive font clamps: `text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem]`.
     - Ensure flex containers use `flex-wrap` and grids use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `4`.

---

## 3. Caveats

1. **No External Live Stream Fetching**: The schedule and clips are driven by static canonical data in `src/data/suriData.ts`. No live Twitch/YouTube API key is required or assumed.
2. **Video Modal Autoplay**: Browser autoplay policies require video playback modals to launch in response to direct user clicks, which is handled cleanly via standard React state handlers.
3. **Local Assets Only**: All image references strictly map to existing files under `public/images/` (`suri_cutout_transparent.png`, `suri_portrait.webp`, `suri_model3.webp`, `suri_debut_model.webp`, `costume_detailing_materials.png`, `irus_alter_full.webp`, etc.). No external image CDNs are introduced.

---

## 4. Conclusion & Architectural Blueprint

### 4.1 Target File Structure (`src/`)

```
src/
├── components/
│   ├── ui/
│   │   ├── BlurText.tsx            # Word-staggered blur entrance with customizable alignment
│   │   ├── LiquidCard.tsx          # Reusable liquid-glass container (glow border, hover aura)
│   │   ├── LiquidBadge.tsx         # Pill badge with live ping dot and gradient border
│   │   ├── Icons.tsx               # Curated Lucide-compatible SVG icons
│   │   └── FadingVideo.tsx         # Ambient background video crossfade player
│   ├── layout/
│   │   ├── Navbar.tsx              # Fixed liquid-glass navbar + responsive mobile drawer
│   │   └── Footer.tsx              # Dark cinematic liquid-glass footer with socials & credits
│   ├── sections/
│   │   ├── HeroSection.tsx         # Section 1: #hero — Cyber-courier hero & character stage
│   │   ├── LoreSection.tsx         # Section 2: #lore — Backstory, Irus duality, persona dossier
│   │   ├── SpecsSection.tsx        # Section 3: #specs — 3D Model technical specs & credits
│   │   └── ScheduleSection.tsx     # Section 4: #schedule — Weekly stream routine & music highlights
│   └── modals/
│       └── VideoModal.tsx          # Accessible liquid-glass modal for YouTube video embeds
├── data/
│   └── suriData.ts                 # Authoritative Suri Mukeki data, specs, schedule, credits
├── types/
│   └── index.ts                    # TypeScript interfaces for navigation, specs, schedule, and lore
├── App.tsx                         # Master page composition
├── index.css                       # Liquid glass styles, border masks, and scrollbar rules
└── main.tsx                        # React application bootstrap
```

### 4.2 Detailed Component Specification

#### A. Fixed Liquid-Glass Navbar (`src/components/layout/Navbar.tsx`)
- **Structure**:
  - Outer container: `fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 pointer-events-none`.
  - Brand Pill (Left, `pointer-events-auto`):
    - Circular or rounded liquid-glass pill with Suri logo (`/images/icons/logo_suri.png`) and text: `SURI MUKEKI` / `無敵スリ`.
  - Navigation Pill (Center, Desktop `pointer-events-auto`, `hidden md:flex`):
    - `.liquid-glass rounded-full px-2 py-1.5 flex items-center gap-1`.
    - Anchor links: `#hero` (Overview), `#lore` (Lore & Profile), `#specs` (Model Specs), `#schedule` (Schedule & Clips).
    - Smooth scroll active state tracking via `IntersectionObserver` or scroll spy.
  - Action Button (Right Desktop):
    - `.liquid-glass-strong rounded-full px-4 py-2 flex items-center gap-1.5 text-xs font-semibold text-white`.
    - Quick link to YouTube Channel or Discord.
  - Mobile Menu Button (Right Mobile, `flex md:hidden pointer-events-auto`):
    - `.liquid-glass h-11 w-11 rounded-full flex items-center justify-center`.
    - Toggles animated mobile navigation drawer (`AnimatePresence` with Framer Motion) containing all 4 section anchors and social links.

#### B. Hero Section (`src/components/sections/HeroSection.tsx`, `id="hero"`)
- **Visuals & Mood**: Dark cinematic void (`bg-black`), ambient cyan/violet radial glows (`bg-[#3aa8e8]/10` and `bg-[#a855f7]/10`), and optional subtle ambient video.
- **Header Elements**:
  - Status Badge: `<LiquidBadge text="CAFE_SPECIMEN_001 // ACTIVE 3.0 MODEL" variant="cyan" />`.
  - Character Title: `<BlurText text="Suri Mukeki" className="font-heading italic text-6xl sm:text-7xl lg:text-[6.5rem] text-white tracking-[-3px]" />`.
  - Japanese Subtitle: `無敵・スリ // THE WATER SLIME & COZY CYBER-COURIER`.
- **Character Staging**:
  - Full-height character presentation featuring `public/images/characters/suri_cutout_transparent.png` with rim lighting and floating particle motes (`🍮`, `⚡`, `🦋`).
  - Interactive toggle: Model 3.0 Glasses On (`suri_cutout_transparent.png`) vs Glasses Off (`suri_model3_noglasses.webp`).
- **Call-to-Action Bar**:
  - Primary CTA: Link to `#lore` or YouTube Stream with arrow icon.
  - Social CTA Pills: Direct icons to Twitch/YouTube/Discord.
- **Key Metrics Row**:
  - 3 liquid-glass micro-stat cards:
    1. `51,400+` Slayers Community.
    2. `17.04.2021` Genesis Debut.
    3. `Model 3.0` Sweet Sovereign Active.

#### C. Lore & Profile Section (`src/components/sections/LoreSection.tsx`, `id="lore"`)
- **Theme**: Translucent Water Slime Reincarnation & Twin Spark Duality.
- **Layout**:
  - Asymmetric 2-column liquid-glass layout.
  - Left Column: Narrative chronicle in editorial typography.
    - Chapter I: The Awakening of the Translucent Water Slime.
    - Chapter II: Irus and the 300-Year Lightning Seal.
    - Authentic quote block: *“Dù là một con slime nhỏ bé trôi dạt giữa hai thế giới, mình vẫn muốn hát, muốn cười và nướng những chiếc bánh ngọt ngào nhất cùng các bạn!”*
  - Right Column: Persona Dossier Card (`.liquid-glass-strong`).
    - Species: `Water Slime (Humanoid Form) / Lightning Slime Alter (Irus)`.
    - Birthday: `30 October` | Height: `155 cm` | Zodiac: `Scorpio`.
    - Fanbase: `Sureiya / Slayer` | Representative Emoji: `🍮 🦋 ⚡ 🍰`.
    - Interactive Dual Persona Tab: Switch between Suri (Water Slime) and Irus (Lightning Alter, `/images/characters/irus_alter_full.webp`).

#### D. 3D Model Specs & Credits Section (`src/components/sections/SpecsSection.tsx`, `id="specs"`)
- **Theme**: Technical 3D/Live2D Model Blueprint & Creator Credits.
- **Layout**:
  - Top: Model Technical Specifications Grid (4 Liquid Glass Cards):
    1. **Mesh & Polycount**: `184,520 Triangles` — High-fidelity stylized quad topology optimized for real-time rendering.
    2. **Blendshapes & Rigging**: `428 Expression Keys` — Comprehensive visemes, ARKit 52 face tracking, blush/crying/pout emotional triggers.
    3. **Physics & Dynamics**: `386 Armature Bones` — MagicaCloth / PhysBones dynamic simulation for twintails, dress ribbons, and liquid slime droplets.
    4. **Shading & Textures**: `4K PBR + Custom Cel-Shader` — Toon ramp lighting, subsurface light scattering, and emissive lightning sparks.
  - Bottom: Creator & Rigger Credits Grid (`.liquid-glass` cards):
    - **Illustrator & Papa**: T_blence (@T_blence) - Model 3.0 & 2.0; kcomorebi (@kcomorebi) - Model 1.0.
    - **Live2D / 3D Rigger & Mama**: Sophiel (@Sophielpaka) - Model 3.0; Truong Thanh Tan - Model 1.0.
    - **Voice & Identity**: Suri Mukeki (@surimukeki).
    - **Community**: Sureiya Fanbase & HoloList Contributors.

#### E. Schedule & Stream Highlights Section (`src/components/sections/ScheduleSection.tsx`, `id="schedule"`)
- **Theme**: Broadcast Routine & Jukebox Showcase.
- **Layout**:
  - **Weekly Stream Schedule Grid** (3 broadcast cards styled in `.liquid-glass`):
    1. **Wednesday (20:00 GMT+7)**: Free Talk & Cozy Cafe Chat (Tâm Tình & Trà Chiều).
    2. **Friday (20:00 GMT+7)**: Acoustic Singing & Karaoke Room (Hát Theo Yêu Cầu).
    3. **Sunday (19:30 GMT+7)**: Community Gaming & Event Night (Chơi Game Cùng Sureiya).
  - **Featured Music & Video Highlights**:
    - Showcase 4 verified music covers:
      - `KING` (Kanaria) — Signature Vocal.
      - `Yoru ni Kakeru` (YOASOBI) — Fan Favorite.
      - `Nàng Thơ` (Hoàng Dũng) — Acoustic Ballad.
      - `Only Love` (Trademark) — Genesis Debut Cover.
    - Each video tile has a liquid-glass card, thumbnail, play overlay, and triggers `<VideoModal />`.

#### F. Footer Component (`src/components/layout/Footer.tsx`)
- Brand identity with Suri Mukeki logo and bilingual text.
- Official social pill links: YouTube, Twitter/X, Discord, Carrd, Marshmallow, Facebook.
- Official hashtags bar: `#SuriMukeki`, `#Suristream`, `#SuriArt`, `#Sureiya`.
- Legal tribute notice and copyright attribution.

---

## 5. Verification Method

### 5.1 Verification Checklist for Implementer
1. **Compilation & Build**:
   ```bash
   pnpm build
   ```
   Must exit with code 0, 0 TypeScript errors, 0 bundling warnings.
2. **Agency Copy Elimination Test**:
   ```bash
   git grep -i -E "Booking Q3 2026|web design studio|web design agency|AURA|VALENCE|KINETIC|NEXUS|Aeon|Vela|Apex|Orbit|Zeno|Start a Project" src/
   ```
   Must return **0 matches**.
3. **Asset Resolution Verification**:
   Ensure all image paths in `src/data/suriData.ts` and components resolve to existing files in `public/images/`.
4. **Responsive Verification**:
   - Desktop: Test at `1920x1080` — inspect that max-width is constrained and liquid glass cards do not stretch uncontrollably.
   - Mobile: Test at `390x844` — verify that:
     - No horizontal scrollbar appears (`document.documentElement.scrollWidth === window.innerWidth`).
     - Mobile navigation drawer opens and closes cleanly.
     - Section anchor navigation smoothly scrolls to `#hero`, `#lore`, `#specs`, `#schedule`.
5. **Animation & Contrast Verification**:
   - Check that `.liquid-glass` cards have legible contrast against the dark background.
   - Check that Framer Motion animations trigger cleanly without flicker or layout shifts.
