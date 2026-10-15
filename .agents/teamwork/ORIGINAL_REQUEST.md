# Original User Request

## 2026-10-15T12:52:32Z

Use a full multi-agent team to convert the dark cinematic React + Vite + Tailwind landing page into a comprehensive multi-section VTuber showcase landing page for Suri Mukeki.

Working directory: c:\Users\Hasukatsu\Documents\Suri-LandingPage
Integrity mode: demo

## Requirements

### R1. VTuber Identity & Complete Asset Replacement
- Replace all agency branding and placeholder copy ("a", "Booking Q3 2026", "AURA", "VALENCE", "web design studio", etc.) with authentic Suri Mukeki lore, persona, and community information.
- Use existing local image and character assets located in `public/images/` (such as `suri_portrait.webp`, `suri_model3.webp`, `suri_cutout_transparent.png`, `suri_debut_model.webp`, and reference sheets).
- Update metadata, titles, and branding across the application to reflect the Suri Mukeki VTuber showcase.

### R2. Multi-Section Structure with Liquid Glass Styling
- Expand the current single-page layout into a coherent multi-section showcase retaining the dark cinematic aesthetic, `.liquid-glass` / `.liquid-glass-strong` morphism cards, and Framer Motion effects:
  1. **Hero Section**: Cyber-courier aesthetic, character title with `<BlurText>`, status badge, call-to-actions (Twitch/YouTube/Discord), and background visual.
  2. **Lore & Profile Section**: Character backstory, personality tags, key trivia, and visual portraits.
  3. **3D Model Specs & Credits Section**: Detailed technical model specifications (poly count, blendshapes, physics bones) and artist/rigger credits styled in liquid glass cards.
  4. **Schedule & Stream Highlights Section**: Weekly stream broadcast routine, feature highlights, and video/clip showcases.

### R3. Responsive Navigation & Polish
- Provide an updated fixed liquid-glass navigation bar linking smoothly to each section.
- Ensure fluid responsive adaptation across both desktop and mobile viewports.

## Acceptance Criteria

### Build & Integrity
- [ ] `pnpm build` executes cleanly with zero TypeScript errors and zero bundling warnings.
- [ ] No remnant agency copy (e.g., "Booking Q3 2026", "AURA", "KINETIC", "NEXUS", "web design agency") remains anywhere in the rendered application.

### Content & Visuals
- [ ] All four core sections (Hero, Lore/Profile, Model Specs/Credits, Stream Schedule/Clips) are fully implemented and populated with verified Suri Mukeki details.
- [ ] All image references resolve to valid files in `public/images/` with no 404s or broken media.
- [ ] Liquid glass components, border glow masks, and Framer Motion animations perform smoothly without layout shift or overflow bugs on desktop (1920x1080) and mobile (390x844).
