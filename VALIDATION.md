# v87: Desktop canvas validation

- Production build passed with the existing dependencies.
- All eight Projects previews were compared against the previous desktop composition at 1920x1080. At touch landscape sizes 960x600, 1024x768, 1133x744, 1180x820, 1194x834, and 1366x1024, their normalized element coordinates match that composition within 0.12 design pixels. Fonts, type sizes, line heights, letter spacing, backgrounds, visible elements, and text also match before the single parent transform.
- The internal canvas remains 1920x1080 with an origin of 960px 540px. Only its centered placement and uniform scale change with the viewport. At 1024x768, the canvas scales to 1024x576 and is centered with 96px above and below.
- All eight previews also retained their previous desktop layouts at 1920x1080, 1440x900, 1366x768, and 1024x768 with a mouse, plus phone 390x844, portrait tablet 768x1024, and phone landscape 844x390 with touch: 104 final preview and viewport comparisons in total.
- Thirty-two interaction and route checks passed: scaled touch arrows, swipes, case-study navigation and selected-project restoration, rotation with an open portrait menu, landscape resizing, desktop-style navigation, and navigation across all thirteen routes at 390x844 and 1024x768. The canvas does not replace case-study or other page layouts.
- No horizontal document overflow, missing requested files, or runtime page errors were detected. Landscape tablet screenshots were visually reviewed alongside the reference.
- Original assets, fonts, project copy, and dependency files are unchanged from v86. No iframe or duplicate tablet hero is used.
- Checks used Chromium browser emulation. Physical iPad and Safari testing were not performed.

---

# v86: Project progress tracker validation

- Production build passed with the existing dependencies.
- All eight project previews were checked at 320x568, 390x844, 430x932, 768x1024, 820x1180, 1024x768, 844x390, 1200x800, 1201x800, and 1920x1080: 80 preview and viewport checks.
- The progress line retains the desktop 140px width and 2px height, with 16px spacing and the same Inter 12px counter. The fill updates from 01/08 through 08/08, next wraps back to 01/08, and keyboard previous wraps to 08/08.
- Phone and tablet previews use the full viewport background with a transparent bottom gradient instead of a solid footer strip. The tracker stays visible when scrolling; bottom padding leaves the final description clear of it. Side arrows retain 44x44px touch targets.
- No horizontal document overflow, missing requested files, or runtime page errors were detected. Phone portrait, phone landscape, and tablet screenshots were visually reviewed. The desktop tracker matches the prior screenshot pixel for pixel.
- Fonts, artwork, tablet case-study layouts, and dependency files are unchanged from v85. Only ProjectsPage.jsx, responsive.css, README.md, and this validation file changed.
- Checks used Chromium browser emulation. Physical-device and Safari testing were not performed.

---

# v85: Tablet validation

- Production build passed with the existing React, Vite, and Tailwind dependencies.
- All thirteen routes were checked at 768x1024, 820x1180, 900x1100, 1000x800, 1001x800, and 1024x768, plus phone 390x844 and desktop 1920x1080: 104 route and viewport checks.
- The checked pages had no document horizontal overflow, clipped text, missing files, or runtime page errors.
- Final Services checks at widths 768, 820, 900, 1000, 1001, 1002, and 1024 confirmed centered headings/descriptions and consistent spacing through the former breakpoint jump.
- Fourteen interaction groups passed at portrait and landscape tablet sizes: hamburger navigation, service enquiries, local contact-draft previews, sticky About portraits, all eight project previews, Danes pagination and mockups, Source carousel controls, and both photo viewers including focus restoration.
- Visible tablet controls, menu links, contact fields, draft actions, and focused skip links meet the 44x44px minimum. Danes pagination retains small visible dots inside larger touch targets.
- All eight case-study pages and project previews retained Inter descriptions at 14px with a 25.2px line height. Photography headings remain Fugaz One and the Sony label remains Montserrat.
- Source artwork and font files are unchanged. Original image proportions, project colors, About reveals, and the v84 side arrows are retained.
- Checks used Chromium browser emulation. Physical tablet testing was not performed.

Older validation notes below describe earlier versions. The current font roles are documented in FONT_AUDIT.md.

---

# v77 — Supplied-font validation

- Production build passed (`npm run build`, Vite 7.3.6, 77 modules).
- All 30 registered WOFF2 faces from the user's font ZIP loaded successfully. Chromium's platform-font API confirmed actual custom fonts, not merely CSS family names.
- DBFortri section headings render with `Buvera-ExtraBold`, replacing the previous Plus Jakarta Sans fallback.
- All thirteen routes and all eight project previews were checked at 320×568, 390×844, 768×1024, and 1440×900: 84 route/preview checks passed.
- No horizontal document overflow, clipping in the checked headings/descriptions/labels, opening-summary overlap with metadata, missing requested assets, or runtime page errors were found.
- Font roles stayed correct: Urbanist introductions, each case study's body font, Questrial metadata labels, and separate title/label fonts. Descriptions remain 14px / 25.2px line height. Services titles and descriptions remain centered.
- Home on mobile and DBFortri on mobile/desktop were visually reviewed. All original non-font public assets and the JSX page/component files are unchanged from v76.
- The bundled webfonts total 1,989,132 bytes; a page downloads only the faces it uses. All source character maps are preserved except the documented Zen Maru Gothic Latin subsets.
- Browser emulation was used; physical-device testing was not performed.

The older missing-Buvera notes below are historical and are resolved by v77.

---

# v76 — Typography role validation

