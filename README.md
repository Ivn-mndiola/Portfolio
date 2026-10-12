# Portfolio v95

Game Dev's Projects preview now displays the original supplied icon and title artwork without brightness/invert color conversion. The cream lettering and the title's original dark shadows remain visible when opening Projects or switching slides on desktop, iPad, and phone. NIA's existing white icon treatment is retained.

The Source man now meets the bottom edge of the blue Source bar on both PC and landscape iPad. One shared alignment follows the border in the background image and the visible bottom of the cutout, including its transparent padding. It also accounts for the PC content width being narrower than the viewport because of a scrollbar. Separate PC and iPad vertical offsets have been removed. Portrait-tablet and phone positioning remains unchanged.

The v94 portrait-floor and Source-scrolling fixes, v93 animation loading fixes, fonts, high-resolution assets, full-screen iPad canvas, and routing are retained. All 403 public files are byte-for-byte unchanged. See `LOGO_SOURCE_VALIDATION.md` for checks and limits.

Replace the complete project and redeploy it through your existing Vercel workflow. Use `npm ci --include=dev` and `npm run build`. This source revision has not been published to your live website.

---

# Portfolio v94

This update closes the gap below the About portrait on desktop and landscape iPad, including while scrolling. The supplied PNG has transparent padding below the visible coat; the image is positioned lower within its existing frame so the coat meets the viewport floor. Its original resolution and displayed size are retained. Phone and portrait-tablet placement is unchanged.

The Source case study now uses horizontal clipping without an extra vertical scroll container. Vertical touch panning and pinch zoom are explicit, the large background uses asynchronous decoding, and reveal elements no longer request permanent compositor layers. Source scrolling responds while the artwork is downloading. The desktop composition, landscape canvas scale, character position, background artwork, and carousel remain in place.

All v93 animation fixes are retained. All 403 files under `public`, the dependencies, fonts, shared navigation, desktop-canvas implementation, and Vercel config are unchanged. See `AVATAR_SCROLL_VALIDATION.md` for the reproduction and checks.

Replace the complete project and redeploy using your existing Vercel workflow. Run `npm ci --include=dev`, then `npm run build`. This source update has not been published to your live site.

---

# Portfolio v93

This revision fixes missed first-visit animations in the latest v92 project. Home and About portraits now reveal after their images finish loading and decoding. Project artwork fades in when ready, and animation entrances wait until the browser tab is visible. Project buttons remain available while large artwork downloads.

Scroll reveals now include the visible bottom edge of the viewport. Hidden layout variants and offscreen lazy images do not block a visible image reveal. Game Dev uses the shared reveal hook and displays content when IntersectionObserver is unavailable. The visitor's Reduce Motion preference remains respected, including changes while an image is still loading.

The v92 artwork revisions, fonts, full-screen iPad canvas, layouts, navigation, dependencies, and Vercel routing are retained. All 403 files under `public` are byte-for-byte unchanged. See `ANIMATION_VALIDATION.md` for reproduction evidence, checks, and limitations.

Redeploy the complete project using your existing Vercel workflow. Use `npm ci --include=dev` and `npm run build`. This source update has not been deployed to your Vercel account.

---

# Portfolio v92

This revision applies the supplied revision image and both files from `new-assets.zip` to the latest v91 project.

- Game Dev's footer uses three equal columns, keeping its pine/year mark centered between the two brand marks.
- Source's character moves up on PC and down on the landscape tablet canvas. Its Social Media panel uses the larger original logo with automatic height, preserved proportions, and no flex shrinking.
- Artlantis's ending uses the complete supplied `ArtlantisEnding.png`, including its fins, tails, and original shadows.
- About uses the supplied `About.png` in a larger portrait frame. Tighter introduction spacing brings Education into the initial desktop view, and visible About details reveal without the previous 100px inset at the bottom of the screen. Education, Experience, Software, and Equipment remain scrollable.
- Home's logo preview has a consistent height, equal repeating groups, stronger visibility, and reduced-motion support.

All earlier supplied assets, description fonts, dependencies, the full-screen iPad canvas, and the Vercel routing config are retained. Both replacement PNGs are included at their original resolution. See `REVISION_VALIDATION.md` for this revision's checks.

Vercel now has the required SPA fallback in `vercel.json`. Direct visits, refreshes, and new-tab opens of `/projects` and the case-study routes load `index.html`, then React Router opens the requested page. Navigation also preserves browser defaults for Ctrl/Cmd-click, Shift-click, and non-primary clicks. Normal left-click navigation is unchanged.

Keep `vercel.json` beside `package.json` in the project root used by Vercel. Commit and push the updated source, or redeploy it using your existing deployment workflow. This local update has not been deployed to your Vercel account. The full-screen iPad changes below are retained.

This update removes the empty bands above and below the website on a landscape iPad. One persistent desktop canvas fills the browser's visible viewport across every tab and all eight case studies. Switching from Home to Projects keeps the same scale.

The composition uses the desktop's 1920px coordinate width and one `transform: scale()` with `transform-origin: center center`. Its uniform scale is the visible width divided by 1920. The logical canvas height is the visible height divided by that scale, so the transformed canvas reaches all four viewport edges without stretching or cropping it. Desktop viewport-relative styles follow that available height. Long case studies scroll inside the full-screen canvas, while navigation and project controls retain their desktop layout.

The canvas follows `visualViewport` resize events as Safari's toolbars expand or collapse. This mode applies to touch-capable landscape viewports 768px to 1440px wide and at least 500px high, including browser heights below the previous 600px cutoff. Desktop size conditions are still evaluated against the 1920 x 1080 PC master at build time and scoped to canvas mode. CSS container queries are not required. DBFortri retains its complete desktop backgrounds, stationery mockups, founder portrait, gallery, prefixed Safari image-set support, and full-resolution background fallback. Source and Artlantis retain their desktop artwork.

This update builds on the previously delivered v89 project, recovered from the earlier Portfolio.rar-based source. The newer Portfolio.rar remains unavailable because its download was denied; the v61 attachment was not used.

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
