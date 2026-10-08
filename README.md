# Portfolio v89

This update fixes the size change when switching from Home to Projects on a landscape iPad. One persistent desktop canvas now surrounds the application, so navigation and page content use the same uniform scale across every tab and all eight case studies.

The PC master is fixed at 1920 x 1080. The entire composition uses one `transform: scale()` with `transform-origin: center center`; its scale is the smaller of the available width and height ratios. The canvas height stays fixed, so portrait size, title positions, descriptions, navigation, arrows, and the tracker match the actual PC composition. The same persistent canvas surrounds every landscape tablet tab, preventing a size change on entering Projects. Different viewport aspect ratios leave centered space around the unchanged composition.

This mode applies to touch-capable landscape viewports 768px to 1366px wide and at least 600px high. Desktop size conditions are evaluated against the PC master at build time and scoped to canvas mode. CSS container queries are no longer required. This preserves DBFortri's complete desktop backgrounds, stationery mockups, founder portrait, and gallery, along with the original Source and Artlantis backgrounds. DBFortri's project-preview background also has prefixed Safari and full-resolution image fallbacks.

This release was made from the recovered earlier Portfolio.rar-based project. The newly uploaded Portfolio.rar could not be downloaded because access was denied, so any new changes in that archive could not be compared or included. The attached v61 archive was not used.

Desktop, phone, and portrait-tablet layouts keep their existing behavior. All supplied images and font files are byte-for-byte unchanged, and dependencies and the lockfile are unchanged. See `IPAD_VALIDATION.md` for checks and their limits.

The shared implementation is in `src/components/DesktopCanvas.jsx`, `src/components/DesktopCanvas.css`, `src/hooks/useDesktopCanvas.js`, `src/data/desktopDesign.js`, and `scripts/desktop-canvas-css.js`. The CSS processor is registered in `vite.config.js`. Replace the complete project source when installing this update; copying only `Slide.jsx` is not sufficient.

The Projects progress tracker uses the desktop bar length, counter typography, spacing, and bottom-left placement on phones and portrait tablets. It sits over the full project background with a soft gradient for readability. Bottom padding keeps the final description clear of the tracker when scrolling, and the previous/next arrows remain at the sides.

Portrait tablet pages from 768px to 1024px use consistent fluid gutters of at least 24px, balanced one- or two-column content, and proportionally sized headings. About uses a portrait beside readable copy; Game Dev identity and mockup grids use two columns; Source social content pairs its carousel with its description; Photography and DBFortri galleries give the featured image its own row. Navigation and contact controls in those responsive pages have touch targets of at least 44px, including the Danes carousel dots. Original font families, Inter descriptions, supplied artwork, and the side project arrows are retained.

On phones and tablets, the Projects previous and next buttons stay midway down the left and right sides of the preview. The progress tracker stays visible while the preview scrolls.

Em dashes have been removed from page copy, captions, image descriptions, browser titles, and generated contact-draft subjects. Commas, colons, or natural wording keep the text readable.

All case-study descriptions use Inter, including opening summaries, body copy, gallery descriptions, DBFortri descriptions, and project-preview descriptions. Description size remains 14px with a 1.8 line height. Photography uses Fugaz One for its case-study and project-preview headings, matching Illustrations. The camera label uses Montserrat and reads “SONY ZV-E10” without a dot.

About now has a gentle upward fade for the portrait, introduction, education, experience, and tools. Sections reveal once as they enter the viewport. Reduced-motion settings show the content immediately.

Services titles and descriptions now share the same horizontal center as “What I Do.” Equal space on both sides of the copy keeps it centered while the service numbers remain on the left. The layout adjusts for mobile screens, and the background stays fixed while the content scrolls.

Artwork now loads from the supplied originals instead of automatically substituting smaller compressed previews. Danes Logo Studies and Team Uniform load their original 2000-pixel PNGs. NIA's project-preview logo uses the existing vector artwork. Illustration artwork, Verto sheets, Artlantis posters, and other supplied images retain their native detail. Lazy loading and the explicitly configured responsive photo galleries remain in place.

Some supplied images are small originals and need higher-resolution exports for additional real detail. See `IMAGE_QUALITY.md` for dimensions and remaining source limits.

The v80 lockfile fix for `source-map-js` 1.2.2 is retained. Dependency versions are unchanged in this update.

Home and metadata retain the original typography restored in v79.

## Start the site

Extract the project, open a terminal in the folder containing `package.json` and `package-lock.json`, then run:

```powershell
npm ci --include=dev
npm run dev
```

If npm reports that the esbuild install script was blocked, stop the dev command with Ctrl+C and approve that package's installed version, then rebuild it:

```powershell
npm install-scripts approve esbuild
npm rebuild esbuild
npm run dev
```

The approval command is for npm versions that show the install-scripts warning. It records a project-scoped approval for the installed esbuild version. No global or blanket script approval is required.

Use `npm run build` for production. Older release notes below are historical; `FONT_AUDIT.md` describes the current typography.

