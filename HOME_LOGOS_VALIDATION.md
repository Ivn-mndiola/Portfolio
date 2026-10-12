# Home logo row validation, v96

This revision changes the lower client-logo marquee on Home. It uses the latest v95 project as its base, preserving the prior fixes. The supplied screenshot shows the Game Dev wordmark partly cut in the middle of the lower row on iPad Safari. The exact Safari rendering failure could not be reproduced in the available Chromium browser.

## Changes

- Each PNG and SVG receives its native width and height attributes. CSS still sets the same displayed height and automatic width, so the existing proportions and spacing are preserved.
- The row remains hidden and its animation stays paused until all image loads and decodes have settled. Image errors also settle, so one failed request does not block the other logos or the hero controls.
- A stationary inner frame now owns clipping and the edge fade. The frame isolates its painting, uses explicit mask size/position/repeat, and includes the prefixed WebKit properties. The moving track remains inside it.
- Auto margins center the footer instead of a translation on the masked element. Its existing size and position remain the same.

The entrance fade, white logo styling, equal duplicated groups, 20-second scrolling loop, reduced-motion behavior, and existing desktop-canvas implementation are retained. No changes were made to Home's portrait, title, button, or navigation.

## Reproduction and verification

The production build passed with the existing dependency versions.

A delayed Game Dev image reproduced a layout problem in v95. In the 1024 x 768 touch context, one group measured approximately 651.517 physical pixels before the wordmark loaded and 725.117 pixels afterward. The animation was already running, and the incomplete row had reached its visible opacity. The delayed wordmark had a displayed width of zero.

With this update, that group remained approximately 725.117 pixels wide before and after the image loaded. The animation stayed paused at the start and the row stayed hidden while the request was pending, then the complete row faded in and began scrolling.

Eight viewport configurations were checked in Chromium: PC 1920 x 1080 and 1366 x 768; touch landscape 1024 x 768, 1180 x 762, and 1366 x 1024; touch portrait 768 x 1024; and phone 390 x 844 and 844 x 390.

Each configuration was checked at five animation positions, including the Game Dev wordmark centered in the frame and both sides of the 20-second loop boundary. The two groups had equal widths; the loop returned to the same placement; all image boxes stayed within the frame's vertical bounds; and the centered Game Dev wordmark stayed fully inside its horizontal bounds. Screenshots were inspected for the complete wordmark and neighboring logos.

The footer and portrait bounds, and each rendered logo's width and height, matched v95 within 0.02 pixels in all eight configurations. No horizontal document overflow, missing assets, or JavaScript errors occurred during the normal checks.

Additional checks passed for reduced motion, a delayed image, navigation from Projects back to Home, rotation between landscape and portrait tablet sizes, landscape browser-height changes, and a deliberately failed Game Dev request. The failed-request check confirmed that readiness completes and the hero button remains visible.

The project archive was compared against v95. All 403 public assets and all existing project files other than `src/components/ClientLogos.jsx` and `README.md` are unchanged. The only added project files are `src/components/ClientLogos.css` and this validation document. Build output, dependencies, and internal browser screenshots are excluded from the archive.

## Limits

The touch viewport checks use Chromium, not Safari on a physical iPad. WebKit was not installed in the available browser runtime. The update fixes the reproduced loading-width jump and simplifies the mask/clipping arrangement; the original Safari-only cut still needs confirmation after redeployment on the affected iPad. Edge fading remains intentional as logos enter and leave the row.

This source update has not been deployed to Vercel.
