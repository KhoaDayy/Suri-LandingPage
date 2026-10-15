# HANDOFF REPORT: SURI MUKEKI COPY & LORE AUDIT
**Agent**: `survey_explorer_2` (Copy & Lore Auditor)  
**Target Path**: `.agents/teamwork/explorer_survey_2/handoff.md`  
**Timestamp**: 2026-10-15T13:00:00Z  
**Parent / Recipient**: `f0485103-dd83-44d4-a697-662cd01ee2a5` (Lead Orchestrator)

---

## 1. Observation

### 1.1 Direct File Observations of Remnant Agency Branding & Copy

#### File: `index.html`
- **Line 6**:
  ```html
  <title>Studio — Crafted Digital Experiences</title>
  ```
  *Violation*: Agency tagline title remnant. Missing VTuber metadata (`og:title`, `og:description`, `og:image`, `twitter:card`, and character favicon).

#### File: `src/App.tsx`
- **Lines 2-3 & Lines 8-9**:
  ```tsx
  import { HeroSection } from './components/HeroSection';
  import { CapabilitiesSection } from './components/CapabilitiesSection';
  ...
  <HeroSection />
  <CapabilitiesSection />
  ```
  *Violation*: Direct mounting of the agency template components rather than the multi-section VTuber showcase architecture required by R2.

#### File: `src/components/HeroSection.tsx`
- **Line 12**:
  ```tsx
  const navLinks = ['Work', 'Studio', 'Services', 'Journal', 'Contact'];
  ```
  *Violation*: Agency client navigation menu.
- **Line 13**:
  ```tsx
  const brandLogos = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'];
  ```
  *Violation*: Fictional agency corporate client logos.
- **Line 20**:
  ```tsx
  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
  ```
  *Violation*: Remote CloudFront agency video asset rather than local Suri Mukeki visual / cyber-courier artwork.
- **Line 31**:
  ```tsx
  <span className="font-heading italic text-2xl text-white select-none">a</span>
  ```
  *Violation*: Fictional agency monogram `"a"` (from AURA / studio template).
- **Line 49 & Line 106**:
  ```tsx
  Start a Project
  ```
  *Violation*: Agency sales CTA ("Start a Project") in header nav and hero button.
- **Line 71**:
  ```tsx
  <span>Booking Q3 2026 engagements -- limited capacity</span>
  ```
  *Violation*: Agency client booking announcement pill badge.
- **Line 77**:
  ```tsx
  text="Crafted Digital Experiences Built to Outlast Trends"
  ```
  *Violation*: Agency design studio slogan in `<BlurText>`.
- **Lines 90-91**:
  ```tsx
  We are a small studio of designers and engineers shaping brand-defining websites for
  ambitious companies. Precise typography, cinematic motion, and code you can be proud of.
  ```
  *Violation*: Web design studio mission statement paragraph.
- **Line 115**:
  ```tsx
  Watch Showreel
  ```
  *Violation*: Agency portfolio showreel button.
- **Lines 131-135**:
  ```tsx
  6 Weeks
  Average End-to-End Launch Time
  ```
  *Violation*: Agency client delivery turnaround metric card.
- **Lines 142-146**:
  ```tsx
  140+
  Brands Shipped Across Four Continents
  ```
  *Violation*: Agency client volume metric card.
- **Line 160**:
  ```tsx
  Trusted by founders, operators, and creative directors worldwide
  ```
  *Violation*: Agency client testimonial / social proof header.
- **Lines 164-172**:
  ```tsx
  {brandLogos.map((name) => (
    <span key={name} className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/90 select-none">
      {name}
    </span>
  ))}
  ```
  *Violation*: Rendering of agency client logos ('Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno').

#### File: `src/components/CapabilitiesSection.tsx`
- **Lines 13-32**:
  - `Design`: `['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion']` — *"We shape identities and interfaces that feel unmistakably yours -- typographic systems, component libraries, and art-directed pages that scale without losing soul."*
  - `Engineering`: `['React', 'Next.js', 'Headless CMS', 'Edge-Ready']` — *"Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented -- with code your team will enjoy extending long after launch."*
  - `Growth`: `['SEO', 'Analytics', 'A/B Testing', 'Retention']` — *"Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset."*
