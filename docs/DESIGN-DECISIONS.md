# DESIGN DECISIONS & ARCHITECTURAL RATIONALE: SURI MUKEKI SHOWCASE

This document details the creative, editorial, and technical decisions made during the design and implementation of the Suri Mukeki showcase website.

---

## 1. Creative Direction: "Cozy Slime Cafe & Playful Kawaii"

Following user guidance to adopt an authentic, distinctive, and heartwarming style ("thiết kế phong cách khác đi giúp tôi"), the website's design was completely transformed from a cold gothic editorial into **"Cozy Slime Cafe & Playful Kawaii"** — celebrating Suri's true nature as a lovable water slime running a warm cafe and tea salon for her community:

### Visual Language & Palette
- **Warm Cream & Ivory Canvas**: `#FAF7F2`, `#FAF5EE`, `#FBF8F3` create an inviting, comfortable, paper/cafe-like reading experience without harsh stark white or dark gloom.
- **Taro Violet (`taro-400`, `taro-500`)**: Derived from Suri's Model 3.0 hair color and aristocratic ribbons.
- **Berry Rose (`berry-400`, `berry-500`)**: Evoking berry soda and sweet macaron desserts.
- **Custard Pudding (`pudding-300`, `pudding-400`)**: Symbolizing Suri's favorite jiggly flan treat and warm amber highlights.
- **Water Slime Mint (`mint-200`, `mint-500`)**: Nods to her translucent aquatic slime origin and freshness.
- **Rich Chocolate Ink (`chocolate-700`, `chocolate-900`)**: Deep cocoa brown typography ensuring WCAG AA contrast while feeling far warmer and friendlier than harsh black.

### Distinctive Stylistic Motifs
- **Polaroid Album Frames**: High-res artworks are housed in white photo cards (`polaroid-frame`) with delicate drop shadows and subtle rotation tilts (`rotate-1`, `-rotate-1`, `rotate-2`).
- **Washi Tape & Stickers**: Narrative sections feature simulated washi tape strips (`tape-sticker`), stamps, and cute food pins (`🍮`, `🌸`, `🎶`, `🍰`).
- **Interactive Cafe VIP Card**: The Hero section features a dual-mode toggle between an expansive character showcase and an interactive "Cafe VIP Card" showcasing Suri's debut stats, zodiac, and favorite treats.
- **Glasses Toggle**: An interactive toggle lets fans view Suri Model 3.0 with spectacles (intellectual lady) or without spectacles (kawaii anime girl).
- **Cafe Jukebox**: Music covers are framed as sweet drink pairings (e.g., "KING" paired with Royal Sparkling Peach Tea 👑; "Renai Circulation" paired with Brown Sugar Boba Milk 🍮).

---

## 2. Authentic Asset Integration

Rather than relying on web-compressed or low-resolution placeholders, all key visuals were directly sourced from the creator's authentic artwork archive (`C:\Users\Hasukatsu\Downloads\Compressed\Sủi Artwork`):
- **Official Custom Logo**: `public/images/icons/logo_suri.png` (integrated from `logo suwi.png`).
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
   - Integrated as definitive statements across the Hero, Sacred Motifs, and Evolution Timeline.
2. **Documented Lore & Stream Narratives**:
   - The water-slime reincarnation, the adoption of human form, and the coexistence with the lightning alter ego Irus.
   - Presented in high-editorial prose within `StoryRecord.tsx` with a visible provenance badge (`TƯ LIỆU LORE GHI NHẬN`).
3. **Sealed Inquiries (Archival Case Files)**:
   - The note signed "W", the 300-year sealing of the monarch, and the missing sorcerer.
   - Placed inside `LoreArchive.tsx` with explicit classification stamps (`UNRESOLVED`, `COMMUNITY-REPORTED`) and investigative notes, explicitly stating that no fake resolution has been invented.

---

## 5. Technical Stack & Engineering Choices

- **Package Manager**: **`pnpm`** (v11.18.0) prioritized and configured with approved build dependencies.
- **Framework**: **React 18** with **TypeScript** and **Vite 6** for fast hot module replacement, strict type checking, and optimized production chunking (`251 KB` JS bundle, `45 KB` CSS bundle).
- **Styling**: **Tailwind CSS 3** with custom theme tokens, CSS modules, and custom scrollbars.
- **Icons**: **`lucide-react`** for crisp, scalable vectors with tree-shaken imports.
- **State & Navigation**:
  - `IntersectionObserver` drives the floating `SideNav` to track active sections seamlessly without scroll hijacking.
  - Native accessible modal behaviors for full-screen image inspection (`LightboxModal`) and video playback (`VideoModal`).
- **Accessibility & Performance**:
  - Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Strict compliance with `prefers-reduced-motion` to disable animations for sensitive users.
  - Responsive layouts tested across mobile, tablet, and desktop screens.
