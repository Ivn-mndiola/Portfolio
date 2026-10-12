# Avatar and Source scrolling validation, v94

## About portrait

The supplied About.png is 6527 x 7551. Its visible opaque coat ends at source row 7193; translucent shadow and transparent export padding extend below it. The v93 CSS aligned the image export to the viewport bottom, leaving a visible gap of about 36px at 1893 x 788, 52px at 1920 x 1080, and 29px at 1024 x 768 touch landscape.

The image now has a proportional bottom offset of 358 / 6483 of its existing frame height. This moves the visible coat to the viewport floor without changing the image dimensions or editing any pixels. Small-screen placement retains its original zero offset and fade treatment.

Nine About checks passed in the local production build:

- Desktop: 1893 x 788, 1920 x 1080, and 1366 x 768.
- Landscape touch canvas: 1024 x 768, 1180 x 820, and 1366 x 1024.
- Portrait tablet and phone: 768 x 1024 and 390 x 844.
- A delayed portrait response still runs the upward reveal and ends at the floor.

At every desktop and landscape-canvas size, the visible coat baseline is within 0.01px of the viewport bottom after the entrance. Portrait size and text geometry match the preceding revision. The fixed portrait remains anchored when the page scrolls. Phone and portrait-tablet image positions are unchanged. Screenshots were inspected locally.

## Source scrolling

The v93 issue was reproduced at 1024 x 768 in a touch-enabled browser with 4x CPU slowdown and Source image responses delayed by six seconds. The Source page was already present and two animation frames had passed. A vertical touch gesture left the canvas scrollTop at 0 while the images were pending. The same gesture moved scrollTop to 422 after image loading.

The Source wrapper's `overflow-x: hidden` also made its computed vertical overflow `auto`, creating another scroll container within the scaled canvas. It now uses `overflow-x: clip`, leaving vertical overflow visible so the shared canvas handles the page scroll. Vertical touch panning and pinch zoom are explicit. The full-quality background uses `decoding="async"`, and Source reveals retain their opacity/transform transitions without permanent will-change hints.

Twelve Source checks passed at six viewport sizes: 1024 x 768, 1180 x 820, 1366 x 1024, 768 x 1024, 390 x 844, and 1920 x 1080. At each size, scrolling responded to the early gesture; the page could reach its ending and the carousel's Next button changed to a loaded photograph. The three landscape touch tests scrolled before the background loaded, with gesture checks completing in approximately 0.5 to 0.7 seconds. Desktop wheel scrolling also worked before the background loaded. Phone and portrait-tablet views retained their existing responsive backgrounds. No horizontal page overflow was introduced.

Two additional checks passed when opening Source from its Projects preview at 1024 x 768: an early swipe moved scrollTop to 422 while the background was still pending, and the ending and carousel remained reachable.

## Build and retained files

`npm run build` passed. All 23 recorded browser checks passed without page errors. The checks used Chromium 131 and the local production build. All 403 public files match v93 byte for byte, including the high-resolution artwork and fonts. The animation hooks and readiness utility, package files, navigation, desktop canvas, metadata, typography, and Vercel routing config are unchanged. The only source changes are AboutPage.css, SourcePage.jsx, and SourcePage.css.

## Limits

These checks simulate iPad viewport dimensions, touch input, slow image responses, and CPU slowdown. They do not constitute a physical iPad/Safari test. No live site URL was available for this revision, and the updated source has not been deployed to Vercel.