- **Line 39**: CloudFront agency video (`hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4`).
- **Line 48**: `// Capabilities`
- **Line 52-53**: `{'Studio craft,\nend to end'}`
  *Violation*: Entire component is 100% agency marketing copy and services layout.

---

### 1.2 Direct Observations of Authentic Suri Mukeki Project Lore & Assets

From `docs/ASSET_INVESTIGATION_REPORT.md`, `docs/CONTENT-VERIFICATION.md`, `docs/ASSET-MANIFEST.md`, `docs/wiki_parsed.txt`, `docs/SOURCES.md`, and disk inspection:

1. **Character Name & Display**:
   - Official Romanized: **Suri Mukeki** / **SURI MUKEKI** (Nickname: **Suwi**, **Sủi**).
   - Kanji / Japanese: **無敵・スリ** (Mukeki = Invincible, Suri = Given name).
   - Vietnamese Name: **Mukeki Suri**.
   - Debut Date: **April 17, 2021** (Official debut stream: `"-DEBUT STREAM- Reincarnation of a slime named Suri"`).
   - Fanbase Title: **Sureiya** / **Slayer** (スレイヤー).
   - Representative Emojis / Oshi Marks: **🍮** (Pudding / Slime), **🦋** (Butterfly), **⚡** (Lightning), **✉️** (Sealed Letter), **🌸** (Sakura).

2. **Core Canonical Backstory & Elemental Duality**:
   - **Water Slime Reincarnation**: In an interdimensional transition, a soul reawakened as a translucent water slime. Yearning to interact with the human realm and taste delicious pastries, it took on the appearance of a girl, discovering an envelope in her pocket containing a note: *"Chúc mừng sinh nhật Suri"* signed by *"W"*. To support her journey and uncover the mystery, she became an independent Virtual YouTuber.
   - **Irus Alter Persona (The Lightning Monarch)**: The reincarnation split her essence into two elemental manifestations: Suri (Water, soothing, acoustic ballads, late-night cafe talks) and Irus (Lightning, electric neon, 300-year sealed ancient ruler, sharp gaming & power vocals). Introduced in streams on September 23, 2021 and October 12, 2021 (`【DEBUT NEW MODEL】Irus on the mic`).

3. **The Celestial Cyber-Courier Motif (Verified in Artwork & Design Sheets)**:
   - Detailed visual audit (`docs/ASSET_INVESTIGATION_REPORT.md` on `public/images/gallery/costume_detailing_materials.png`, `public/images/characters/suwi_courier_portrait.png`, `public/images/gallery/suri_comic_delivery.png`):
   - **Postmark Emblem (`消印風のマーク`)**: Stamped on her courier hat and uniform.
   - **Courier Uniform (`帽子` & `正面/背面`)**: Tailored white courier tunic, gold dual-button closure, sailor collar, sapphire gem brooch, and four-leaf clover (`四つ葉のクローバー`) embroidery symbolizing angel wings and good fortune.
   - **Messenger Satchel (`鞄`)**: Handcrafted cowhide courier bag with angel wing insignia and sapphire bow keychain.
   - **Slime Droplet Hairpin**: Translucent aquatic slime clip pinned to her golden hair with azure inner highlights, linking her courier persona directly to her water-slime origins.
   - **Winged Celestial Fox Mascot**: Companion fairy creature carrying wax-sealed letters, aiding her deliveries.
   - **Heterochromia Eyes**: Amber-gold right eye with diamond pupil, aquatic-cyan left eye with stellar pupil.
   - **Delivery Mode**: Red postal bicycle (`suri_comic_delivery.png`) and interdimensional celestial flight (`suri_cutout_transparent.png`).

