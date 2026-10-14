# Danes portrait validation, v97

This revision fixes the rotating player portraits in the Danes Projects preview. It builds on the latest v96 project and retains its Home logo-row fix, the v95 Game Dev color and Source alignment fixes, and the earlier font, asset, animation, routing, and full-screen canvas changes.

## Reproduced issue

In v96, the roster advanced every 2500ms as soon as Danes became active. It did not check whether the next portrait had loaded or decoded. The selected portrait also restarted a 650ms entry animation while an 850ms opacity transition was running on the same image.

A controlled slow request for `P2.png` reproduced the disappearance in a 1024 x 768 touch viewport. The old roster selected P2 while it was still downloading. P1 faded out, P2 remained hidden by the image-readiness rule, and all six portrait opacities were zero. The profile area was blank.

## Changes

- The cycle hook reads the actual portrait image elements and waits for their loading and decoding to settle. The current loaded portrait remains visible while other images are pending.
- The rotation includes only images with a valid natural width, so a failed request is skipped.
- The extra per-portrait entry keyframe is removed. Portraits use the original 850ms crossfade and visibility transitions, with the same easing and 2500ms cycle interval.
- The timer pauses when Danes is inactive, the document is hidden, or Reduce Motion is enabled. Returning to a visible active preview resumes the timer from the current portrait.
- Only the selected portrait in an active slide is exposed to assistive technology.

The image sources, native pixels, portrait dimensions and positions, mobile offsets, shadows, slide navigation, case-study content, fonts, and previous fixes are unchanged.

## Checks

The production build passed using the existing dependencies.

The slow-image reproduction now keeps P1 selected and fully visible while P2 is pending. Cycling begins after the portrait images have decoded, and P2 then appears through the existing crossfade. A separate failed-P2 request confirmed that the cycle skips P2 and shows P3.

Full cycles were checked for 15.5 seconds each in Chromium at PC 1920 x 1080, touch landscape 1024 x 768, touch portrait 768 x 1024, and phone 390 x 844. All six portraits were selected in each run. Frame samples confirmed complementary opacity transitions with no blank interval and no extra keyframe animation on the portraits. Screenshots were inspected for portrait placement and the project logo, description, buttons, and tracker.

Navigation from Danes to Game Dev and back passed at all four sizes. The Danes case study opened, and its original hero logo loaded and revealed. There were no JavaScript errors or horizontal document overflow in these checks.

Reduce Motion held a single portrait. Changing the motion preference paused and resumed the timer. Simulated document-visibility events also paused and resumed it; this checks the event-handler logic rather than physical browser background scheduling.

All six portrait rectangles matched the v96 reproduction at 1024 x 768 within 0.02 pixels. The project archive was compared with v96. All 403 public assets, dependencies, other pages, and existing files are unchanged except `src/components/Slide.jsx`, `src/pages/ProjectsPage.jsx`, `src/hooks/useRosterCycle.js`, `src/responsive.css`, and `README.md`. This validation document is the only added project file. Dependencies, build output, and internal screenshots are excluded from the archive.

## Limits

The touch viewport checks use Chromium. Safari on a physical iPad was not available for testing. This revision fixes the reproduced loading gap and the repeated image-animation trigger; device-specific rendering still needs confirmation on the affected device after redeployment.

This source update has not been deployed to Vercel.
