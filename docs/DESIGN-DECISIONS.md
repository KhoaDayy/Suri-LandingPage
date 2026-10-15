# DESIGN DECISIONS & ARCHITECTURAL RATIONALE: SURI MUKEKI SHOWCASE

This document details the creative, editorial, and technical decisions made during the design and implementation of the Suri Mukeki showcase website.

---

## 1. Creative Direction: "Interactive Bento & Dynamic Storybook"

Following user guidance to develop a tailored, high-engagement design for each section ("Interactive Bento & Dynamic Storybook: Mỗi mục là một layout độc đáo"), every section on the website was rebuilt with a distinct, bespoke layout and interaction pattern:

### Section-by-Section Architectural Breakdown

1. **Hero (`Hero.tsx`) — Cinematic Full-Height Showcase**:
   - **Visuals**: Full-screen presentation featuring the transparent master cutout of Suri Model 3.0 with multi-tone pastel auras and floating food stickers (`🍮`, `🦋`, `🌸`, `🍰`).
   - **Interactivity**: Live **Glasses Toggle** (`👓 Đeo kính tri thức` / `🌸 Mắt biếc không kính`) dynamically swapping character cutouts; **VIP Card Modal** displaying debut statistics, zodiac, height, fanbase, and favorite treats.

2. **Section 01 (`SacredMotifs.tsx`) — Bento Tasting Menu (Bento Grid)**:
   - **Layout**: Asymmetrical 12-column Bento Grid.
   - **Tile 1 (7 cols)**: Model 3.0 Sweet Sovereign (Large hero tile with 16:9 showcase, taro & caramel theme, zoom trigger).
   - **Tile 2 (5 cols)**: Daisy Crown & Spring Meadow (Tall vertical tile, chamomile honey tea theme).
   - **Tile 3 (6 cols)**: Irus Alter (Wide electric tile, sparkling berry soda theme, energetic dual-element contrast).
   - **Tile 4 (6 cols)**: Chibi Slime Doodles (Wide playful tile, custard pudding theme, emote stickers).

3. **Section 02 (`StoryRecord.tsx`) — Dual-Page Open Storybook**:
   - **Layout**: Classical open manuscript layout with central book spine shadow.
   - **Left Spread**: Full illustration page with postal stamp framing, chapter roman numerals, and source provenance stamps.
   - **Right Spread**: Narrative prose page with styled blockquotes for lead quotes, typography hierarchy, and interactive page-flipping buttons (`← Tập Trước`, `Tập Kế Tiếp →`).
   - **Bookmarks**: Top edge features hanging ribbon bookmarks allowing instant navigation between Chapter I, II, and III.

4. **Section 03 (`EvolutionTimeline.tsx`) — Horizontal Memory Roadmap**:
   - **Layout**: Horizontal scrollable track (`scroll-smooth` with snap points) representing a timeline journey from 2021 to 2026+.
   - **Stations**: Memory cards with emoji pins (`🍮`, `⚡`, `🎀`, `👑`, `✨`, `🎉`), date badges, category filters, and verified stream citations.
   - **Navigation**: Dual directional scroll buttons (`<` and `>`) enabling smooth horizontal gliding across devices.

5. **Section 04 (`CharacterGallery.tsx`) — Bento Art Mosaic**:
   - **Layout**: Responsive mosaic inspired by Apple/Behance portfolio grids, featuring dynamic column spans (hero 16:9 master visual tile + square turnaround and doodle tiles).
   - **Interactivity**: Instant filter pills (`Tất cả`, `Minh họa chính thức`, `Bản vẽ thiết kế`, `Chibi`, `Irus`), hover zoom preview, and full-screen modal zoom.

6. **Section 05 (`LoreArchive.tsx`) — Tabbed Classified Dossier Folder**:
   - **Layout**: Realistic Manila dossier folder with physical folder tabs (`Folder` and `FolderOpen` icons).
   - **Aesthetics**: Red wax seal/stamp (`CONFIDENTIAL / DOSSIER`), typewriter-inspired archival body, and highlighted investigation notes.
   - **Integrity**: Rigorous provenance alert banner explicitly categorizing lore into primary canon, community-reported legends, and unresolved mysteries.

