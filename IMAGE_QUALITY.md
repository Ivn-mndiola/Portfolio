# Image quality — v81

The shared `ResponsiveImage` component now uses the original `src`. It no longer replaces artwork with the automatically generated 640/1280/1920-pixel compressed WebP previews. Explicit `srcSet`/`sizes` supplied by photo galleries still work, and lazy loading remains enabled by default.

## Restored sources

| Artwork | Source resolution |
| --- | --- |
| Danes Logo Studies | 2000 × 796 PNG |
| Danes Team Uniform | 2000 × 884 PNG |
| Danes full roster (retained from v80) | 1920 × 681 PNG |
| NIA terminal | 2880 × 2436 PNG |
| NIA project-preview name and symbol | Existing vector SVGs |
| Panagbenga showcase | 2436 × 1177 PNG |
| Cascandy showcase | 2602 × 1222 PNG |
| Verto sticker sheets | 3960 × 496 and 3960 × 610 PNG |
| Artlantis Chanty and Sharky posters | 3240 × 4050 JPEG each |
| Artlantis duo poster | 3264 × 4074 JPEG |
| Source social designs | 1177 × 1377 JPEG each |

The Illustration background also uses its original PNG. These are the existing source files; no artwork was redrawn or artificially enlarged. Original artwork can take more bandwidth than the compressed previews, especially the Artlantis posters. Below-the-fold images still load lazily.

## Remaining source limits

A large screen or a high-density display can require more pixels than a supplied original contains. Full resolution preserves all available detail, but cannot add detail missing from the source.

| Files | Available source | Needed for sharper large displays |
| --- | --- | --- |
| `gamedev/F1.jpg`–`F9.jpg` | 400 × 400 each | Larger original mockup exports |
| `photography/case-study/` photographs | 556–1253 pixels wide; street bird/eagle are about 605 × 403 | Full-size camera or edited photo exports, especially for the lightbox |
| `source/source-mini-logo-1.jpg`–`4.jpg` | 104 × 104 each | Vector artwork or larger exports |
| `source/source-character-cutout.png` | 519 × 867 | Larger transparent original |
| Small Source logos, including `source-blue-logo.png` | Blue logo: 160 × 89 | Matching SVGs or larger transparent exports |
| Danes full-width roster, logo studies, uniforms | 1920–2000 pixels wide | 3840–4000-pixel originals for full-width 2× desktop detail |

The earlier supplied v61 ZIP contains the same small Game Dev and Photography sources; it has no higher-resolution replacements for those files. Replace them at the same paths when larger originals are available. When changing an original's aspect ratio, update its metadata in `src/data/imageVariants.json` and any explicit `width`/`height` props as appropriate.

## Verification

All 13 routes were checked at 390, 768, and 1920 CSS pixels, including 3× mobile and 2× tablet/desktop display density. Image requests and decoded image dimensions were checked; no missing files, JavaScript errors, or document-level horizontal overflow were found.

Services titles and description boxes share the heading's center across mobile, tablet, and desktop widths. The number column, fixed background, and links to the contact page are retained.