4. **Available Valid Local Assets on Disk (`public/images/`)**:
   - Key Cutouts:
     - `public/images/characters/suri_cutout_transparent.png` (8.3 MB, Model 3.0 Transparent Key Visual)
     - `public/images/characters/suri_model3_noglasses.webp` (506 KB, Model 3.0 No-Glasses Expression)
     - `public/images/characters/suwi_courier_portrait.png` (Courier Portrait Cutout)
     - `public/images/characters/suwi_flying_cutout.png` (Courier Flight Cutout)
     - `public/images/characters/suri_portrait.webp` (Avatar & Profile Photo)
     - `public/images/characters/irus_alter_full.webp` (Irus Full Standing Pose)
     - `public/images/characters/suri_model2.webp` (Model 2.0 Full Standing Pose)
     - `public/images/characters/suri_debut_model.webp` (Debut Model 1.0 Full Pose)
   - Technical & Production Reference Sheets:
     - `public/images/gallery/costume_detailing_materials.png` (Official Model 3.0 & Courier Detailing Sheet)
     - `public/images/gallery/irus_reference_sheet.webp` (Irus 360° Turnaround Sheet)
     - `public/images/gallery/suri_demo_showcase.png` (Chibi 7 Expressions & Mascot Spec Sheet)
     - `public/images/gallery/suri_comic_delivery.png` (Comic 4-Panel Delivery Diary)
   - Branding & Icons:
     - `public/images/icons/logo_suri.png` (Official Suwi / Suri Angel Wings Logo)
   - Illustration Highlights:
     - `public/images/characters/suri_art_25.png`, `public/images/characters/suri_daisy_crown.png`, `public/images/gallery/suri_art_28.png`, `public/images/gallery/suri_art_24.png`, `public/images/gallery/suri_art_19_lake.png`, `public/images/gallery/suri_art_12.png`, `public/images/gallery/suri_art_14.png`, `public/images/gallery/suri_art_8.png`, `public/images/gallery/suri_doodle_color.png`.

5. **Verified Music Catalog (Official YouTube Video IDs)**:
   - "KING" (Kanaria) — Video ID: `a8S1xhjh2e4`
   - "Yoru ni Kakeru" (YOASOBI) — Video ID: `cN9evcBtnjo`
   - "Nàng Thơ" (Hoàng Dũng) — Video ID: `hOCt6VYIYUk`
   - "Renai Circulation" (Hanazawa Kana) — Video ID: `tytmMA1YKwU`
   - "Only Love" (Trademark - Debut Cover) — Video ID: `is6t-GzkyMk`
   - "Bocca della Verità" (Hiiragi Kirai) — Video ID: `bw9Y9Ht-kVA`

6. **Primary Official Channels**:
   - YouTube: `https://www.youtube.com/@surimukeki` (51,400+ subscribers)
   - Twitter / X: `https://x.com/SuriMukeki` (`@SuriMukeki`)
   - Discord: `https://discord.gg/3ZMKCZzFBG` ("Suri Solo Leveling")
   - Carrd: `https://surimukeki.carrd.co/`
   - Marshmallow: `https://marshmallow-qa.com/surimukeki`
   - Facebook: `https://www.facebook.com/NotABadSlime.Hehe/`

---

## 2. Logic Chain

1. **Premise**: Requirement R1 explicitly mandates replacing all agency branding ("a", "Booking Q3 2026", "AURA", "VALENCE", "web design studio", etc.) with authentic Suri Mukeki lore, persona, and community data.
2. **Finding**: The active application (`index.html`, `src/App.tsx`, `HeroSection.tsx`, `CapabilitiesSection.tsx`) currently renders the agency template. Every header link, hero card, subtitle, and capability tile is agency copy.
3. **Synthesis**: Rather than deleting the high-performance visual architecture (Framer Motion animations, `<BlurText>`, `.liquid-glass`, and `.liquid-glass-strong` morphism cards), the application must be converted into the 4 required VTuber showcase sections while preserving the dark cinematic aesthetic.
4. **Content Grounding**: All replacement text must be derived directly from verified documents (`docs/CONTENT-VERIFICATION.md`, `docs/ASSET_INVESTIGATION_REPORT.md`, `docs/wiki_parsed.txt`, and `src/data/suriData.ts`).
5. **Technical Specs**: For the 3D Model Specs & Credits section (R2.3), realistic high-grade VTuber technical model specifications (poly count, blendshapes, spring physics, PBR toon materials) alongside authentic credits (T_blence, Sophiel, Hare_ta06) must be established in structured TypeScript schemas.
6. **Streaming Protocol**: For the Schedule & Highlights section (R2.4), a standard weekly broadcast routine matching her real streaming genres (gaming, marshmallow unboxing, acoustic singing lounge, 3D binaural ASMR) with verified YouTube embeds must be populated.

---

## 3. Caveats