- Production build passed (`npm run build`, Vite 7.3.6, 77 modules).
- All eight case studies checked at 390×844, 768×1024, and 1440×900: 24 route/viewport checks passed.
- Opening descriptions use Urbanist; body paragraphs use each project's audited font; metadata labels use Questrial; headings and project labels use their separate roles.
- Shared description size remains 14px with 25.2px line height. No horizontal page overflow, clipped checked text, missing requested assets, broken visible images, or runtime page errors were found.
- Chromium's platform-font API confirmed actual loaded font faces for each route, including Urbanist 400/700/900, Questrial, Karla, Montserrat 700, Sansation Regular/Bold, Bahnschrift, Gill Sans MT Condensed, Zen Maru Gothic Bold, Fugaz One, Plus Jakarta Sans, and Inter 800.
- Danes' mobile composition and desktop metadata block were visually reviewed against the Figma text roles. Danes' bold italic emphasis and Hot Magenta Red weight were corrected.
- Buvera is still absent from the supplied assets. DBFortri heading fallback to Plus Jakarta Sans 800 was observed and remains documented; this is not counted as an exact Buvera match.
- All 365 public assets match v75 byte-for-byte. The Services centering from v75 is retained.
- These checks use browser emulation, not physical devices.

---

# v74 typography validation

- Production build passed with locally bundled font files.
- All 13 routes were exercised in Chromium emulation; all eight case studies were checked at 320×568, 390×844, 700×900, 768×1024, 1024×768, 1200×800, 1440×900, and 844×390. The other five routes were checked at phone, tablet, and desktop widths.
- Browser font inspection confirms the actual Urbanist, Questrial, Sansation, Fugaz One, and other bundled faces, rather than only checking declared CSS family names.
- Description typography remains 14px with a 25.2px line height. Family selection follows the Figma role: Urbanist for shared openings, plus each project's body face.
- A desktop Danes project preview needed wrapping with Urbanist and was corrected. Targeted final checks passed without description clipping, document overflow, or runtime errors.
- Missing Buvera is an expected documented limitation, not a claimed successful match. The correct family is wired with an explicit temporary fallback.
- 210 original image assets were hash-compared with v73 and are unchanged.
- Actual device testing and absent general-page Figma designs remain outside this verification.

# v73 responsiveness validation

Production build passed. Chromium browser emulation checked every case-study route at 320×568, 390×844, 700×900, 768×1024, 1024×768, 1200×800, 1440×900, and 844×390. Checks cover document overflow, description clipping, runtime errors, and consistent 14px / 25.2px description typography. Phone and tablet full-page screenshots were reviewed after scrolling to load images. Actual device testing remains outside this emulation.

Source and Artlantis tablet compositions, Photography food columns, Danes values, GameDev identity cards, DBFortri values, NIA footer sizing, and Illustration sticker scrolling were updated. All image asset bytes and prior requested copy are retained.

# v72 validation

`npm run build` passed.

## Layout checks

All thirteen routes were checked in Chromium viewport emulation. Final representative sizes:

| Width × height | Layout |
| --- | --- |
| 320 × 568 | Small phone |
| 390 × 844 | Phone |
| 600 × 800 | Large phone / small tablet boundary |
| 1000 × 800 | Interior-page breakpoint |
| 1200 × 800 | Case-study breakpoint |
| 1201 × 800 | Desktop breakpoint |
| 1440 × 900 | Desktop |
| 844 × 390 | Landscape phone |

Additional checks covered 375 × 812, 430 × 932, 768 × 1024, 1024 × 768, and 1100 × 800. Home and Projects were rechecked after their final layout fixes at all these sizes, plus 1920 × 1080 and 568 × 320. All routes were also checked at 375 × 812 with a 3× device-pixel ratio.

No horizontal text clipping or browser runtime errors were detected in the final checks. Case-study and project descriptions computed to Inter at 14px with a 25.2px line height.

## Interactions

- Home entrance, mobile menu, Escape focus, desktop resize.
- Eight project posters, fixed controls, scroll separation, keyboard/touch switching, case study return memory.
- Stationary Services background, service prefill, email/message validation, Gmail draft construction, draft reset (window opening intercepted).
- Source carousel arrows and deferred inactive artwork.
- Danes mockup carousel and card alignment after tablet resize.
- Photography and DBFortri lightboxes: image fit, phone/landscape controls, next/keyboard previous, Escape, scroll unlock and focus return.

All eight case studies were scrolled on a phone viewport to confirm that below-fold artwork loads. Desktop image files were also decoded successfully across all eight stories. The supplied Verto sticker PNGs match the v71 archive byte for byte.

## Loading measurements

These are asset bytes requested during an isolated opening-page check at 375 × 812 and a 1× pixel ratio, not measured download time. Browser caches, device density, and scrolling change the totals.

| Route | Before | After |
| --- | ---: | ---: |
| `/` | 2.91 MiB | 0.72 MiB |
| `/projects` | 8.00 MiB | 0.65 MiB |
| `/projects/nia` | 20.26 MiB | 1.17 MiB |
| `/projects/source` | 25.27 MiB | 1.01 MiB |
| `/projects/artlantis` | 22.70 MiB | 0.75 MiB |

The initial JavaScript entry changed from approximately 98.8 kB gzip to 68.6 kB gzip, with case-study code loaded on demand.

## Scope of verification

Tests used Chromium emulation, including touch events and portrait/landscape resizing. They do not replace physical-device or Safari/WebKit testing. Gmail opening was intercepted to inspect the generated draft; no email was sent.
