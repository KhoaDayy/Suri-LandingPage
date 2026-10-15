# ASSET MANIFEST: SURI MUKEKI SHOWCASE

This manifest lists all character artwork, illustrations, icons, and media used throughout the website, their provenance, license context, local file paths, and any missing/unreleased creator assets.

---

## 1. Local Image Assets

| File Path | Description | Dimensions / Type | Provenance / Creator | Status |
| :--- | :--- | :--- | :--- | :--- |
| `public/images/characters/suri_model3.webp` | Suri Mukeki Model 3.0 (with spectacles) — Master key visual | Full-body WEBP (319 KB) | Illustrated by **T_blence** (`@T_blence`), Live2D by **Sophiel** (`@Sophielpaka`) | **Active & Present** |
| `public/images/characters/suri_model3_noglasses.webp` | Suri Mukeki Model 3.0 (without spectacles) — Alternative expression | Full-body WEBP (506 KB) | Illustrated by **T_blence** (`@T_blence`), Live2D by **Sophiel** (`@Sophielpaka`) | **Active & Present** |
| `public/images/characters/irus_alter_full.webp` | Irus (Suri Alter) Full-Body Standing Pose — Lightning Monarch | Full-body WEBP (126 KB) | Official stream broadcast asset (`2021/10/12`) | **Active & Present** |
| `public/images/gallery/irus_reference_sheet.webp` | Irus Model Specification & Turnaround Reference Sheet | Design sheet WEBP (549 KB) | Official Model Reference Sheet | **Active & Present** |
| `public/images/characters/suri_model2.webp` | Suri Mukeki Generation 2.0 Full-Body Model | Full-body WEBP (427 KB) | Illustrated by **Turbulence** (`@T_Blence`) (`2022/05/25`) | **Active & Present** |
| `public/images/characters/suri_debut_model.webp` | Suri Mukeki Generation 1.0 (Debut Original) | Full-body WEBP (258 KB) | Illustrated by **kcomorebi**, Rigged by **Truong Thanh Tan** (`2021/04/17`) | **Active & Present** |
| `public/images/characters/suri_portrait.webp` | Official Profile Portrait & Favicon Icon | Square WEBP (61 KB) | Official avatar asset | **Active & Present** |

---

## 2. Audio & Video Media Assets (YouTube Embeds)

| Track Title | Original Artist | Video ID | Type | Verification |
| :--- | :--- | :--- | :--- | :--- |
| **"KING"** | Kanaria | `a8S1xhjh2e4` | Official Cover MV | Primary YouTube Channel |
| **"Yoru ni Kakeru"** | YOASOBI | `cN9evcBtnjo` | Official Cover MV | Primary YouTube Channel |
| **"Nàng Thơ"** | Hoàng Dũng | `hOCt6VYIYUk` | Official Cover MV | Primary YouTube Channel |
| **"Renai Circulation"** | Hanazawa Kana | `tytmMA1YKwU` | Official Cover MV | Primary YouTube Channel |
| **"Only Love"** | Trademark | `is6t-GzkyMk` | Debut Cover MV | Primary YouTube Channel |
| **"Bocca della Verità"** | Hiiragi Kirai | `bw9Y9Ht-kVA` | Official Cover MV | Primary YouTube Channel |

---

## 3. Missing or Unreleased Assets (Documented Fallbacks)

The following assets are proprietary to the creator and rigging team and are not publicly distributed as raw files:

1. **Raw Live2D Runtime Files (`.model3.json`, `.moc3`, textures)**:
   - *Status*: Proprietary to Suri Mukeki and Sophiel.
   - *Handling*: Handled via high-resolution transparent renders and official turnarounds.
2. **Raw 3D Rigged Meshes (`.vrm` / `.fbx`)**:
   - *Status*: Suri operates primarily on Live2D with 3D ASMR audio setups. No standalone public `.vrm` avatar is released.
   - *Handling*: Not required; Live2D high-res models serve as canonical showcase imagery.
3. **Dedicated Transparent Logo Vector (`.svg`)**:
   - *Status*: No official standalone SVG vector logo published.
   - *Handling*: Stylized typography system pairing `Cinzel Decorative` and `Oxanium` with glowing badge framing.

---

## 4. Replacement Instructions

To replace or update character artwork in future releases:
1. Save high-resolution PNG or WEBP images with transparent or solid backgrounds in `public/images/characters/` or `public/images/gallery/`.
2. Update the asset references in `src/data/suriData.ts` under `SURI_DATA.assets` or `GALLERY_DATA`.
3. Re-run `pnpm build` to compile the production bundle.