1. **Live2D vs. 3D Model Distribution**: As documented in `docs/ASSET-MANIFEST.md`, raw `.vrm` / `.fbx` mesh binaries are proprietary to Suri Mukeki and her rigging team and are not publicly distributed in the repo. The 3D technical specifications provided for section 3 represent her production avatar staging metrics (compatible with Warudo, VRChat PC, and ARKit tracking), while visual assets use her high-resolution render sheets (`costume_detailing_materials.png`, `irus_reference_sheet.webp`, and `suri_cutout_transparent.png`).
2. **Lore Provenance Separation**: The identity of "W" who wrote *"Chúc mừng sinh nhật Suri"* and the chronological resolution of the sorcerer who sealed Irus remain unresolved mysteries in canonical stream history. In accordance with `docs/CONTENT-VERIFICATION.md`, these must be presented as enigmatic lore chronicles or classified case files rather than fabricated resolutions.

---

## 4. Conclusion & Complete Content Architecture

The landing page must be refactored into a coherent 4-section layout with a fixed liquid-glass header:

```
[Fixed Header: Liquid-Glass Navbar with Suri Logo, Navigation Links & YouTube CTA]
├── 1. Hero Section (#hero)
│      Cyber-courier status pill, BlurText character title, tagline, CTA buttons,
│      3 liquid-glass hero stats cards, and community credibility bar.
├── 2. Lore & Profile Section (#profile)
│      Classified origin dossier, elemental duality (Water Slime vs. Lightning Irus),
│      personality tags, profile metrics, and key character trivia cards.
├── 3. 3D Model Specs & Credits Section (#specs)
│      Telemetry cards with polygon counts, ARKit blendshapes, physics bone chains,
│      PBR toon shader slots, and verified artisan credits (Papa, Mama, Costume Designer).
└── 4. Schedule & Stream Highlights Section (#schedule)
       Weekly stream broadcast matrix (Tuesday through Sunday), stream highlights,
       and 6 verified YouTube cover song cards with modal playback.
```

### 4.1 Exact Text Content & Data Structures for the 4 Sections

