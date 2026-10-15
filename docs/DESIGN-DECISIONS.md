# DESIGN DECISIONS & ARCHITECTURAL RATIONALE: SURI MUKEKI SHOWCASE

This document details the creative, editorial, and technical decisions made during the design and implementation of the Suri Mukeki showcase website.

---

## 1. Creative Direction: "Gothic Editorial Meets Cinematic Character Storytelling"

### Inspiration from `luvyie-ruby.com`
The benchmark site demonstrated how a VTuber showcase can transcend a generic link-in-bio or wiki format by employing:
- High-contrast classical serif headings paired with fine monospaced metadata.
- Pinned and scroll-aware navigation with dynamic progress tracking.
- Atmospheric dark canvases with soft luminescent rim lighting.
- Manuscript-style narrative prose that treats lore with emotional gravitas.

### Tailoring Specifically to Suri Mukeki
Rather than copying the reference site's death/scythe motifs or palette:
1. **Palette Architecture**:
   - Deep Charcoal (`#09080B`, `#111014`) forms the infinite dark backdrop.
   - Near-black Plum (`#1A151E`, `#22192E`) evokes mystery and royalty.
   - Warm Ivory (`#F2EAE5`) ensures optimal reading contrast for narrative text.
   - Muted Lavender (`#BCA5D8`) and Rose Accent (`#9D5369`) echo the color scheme of Model 3.0.
   - Dual Elemental Highlights: Serene Cyan (`#38BDF8`) for Suri's aquatic nature and Electric Violet (`#A855F7`) for Irus's lightning persona.
2. **Dual-Mode Hero (Showcase View vs Dossier View)**:
   - Visitors can immediately immerse themselves in high-impact character art or switch to a data-dense VTuber dossier with one click.
   - Integrated a live toggle to preview Model 3.0 with or without spectacles.

---

## 2. Naming & Brand Discipline

- **Strict Name Order**: The character's name is rendered exclusively as **Suri Mukeki** or **SURI MUKEKI** across the entire codebase, headings, and metadata.
- **Family / Given Name Clarification**: Suri is the given name and Mukeki is the family name. The website enforces the chosen Western / international ordering. Reversal to "Mukeki Suri" was strictly rejected in branding.
- **Irus Nomenclature**: Verified from official YouTube broadcast titles (`[Free talk] Hé lộ lore mới của Suri/Irus` and `【DEBUT NEW MODEL】Irus on the mic`) that the official spelling is **Irus**, never "Iris".

---

## 3. Lore Provenance Architecture

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

## 4. Technical Stack & Engineering Choices

- **Package Manager**: **`pnpm`** (v11.18.0) prioritized and configured with approved build dependencies.
- **Framework**: **React 18** with **TypeScript** and **Vite 6** for fast hot module replacement, strict type checking, and optimized production chunking (`242 KB` JS bundle, `45 KB` CSS bundle).
- **Styling**: **Tailwind CSS 3** with custom theme tokens, CSS modules, and custom scrollbars.
- **Icons**: **`lucide-react`** for crisp, scalable vectors with tree-shaken imports.
- **State & Navigation**:
  - `IntersectionObserver` drives the floating `SideNav` to track active sections seamlessly without scroll hijacking.
  - Native `<dialog>` backdrop blur behaviors for accessible full-screen image inspection and video playback.
- **Accessibility & Performance**:
  - Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Strict compliance with `prefers-reduced-motion` to disable animations for sensitive users.
  - Responsive layouts tested across mobile (`360px`, `390px`), tablet (`768px`), laptop (`1280px`), and desktop (`1440px+`).
