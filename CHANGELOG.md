# Changelog

All notable changes to the **Suri Mukeki VTuber Showcase Landing Page** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-10-18

### Added
- **Model 3D Debut & Evolution Lineage**: Added primary showcase for Suri Mukeki's 3D cel-shaded model (debuted 05/09/2026), alongside Chibi Suwi, Model 3.0 Live2D, Model 2.0, and Genesis Model 1.0.
- **Interactive Glasses Toggle**: Added dynamic visual toggle for Model 3.0 Live2D allowing users to switch seamlessly between glasses-on and glasses-off expressions.
- **Contact Card & Social Network Hub**: Integrated official links for YouTube, Facebook, Twitter/X, Discord, and TikTok into the footer contact card.
- **Accessible Lightbox Modal**: Created [`ImageLightboxModal`](file:///src/components/ui/ImageLightboxModal.tsx) supporting keyboard `ESC`, backdrop click-to-dismiss, and automatic background scroll locking.
- **Dual Light/Dark Theme Engine**: Added theme switcher with liquid-glass backdrop filters and smooth palette transitions.
- **Atmospheric Visuals**: Integrated floating aquatic bubbles, ambient celestial waves, and interactive particle effects.
- **Automated 4-Tier E2E Test Suite**: Added 55 automated regression tests covering feature integrity, boundary invariants, cross-feature state contracts, and responsive layout verification.

### Changed
- **Dossier & Chronicle Single Source of Truth**: Unified persona profiles and 4-chapter world-building timeline into canonical data contracts within [`suriData.ts`](file:///src/data/suriData.ts), retiring over 250 lines of duplicate mock data.
- **Technical Telemetry Visibility**: Model polygon metrics (`68,400`), ARKit blendshapes (`142`), SpringBone physics, and Toon Shader specs are now legitimately and prominently rendered in the model specification deck.
- **Navigation Anchor Smooth Scroll**: Replaced deprecated `window.pageYOffset` with modern `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`.

### Fixed
- **Clipboard API Resilience**: Fixed clipboard email copy failure edge cases by adding secure context detection, legacy `textarea` (`document.execCommand('copy')`) fallback, and graceful `mailto:` redirection.
- **Unmounted Timeout Memory Leak**: Added cleanup for clipboard reset timeouts in [`Footer.tsx`](file:///src/components/layout/Footer.tsx).
- **Test Integrity**: Removed all deceptive hidden DOM blocks (`div.hidden`) previously used to spoof test assertions, making 100% of the UI verifiable through visible components and data contracts.

### Performance
- **Image Asset Optimization**: Added `loading="lazy"` and `decoding="async"` attributes across all below-the-fold design sheets, turnaround references, and chronicle illustrations.
- **CSS Transitions**: Optimized fluid layout constraints to achieve 0px horizontal overflow across all 5 standard viewports (360px to 2560px).

---

## [1.0.0] - 2026-09-05

### Added
- Initial release of the Suri Mukeki showcase landing page with basic character introduction, schedule, and music cover highlights.