---

# v77 — Supplied fonts installed

All thirteen website font families now use the files provided in `fonts.zip`. Buvera Extra Bold is included, so DBFortri headings use the actual font instead of the previous fallback.

The fonts are served locally as WOFF2 files. Each page retains separate font roles for descriptions, titles, labels, and metadata. Description paragraphs keep the shared 14px size and 1.8 line height. The site's existing images, layouts, animations, and Services text centering are retained.

Run `npm install` and `npm run dev` to preview, or `npm run build` for production. Font declarations are in `src/fonts.css`; role assignments are in `src/typography.css`. The supplied-to-bundled font mapping is in `FONT_SOURCES.json`, and `FONT_AUDIT.md` lists the Figma roles.

Older release notes below describe the project history. Their missing-Buvera notes are resolved by v77.

---

# v76 — Fonts by text role

Case-study typography now has separate roles for opening summaries, body descriptions, section titles, project labels, and shared metadata labels. The font assignments come from the Figma text layers. Danes was rechecked against frame `2243:4` for this update.

- Opening descriptions and project previews: Urbanist Regular, with Urbanist Bold/Italic emphasis.
- Body descriptions: each case study's audited family, at the existing shared 14px size and 1.8 line height.
- Shared metadata labels (Project Scope, Programs, Contact): Questrial Regular; metadata contents: Urbanist.
- Titles and project labels: each project's assigned font and weight; palette labels and typography specimens retain their separate faces.
- Danes: restored the design's bold italic emphasis and the 700 weight for the standalone Hot Magenta Red label.

Font roles are centralized in `src/typography.css`. Opening summaries use `CaseStudyDescription variant="intro"`; ordinary description paragraphs use the default body variant. Do not use the description component for headings or labels. Existing responsive sizes and page layouts are retained.

DBFortri still requires the Buvera Extra Bold webfont for an exact heading match. See `FONT_AUDIT.md` for the complete mapping and font setup.

---

# Portfolio v74 — fonts from Figma

Font families now follow the linked Figma case studies, including Urbanist descriptions and metadata, Questrial navigation, Sansation NIA typography, and Fugaz One Illustration/Photography titles. Fonts are bundled locally. See FONT_AUDIT.md for the complete mapping and two remaining inputs: the Buvera Extra Bold webfont and the five general-page designs absent from this Figma file.

# Portfolio v73 — responsive case studies

All eight case studies now have tighter phone spacing, content-sized opening sections, and balanced tablet layouts. Source and Artlantis use two-column tablet compositions; Danes, GameDev, Photography, and DBFortri have adaptive grids; NIA has improved timeline gutters and a compact footer. Verto sticker sheets support horizontal scrolling and keyboard focus on phones while retaining the original PNG artwork. Description typography remains Inter, 14px, with a 1.8 line height.

# Iverson Portfolio — v72

React, Vite, and Tailwind portfolio with thirteen routes and eight case studies.

## Run locally

Use Node.js 20.19 or newer.

```bash
npm ci
npm run dev
```

Create the production build with `npm run build`. Preview it with `npm run preview`.
Deploy the generated `dist` folder to a host with an SPA fallback to `index.html`, so direct links such as `/projects/artlantis` work.

## Responsive layout updates

- Phone home layout keeps the greeting, portrait, project link, and logo row separate. Short landscape screens have their own compact composition.
- On smaller screens, Projects has a scrolling preview above a persistent control bar. Text stays clear of the controls, and switching projects resets the preview scroll.
- Case studies reflow into readable vertical stories. Breakpoints meet at the same screen widths; smaller galleries show complete artwork.
- Services keeps its stationary background while cards scroll. Service descriptions and Contact fields have more room on phones and tablets.
- Bright Illustration, Photography, and NIA sections have clearer description contrast.
- Case-study and project descriptions use the shared **Inter, 14px, line-height 1.8** setting. The requested Artlantis text, bold names, freelance role, Game Dev title color, and supplied Verto PNGs remain included.

## Loading improvements

- Routes load their code when opened. Projects mounts the selected and outgoing slides for its fade instead of downloading all eight posters upfront.
- `ResponsiveImage.jsx` selects WebP previews from `src/data/imageVariants.json` and defers below-fold images. Raster originals remain in `public/assets/images`; photo viewers keep their full-resolution sources.
- Desktop-only Source and Artlantis backgrounds use responsive pictures and do not download on phones. Interior backgrounds use smaller responsive previews.
- Embedded NIA SVG photos are compressed while vector paths and filters remain intact.
- The existing font families are self-hosted under `public/assets/fonts`, with licenses included. Google Fonts connections are no longer required.
- Scroll reveals use IntersectionObserver; navigation tint measurements are limited to one frame. Normal entrance animations stay enabled, with reduced-motion support.
- Source rotates designs only while its carousel is visible, and mounts only its current and outgoing designs.

See `VALIDATION.md` for the browser checks and their limits.