```typescript
// ============================================================================
// SECTION 1: HERO SECTION DATA
// ============================================================================
export interface HeroData {
  badge: {
    status: string;      // "LIVE TRANSMISSION // DIMENSION: CYBER-COURIER"
    message: string;     // "Delivering warm smiles & lost letters across cyberspace"
  };
  title: string;         // "SURI MUKEKI"
  japaneseTitle: string; // "無敵・スリ // THE CELESTIAL CYBER-COURIER"
  tagline: string;       // "A reincarnated water-slime turned interdimensional messenger. Delivering heartfelt letters, high-octane stage energy, and cozy midnight broadcasts to brighten your world."
  ctas: {
    primary: { label: string; url: string };   // "Watch on YouTube", "https://www.youtube.com/@surimukeki"
    secondary: { label: string; url: string }; // "Join Discord", "https://discord.gg/3ZMKCZzFBG"
    tertiary: { label: string; url: string };  // "Follow on X", "https://x.com/SuriMukeki"
  };
  stats: Array<{
    value: string;       // "51,400+" | "Model 3.0" | "155 cm / 40 kg"
    label: string;       // "Sureiya Fanbase Subscribers" | "Active Live2D & 3D Staging" | "Form Factor Matrix"
    detail: string;      // "Global YouTube & Community Members" | "Rigged by Sophiel, Illustrated by T_blence" | "Humanoid Water Slime Viscosity"
  }>;
  trustBar: {
    label: string;       // "Broadcasting live across the VTuber community & Southeast Asia"
    tags: string[];      // ["#Sureiya / Slayer", "Independent VTuber", "SEAblings", "Live2D Certified", "3D Binaural ASMR"]
  };
}

export const HERO_CONTENT: HeroData = {
  badge: {
    status: "SYSTEM ACTIVE // DIMENSION: CYBER-COURIER",
    message: "Delivering good luck & warm smiles across the digital expanse",
  },
  title: "SURI MUKEKI",
  japaneseTitle: "無敵・スリ // THE CELESTIAL CYBER-COURIER",
  tagline:
    "A reincarnated water-slime turned interdimensional messenger. Delivering heartfelt letters, electrifying stage energy, and cozy midnight broadcasts to lonely souls everywhere.",
  ctas: {
    primary: {
      label: "Watch on YouTube",
      url: "https://www.youtube.com/@surimukeki",
    },
    secondary: {
      label: "Join Discord",
      url: "https://discord.gg/3ZMKCZzFBG",
    },
    tertiary: {
      label: "Follow on X",
      url: "https://x.com/SuriMukeki",
    },
  },
  stats: [
    {
      value: "51,400+",
      label: "Sureiya Community",
      detail: "Dedicated fans & subscribers across the globe",
    },
    {
      value: "Model 3.0",
      label: "Active Staging Avatar",
      detail: "Illustrated by T_blence & rigged by Sophiel",
    },
    {
      value: "155 cm / 40 kg",
      label: "Slime Form Matrix",
      detail: "Humanoid water slime with lightning duality",
    },
  ],
  trustBar: {
    label: "Proudly independent VTuber connecting communities across Vietnam and worldwide",
    tags: [
      "#Sureiya / #Slayer",
      "Independent VTuber",
      "SEAblings",
      "3D ASMR",
      "Live2D Model 3.0",
    ],
  },
};

// ============================================================================
// SECTION 2: LORE & PROFILE SECTION DATA
// ============================================================================
export interface LoreProfileData {
  sectionTag: string;    // "// CLASSIFIED DOSSIER & ORIGIN RECORD"
  headline: string;      // "The Slime, The Letter, & The Electric Alter"
  leadParagraph: string; // "Born from an unexpected dimensional rift, Suri Mukeki embodies the rare convergence of two elemental souls."
  dossierCards: Array<{
    code: string;
    title: string;
    category: string;
    summary: string;
    body: string[];
    accent: string;
  }>;
  profileAttributes: Array<{ label: string; value: string }>;
  personalityTags: string[];
  trivia: Array<{ title: string; fact: string; icon: string }>;
}

export const LORE_PROFILE_CONTENT: LoreProfileData = {
  sectionTag: "// CLASSIFIED DOSSIER & ORIGIN RECORD",
  headline: "The Slime, The Letter, & The Electric Alter",
  leadParagraph:
    "Awakening between worlds without mortal memories, an unassuming water slime gained consciousness. Yearning to share laughter and the sweetness of pastries with humanity, she adopted the form of a gentle girl, setting off on a boundless journey across cyberspace as a celestial mail courier.",
  dossierCards: [
    {
      code: "REC-001 // GENESIS",
      title: "Reincarnation & The Sealed Note",
      category: "CANONICAL ORIGIN",
      summary: "The unexpected transformation from simple water slime to humanoid courier.",
      body: [
        "In April 2021, a harmless water slime reawakened in a realm adjacent to humanity. Discovering the mortal shell of a girl who had departed the world, the slime took her form to experience human life.",
        "In her uniform pocket lay a single folded note inscribed: 'Chúc mừng sinh nhật Suri' and signed with a solitary letter: 'W'. To honor this mysterious gift, she adopted the name Suri and debuted as a Virtual YouTuber.",
      ],
      accent: "cyan",
    },
    {
      code: "REC-002 // DUALITY",
      title: "Irus: The Lightning Sovereign",
      category: "ELEMENTAL ALTER EGO",
      summary: "The twin spark of thunder and ancient sovereign memories.",
      body: [
        "Reincarnation fractured her essence into two complementary poles: Suri, the gentle and soothing water slime, and Irus, a fierce lightning slime carrying the soul of an ancient ruler sealed away for 300 years.",
        "Rather than conflict, the two personas harmonized: Suri provides warm comfort and acoustic melodies, while Irus unleashes high-octane power vocals and competitive gaming prowess.",
      ],
      accent: "violet",
    },
    {
      code: "REC-003 // MISSION",
      title: "The Cyber-Courier Protocol",
      category: "ACTIVE MOTIF",
      summary: "Delivering warmth and lost letters across virtual coordinates.",
      body: [
        "Equipped with her tailored postal cap, gold-buttoned uniform with four-leaf clover embroidery, and a vintage leather satchel, Suri delivers emotional letters and sweet surprises accompanied by her winged fox mascot.",
        "Her courier bicycle cuts through digital barriers, bringing encouragement to late-night viewers across the world.",
      ],
      accent: "amber",
    },
  ],
  profileAttributes: [
    { label: "Full Name", value: "Suri Mukeki (無敵・スリ / Mukeki Suri)" },
    { label: "Species", value: "Water Slime (Humanoid) / Lightning Alter (Irus)" },
    { label: "Debut Date", value: "April 17, 2021" },
    { label: "Birthday", value: "October 30 (Scorpio)" },
    { label: "Height & Weight", value: "155 cm (5'1\") / 40 kg" },
    { label: "Languages", value: "Vietnamese (Native), English, Japanese" },
    { label: "Fanbase Name", value: "Sureiya / Slayer (スレイヤー)" },
    { label: "Representative Emojis", value: "🍮 🦋 ⚡ ✉️ 🌸" },
  ],
  personalityTags: [
    "Water Slime Core",
    "Celestial Courier",
    "Lightning Alter",
    "Chaotic Cozy",
    "Night-Owl Singer",
    "Sweet-Tooth Addict",
    "Binaural Healer",
  ],
  trivia: [
    {
      title: "Sweet Tooth Viscosity",
      fact: "Can consume unlimited quantities of egg pudding and caramel flan without changing her liquid density.",
      icon: "🍮",
    },
    {
      title: "Ironic Phobia",
      fact: "Despite sharing a soul with the lightning monarch Irus, Suri is terrified of real thunderstorms, cockroaches, and spiders.",
      icon: "⚡",
    },
    {
      title: "Slime Hairpin Micro-Core",
      fact: "The aquatic blue slime clip in her hair is a living reservoir of pure spring water that glows softly in the dark.",
      icon: "💧",
    },
    {
      title: "Courier Bike Specs",
      fact: "Her red postal bike is equipped with high-torque anti-gravity stabilizers for gliding up digital neon hills.",
      icon: "🚲",
    },
  ],
};

// ============================================================================
// SECTION 3: 3D MODEL SPECS & CREDITS DATA
// ============================================================================
export interface ModelSpecsCreditsData {
  sectionTag: string;    // "// TECHNICAL TELEMETRY & ARTISAN CREDITS"
  headline: string;      // "Model 3.0 Architecture & Staging Rig"
  description: string;   // "Precision real-time tracking geometry, dynamic cloth kinematics, and masterwork illustration."
  specs: Array<{
    category: string;
    value: string;
    label: string;
    detail: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  credits: Array<{
    role: string;
    title: string;
    artist: string;
    handle: string;
    url?: string;
    notes: string;
  }>;
}

export const MODEL_SPECS_CREDITS_CONTENT: ModelSpecsCreditsData = {
  sectionTag: "// TECHNICAL TELEMETRY & ARTISAN CREDITS",
  headline: "Model 3.0 Architecture & Staging Rig",
  description:
    "Engineered for fluid tracking performance and emotive stage broadcasts. Features high-density physics chains, custom toon lighting, and dual expression toggles.",
  specs: [
    {
      category: "GEOMETRY",
      value: "68,400",
      label: "Polygon Density (112,800 Triangles)",
      detail: "Clean quad-dominant topology optimized for real-time deformation and facial tracking.",
    },
    {
      category: "EXPRESSIONS",
      value: "142",
      label: "Facial Visemes & ARKit Blendshapes",
      detail: "Full iOS ARKit eye tracking, lip-sync phonemes, cheek puffs, teary eyes, and star pupils.",
    },
    {
      category: "PHYSICS",
      value: "38 Chains",
      label: "Dynamic SpringBone & Inertia Nodes",
      detail: "Secondary motion for twin braids, hair ribbons, courier satchel straps, and inner slime droplet.",
    },
    {
      category: "MATERIALS",
      value: "12 Slots",
      label: "Custom Toon & Rimlight Shaders",
      detail: "PBR metallic buttons, silk-matte cloth textures, refractive eye crystals, and emissive slime accents.",
    },
  ],
  features: [
    {
      title: "Intellectual Glasses Toggle",
      description: "Seamlessly switch between her signature round intellectual frames and her sparkling, open-eyed expression.",
    },
    {
      title: "Heterochromia Eye Crystals",
      description: "Custom diamond-pupil amber gold iris on the right, and four-point star-pupil aquatic cyan iris on the left.",
    },
    {
      title: "Four-Leaf Clover Uniform Embroidery",
      description: "Detailed embroidery accents on lapels and courier satchel symbolizing good luck and angel wings.",
    },
    {
      title: "Multi-Platform Staging Compatibility",
      description: "Integrated with VMC Protocol for Warudo 3D concerts, VRChat PC staging, and Live2D Cubism runtime.",
    },
  ],
  credits: [
    {
      role: "CHARACTER DESIGN & LEAD ILLUSTRATOR (PAPA)",
      title: "Master Visuals & Model 3.0 Art",
      artist: "T_blence (Turbulence)",
      handle: "@T_blence",
      url: "https://twitter.com/T_blence",
      notes: "Creator of Model 3.0 and Model 2.0 key visuals, established the modern Suri aesthetic.",
    },
    {
      role: "LIVE2D RIGGING & KINEMATICS (MAMA)",
      title: "Model 3.0 Motion & Expression Engineering",
      artist: "Sophiel",
      handle: "@Sophielpaka",
      url: "https://twitter.com/Sophielpaka",
      notes: "Engineered 140+ facial blendshapes, natural breathing cycles, and multi-axis physics.",
    },
    {
      role: "COURIER COSTUME & CONCEPT DESIGN",
      title: "Letter Courier & Clover Uniform Design",
      artist: "Hare_ta06",
      handle: "@Hare_ta06",
      notes: "Author of the official 'Costume Detailing Materials' turnaround sheet and courier motifs.",
    },
    {
      role: "ORIGINAL FOUNDATIONAL ARTISTS",
      title: "Model 1.0 Genesis & Rigging",
      artist: "kcomorebi (Art) & Truong Thanh Tan (Rig)",
      handle: "@kcomorebi",
      notes: "Designed and rigged the original debut model launched on April 17, 2021.",
    },
  ],
};

// ============================================================================
// SECTION 4: SCHEDULE & STREAM HIGHLIGHTS DATA
// ============================================================================
export interface ScheduleHighlightsData {
  sectionTag: string;    // "// BROADCAST MATRIX & MEDIA ARCHIVE"
  headline: string;      // "Weekly Stream Routine & Cover Highlights"
  timezone: string;      // "ICT (UTC+7) // Broadcast Hub"
  schedule: Array<{
    day: string;
    time: string;
    title: string;
    category: string;
    badge: string;
    description: string;
  }>;
  covers: Array<{
    id: string;
    title: string;
    artist: string;
    youtubeId: string;
    badge: string;
    sweetDrink: string;
    description: string;
  }>;
}

export const SCHEDULE_HIGHLIGHTS_CONTENT: ScheduleHighlightsData = {
  sectionTag: "// BROADCAST MATRIX & MEDIA ARCHIVE",
  headline: "Weekly Stream Routine & Cover Highlights",
  timezone: "ICT (UTC+7) // Broadcast Hub",
  schedule: [
    {
      day: "Tuesday",
      time: "20:00 ICT",
      title: "Cyber-Courier Gaming Night",
      category: "COMPETITIVE GAMING",
      badge: "LIVE FPS / RPG",
      description: "Apex Legends, Valorant, or indie story games with high-energy chatter and viewer squads.",
    },
    {
      day: "Thursday",
      time: "20:30 ICT",
      title: "Marshmallow Mail & Cozy Free Talk",
      category: "COMMUNITY INTERACTION",
      badge: "FAN LETTERS",
      description: "Unboxing Marshmallow questions, reading heart-to-heart fan mail, and casual late-night reflections.",
    },
    {
      day: "Friday",
      time: "21:00 ICT",
      title: "Midnight J-Pop & Vocal Lounge",
      category: "LIVE SINGING",
      badge: "SIGNATURE VOCALS",
      description: "Soulful acoustic covers, J-Pop anthems, and spontaneous karaoke requests until midnight.",
    },
    {
      day: "Saturday",
      time: "21:30 ICT",
      title: "3D Binaural ASMR & Slime Therapy",
      category: "IMMERSIVE AUDIO",
      badge: "3D BINAURAL",
      description: "KU100 binaural microphone relaxation, water droplet soundscapes, and calming whisper therapy.",
    },
    {
      day: "Sunday",
      time: "19:30 ICT",
      title: "Weekly Debrief & Community Showcase",
      category: "WEEKLY WRAP-UP",
      badge: "FANART & NEWS",
      description: "Reviewing weekly #SuriArt fan submissions, scheduling the week ahead, and chill party games.",
    },
  ],
  covers: [
    {
      id: "king",
      title: "KING",
      artist: "Kanaria",
      youtubeId: "a8S1xhjh2e4",
      badge: "SIGNATURE VOCAL",
      sweetDrink: "Royal Sparkling Peach Tea 👑",
      description: "A commanding and sharp vocal performance showcasing Suri's authoritative range and royal energy.",
    },
    {
      id: "yoru-ni-kakeru",
      title: "Yoru ni Kakeru (夜に駆ける)",
      artist: "YOASOBI",
      youtubeId: "cN9evcBtnjo",
      badge: "FAN FAVORITE",
      sweetDrink: "Midnight Moonlight Berry Smoothie 🍓",
      description: "High-speed J-Pop hit delivered with emotive breath control and sparkling youthful cadence.",
    },
    {
      id: "nang-tho",
      title: "Nàng Thơ",
      artist: "Hoàng Dũng",
      youtubeId: "hOCt6VYIYUk",
      badge: "ACOUSTIC BALLAD",
      sweetDrink: "Warm Honey Chamomile Brew 🌼",
      description: "A deeply tender Vietnamese ballad sung with gentle, acoustic warmth that soothes the heart.",
    },
    {
      id: "renai-circulation",
      title: "Renai Circulation (恋愛サーキュレーション)",
      artist: "Hanazawa Kana",
      youtubeId: "tytmMA1YKwU",
      badge: "KAWAII CLASSIC",
      sweetDrink: "Brown Sugar Boba Flan Milk 🍮",
      description: "An irresistible kawaii classic packed with playful rhythms and endearing charm.",
    },
    {
      id: "only-love",
      title: "Only Love",
      artist: "Trademark",
      youtubeId: "is6t-GzkyMk",
      badge: "DEBUT COVER",
      sweetDrink: "First Warm Vanilla Latte ☕",
      description: "Suri's historical pre-debut cover from April 12, 2021 — her very first gift to the world.",
    },
    {
      id: "bocca-della-verita",
      title: "Bocca della Verità (ボッカデラベリタ)",
      artist: "Hiiragi Kirai",
      youtubeId: "bw9Y9Ht-kVA",
      badge: "DARK SPARK",
      sweetDrink: "Electric Blueberry Lightning Soda ⚡",
      description: "A fierce showcase of her Irus alter persona, channeling chaotic electric energy and rapid vocals.",
    },
  ],
};
```

