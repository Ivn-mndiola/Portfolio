# Game Dev logo and Source alignment validation, v95

## Changes

Game Dev's preview icon and title retain the supplied PNG pixels. The former title filter converted every visible pixel, including the dark baked shadows, to nearly white. The icon had a matching white conversion. Those color conversions have been removed for Game Dev. The supplied dominant opaque color is RGB 250, 243, 224 (#FAF3E0). The title's normal drop shadow and all sizing remain. Other project graphics retain their existing treatment.

Source used a 2.5vw bottom offset on PC and a -1.5vw offset on the landscape canvas. These have been replaced by one coordinate-based alignment. The original 3840 x 7776 background has the blue bar's lower edge at row 5606. The 519 x 867 character cutout's visible opaque bottom is at row 837. CSS uses the actual containing width for the background-border coordinate and the character's own height for its visible bottom. This handles both the landscape canvas and a desktop content width reduced by a scrollbar. The desktop-canvas CSS processor applies the same composition to landscape iPad; no separate tablet position is introduced.

Phone and portrait-tablet positioning is unchanged. The supplied image files are unmodified.

## Verification

`npm run build` passed. Seventeen browser scenario checks and six rendered-color comparisons passed.

Seven viewport configurations were checked: 1920 x 1080 and 1366 x 768 desktop; 1024 x 768, 1180 x 820, and 1366 x 1024 touch landscape; 768 x 1024 touch portrait; and 390 x 844 phone. The 1024 x 768 check used normal motion, including the completed Source reveal. Other layout checks used reduced motion for settled measurements.

- Home navigation opened Projects with Game Dev selected. Next switched to NIA and Previous returned to Game Dev. NIA's icon remained white, while Game Dev retained its native treatment. Title and icon boxes kept their preceding dimensions and position.
- Captured title and icon pixels at six distinct viewport widths confirmed the supplied RGB 250, 243, 224 color. At width 1024, the preceding conversion produced zero pixels of that native color; the corrected title produced 28,144 and the icon produced 428. Both images restored the native color at every captured width.
- The Source character's visible bottom aligned to the background border at both desktop sizes and all three landscape-canvas sizes, within 0.015 CSS pixels. A separate 16px content-width reduction simulated the PC scrollbar difference and also aligned correctly.
- Source phone and portrait-tablet image boxes matched the preceding placement.
- A delayed-load check opened Source from Projects at 1024 x 768 with touch input, 4x CPU slowdown, and Source image responses held for six seconds. A swipe moved the canvas scrollTop to 422 while the background was pending. The page ending and the carousel's next loaded design remained reachable.
- Local screenshots of the PC and iPad-sized Source border and Game Dev artwork were visually inspected.

There were no unexpected page errors or missing assets in the layout/navigation checks. All 403 public files, dependencies, fonts, metadata, navigation, desktop canvas, About portrait CSS, animation hooks, and Vercel configuration match v94. The only source changes are Slide.jsx and SourcePage.css.

## Limits

Checks used Chromium 131 and the local production build. Physical iPad/Safari testing was not performed. This revision has not been deployed to or verified on the live Vercel site.
