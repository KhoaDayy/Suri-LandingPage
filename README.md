# Suri Mukeki — Official Character Showcase

An immersive, cinematic character showcase website for Vietnamese independent Virtual YouTuber **Suri Mukeki** (無敵・スリ).

Built with a **gothic editorial meets cinematic character storytelling** aesthetic, inspired by the presentation pacing, typography scale, and storytelling hierarchy of award-level VTuber showcases.

---

## 🌟 Key Features

- **Dual-Mode Hero Experience**: Switch seamlessly between **Showcase View** (full-height character artwork, atmospheric aura, and poetic entrance) and **Dossier View** (comprehensive technical datasheet).
- **Spectacles Toggle**: Preview Model 3.0 in both its signature intellectual glasses and glasses-free expressions.
- **Sacred Motifs & Forms**: Interactive inspection of Suri's primary models and avatars:
  - *Model 3.0 Sovereign Rebirth* (by T_blence & Sophiel)
  - *Irus — The Lightning Monarch* (Suri Alter)
  - *Water Slime Origin Matrix*
- **The Story Record**: Gothic manuscript presentation of Suri's lore across three narrative chapters with illuminated lead quotes, side-by-side archival portraits, and chapter navigation.
- **Evolution Timeline**: Chronological journey from her April 2021 pre-debut cover to reaching 51,400+ subscribers, with filterable categories (Debut, Models, Milestones, Music).
- **Character Wardrobe Gallery**: Stage viewer and thumbnail selector showcasing full-body models, alternative expressions, and technical model turnaround sheets with full-resolution lightbox zoom.
- **Lore Archive & Unresolved Inquiries**: Declassified confidential case files addressing enigmas (the note signed "W", elemental duality, the 300-year sealing) with transparent provenance badges.
- **Cover Sessions Theater**: Grid of verified song covers ("KING", "Yoru ni Kakeru", "Nàng Thơ", "Renai Circulation", "Only Love", "Bocca della Verità") with integrated YouTube modal playback.
- **Floating Archive Navigator**: Persistent scroll-spy side navigation tracking current reading progress.

---

## 🛠️ Tech Stack

- **Runtime & Toolchain**: [Node.js](https://nodejs.org/) (v18+) with **[pnpm](https://pnpm.io/)** (v11+)
- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom gothic editorial color and typography tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Cinzel`, `Cinzel Decorative`, `Cormorant Garamond`, `Oxanium`, `Noto Sans`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.0.0` or higher
- `pnpm` `v9.0.0` or higher (recommended)

### 1. Installation

Install all project dependencies using **pnpm**:

```bash
pnpm install
```

*(If prompted regarding approved builds on newer pnpm versions, run `pnpm approve-builds --all`)*

### 2. Development Server

Start the local Vite development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the showcase.

### 3. Production Build

To compile a minified, production-ready build:

```bash
pnpm build
```

The compiled assets will be placed in the `dist/` directory.

### 4. Preview Production Build

To test the compiled production build locally:

```bash
pnpm preview
```

---

## 📁 Project Structure

```text
Suri-LandingPage/
├── docs/
│   ├── REFERENCE_ANALYSIS.md     # Deep breakdown of reference site & architectural plan
│   ├── SOURCES.md                # Primary, directory, and community source catalog
│   ├── CONTENT-VERIFICATION.md   # Rigorous audit separating confirmed, community, and unresolved lore
│   ├── ASSET-MANIFEST.md         # Complete manifest of character assets and missing files
│   └── DESIGN-DECISIONS.md       # Rationale behind art direction, naming, and engineering
├── public/
│   └── images/
│       ├── characters/           # High-resolution character models & portraits
│       └── gallery/              # Model specification sheets & turnarounds
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Sticky navigation bar with mobile drawer
│   │   ├── SideNav.tsx           # Floating scroll-spy archive navigator
│   │   ├── Hero.tsx              # Dual-mode Hero (Showcase vs Dossier)
│   │   ├── SacredMotifs.tsx      # Identity & forms interactive showcase
│   │   ├── StoryRecord.tsx       # Gothic manuscript chapter reader
│   │   ├── EvolutionTimeline.tsx # Chronological milestones & model debuts
│   │   ├── CharacterGallery.tsx  # Wardrobe stage & lightbox gallery
│   │   ├── LoreArchive.tsx       # Declassified unverified inquiries & case files
│   │   ├── MusicSessions.tsx     # YouTube cover sessions with modal playback
│   │   ├── Footer.tsx            # Official links hub & artist credits
│   │   ├── LightboxModal.tsx     # Accessible full-screen zoomable image viewer
│   │   └── VideoModal.tsx        # YouTube video modal player
│   ├── data/
│   │   └── suriData.ts           # Centralized data store (profile, lore, songs, timeline)
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Custom scrollbars, glassmorphism, and animation tokens
│   └── main.tsx                  # React DOM mount point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Asset Replacement & Content Updates

### Adding or Replacing Character Art

1. Place your new transparent or background art into `public/images/characters/` or `public/images/gallery/`.
2. Open `src/data/suriData.ts` and update the relevant paths in `SURI_DATA.assets` or `GALLERY_DATA`.
3. Re-run `pnpm build` to compile the changes.

### Updating Lore & Biography

All textual content is centralized in `src/data/suriData.ts`:
- **Bio & Metrics**: Edit `SURI_DATA.profile` (Height, Birthday, Fanbase, etc.).
- **Story Chapters**: Edit `STORY_CHAPTERS` array.
- **Timeline Milestones**: Edit `TIMELINE_DATA` array.
- **Song Covers**: Edit `MUSIC_COVERS` array with new YouTube video IDs.
- **Case Files**: Edit `LORE_ARCHIVES` array.

---

## 🌐 Deployment Guidance

### Deploying to Vercel
1. Push this repository to GitHub / GitLab.
2. Import the project in [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**
4. Build Command: `pnpm build`
5. Output Directory: `dist`

### Deploying to Netlify
1. Connect repository in [Netlify](https://www.netlify.com/).
2. Build Command: `pnpm build`
3. Publish Directory: `dist`

---

## ⚖️ Credits & Disclaimer

- **Character & Brand**: **Suri Mukeki** (Independent VTuber)
- **Model 3.0 & 2.0 Art**: **T_blence** ([@T_blence](https://twitter.com/T_blence))
- **Model 3.0 Live2D Rig**: **Sophiel** ([@Sophielpaka](https://twitter.com/Sophielpaka))
- **Debut Model 1.0**: Design by **kcomorebi**, Rig by **Truong Thanh Tan**

*This character showcase is an unofficial fan tribute website crafted with deep admiration for Suri Mukeki and the Sureiya community. All artwork, music, and character likeness belong to their respective creators.*