7. **Section 06 (`MusicSessions.tsx`) — Vinyl Jukebox Lounge**:
   - **Layout**: Split layout pairing a physical vinyl record deck on the left with an interactive tracklist menu on the right.
   - **Interactivity**: 12-bar CSS audio visualizer, spinning vinyl disc (`animate-spin-slow`) displaying center album art, signature sweet drink pairings, and instant YouTube modal player.

8. **Section 07 (`Footer.tsx`) — Slime Cafe Counter & Guestbook**:
   - **Layout**: Cafe reception counter featuring official social buttons, community hashtags (`#SuriMukeki`, `#Suristream`, `#SuriArt`, `#Sureiya`), and complete creator credits.

---

## 2. Authentic Asset Integration

All key visuals were directly sourced from the creator's authentic artwork archive (`C:\Users\Hasukatsu\Downloads\Compressed\Sủi Artwork`):
- **Official Custom Logo**: `public/images/icons/logo_suri.png` (from `logo suwi.png`).
- **Transparent Model 3.0 Master Cutout**: `public/images/characters/suri_cutout_transparent.png` (8.3 MB cutout from `25 ko nen.png`).
- **Daisy Crown Spring Meadow Art**: `public/images/characters/suri_daisy_crown.png` (6.1 MB).
- **Costume Detailing & Materials Turnaround**: `public/images/gallery/costume_detailing_materials.png` (6.7 MB design sheet).
- **Chibi & Doodle Emote Collection**: `public/images/gallery/suri_doodle_color.png` (2.9 MB).
- **Full Art Series**: `suri_art_25.png`, `suri_art_28.png`, `suri_art_24.png`, `suri_art_12.png`, etc.

---

## 3. Naming & Brand Discipline

- **Strict Name Order**: The character's name is rendered exclusively as **Suri Mukeki** or **SURI MUKEKI** across the entire codebase, headings, and metadata.
- **Family / Given Name Clarification**: Suri is the given name and Mukeki is the family name. The website enforces the international name ordering. Reversal to "Mukeki Suri" was strictly rejected in branding.
- **Irus Nomenclature**: Verified from official YouTube broadcast titles (`[Free talk] Hé lộ lore mới của Suri/Irus` and `【DEBUT NEW MODEL】Irus on the mic`) that the official spelling is **Irus**, never "Iris".

---

## 4. Lore Provenance Architecture

To prevent misinformation while still honoring community history, narrative content was segregated into three distinct tiers:

1. **Canonical Primary Canon**:
   - Stream titles, debut dates, model creators (T_blence, Sophiel, Turbulence, kcomorebi, Truong Thanh Tan), and official songs.
   - Integrated as definitive statements across the Hero, Bento Menu, and Memory Roadmap.
2. **Documented Lore & Stream Narratives**:
   - The water-slime reincarnation, the adoption of human form, and the coexistence with the lightning alter ego Irus.
   - Presented in high-editorial prose within `StoryRecord.tsx` with a visible provenance badge (`TƯ LIỆU LORE GHI NHẬN`).
3. **Sealed Inquiries (Archival Case Files)**:
   - The note signed "W", the 300-year sealing of the monarch, and the missing sorcerer.
   - Placed inside `LoreArchive.tsx` with explicit classification stamps (`UNRESOLVED`, `COMMUNITY-REPORTED`) and investigative notes, explicitly stating that no fake resolution has been invented.

---

## 5. Technical Stack & Engineering Choices

- **Package Manager**: **`pnpm`** (v11.18.0) prioritized and configured with approved build dependencies.
- **Framework**: **React 18** with **TypeScript** and **Vite 6** for fast hot module replacement, strict type checking, and optimized production chunking (`256 KB` JS bundle, `47 KB` CSS bundle).
- **Styling**: **Tailwind CSS 3** with custom theme tokens, custom animations (`spin-slow`, `float-soft`), and custom scrollbars.
- **Icons**: **`lucide-react`** for crisp, scalable vectors with tree-shaken imports.
- **State & Navigation**:
  - `IntersectionObserver` drives the floating `SideNav` to track active sections seamlessly without scroll hijacking.
  - Accessible modal behaviors for full-screen image inspection (`LightboxModal`) and video playback (`VideoModal`).