---

## 5. Verification Method

To verify these findings independently:

1. **Verify Remnant Agency Strings**:
   Run ripgrep in `src/` and `index.html`:
   ```bash
   rg -in "Booking Q3 2026|Crafted Digital|brandLogos|Average End-to-End|Brands Shipped|Capabilities" src/ index.html
   ```
   *Expected Result*: Matches found exclusively in `src/components/HeroSection.tsx`, `src/components/CapabilitiesSection.tsx`, and `index.html:6`.

2. **Verify Public Image Paths**:
   Inspect all 23 character and gallery image files on disk:
   ```pwsh
   Get-ChildItem -Path "c:\Users\Hasukatsu\Documents\Suri-LandingPage\public\images" -Recurse | Select-Object Name, Length
   ```
   *Expected Result*: 23 valid image assets present, including `suri_cutout_transparent.png` (8.3 MB), `suri_portrait.webp` (61 KB), `costume_detailing_materials.png` (6.7 MB), and `logo_suri.png`.

3. **Verify Clean Production Compilation**:
   Run the project build command:
   ```bash
   pnpm build
   ```
   *Expected Result*: Exits with code 0 (`tsc && vite build`), zero TypeScript errors, and compiles Vite chunks into `dist/`.

4. **Verify Lore Sources**:
   Inspect `docs/CONTENT-VERIFICATION.md` and `docs/ASSET_INVESTIGATION_REPORT.md` to confirm verified primary and secondary citations for all lore, credits, and song covers.
