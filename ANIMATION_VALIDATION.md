# Animation validation, v93

## Reproduced issue

The v92 entrance timers started before the portrait images finished downloading. With a 4.5-second portrait response delay, both Home and About had reached opacity 1 with zero running animations before the image loaded. The late image then appeared after its entrance had already finished.

With v93, those portraits stayed at opacity 0 until the image loaded. After load, Home measured opacity 0.437 and a 78.9px upward-reveal offset; About measured opacity 0.099 and a 25.2px offset. Both had two running CSS transitions. These measurements confirm that the entrances run after the image is available.

## Changes

- Home waits for its portrait to load and decode. The title, logos, and project link retain their staged timing without waiting for the portrait download.
- About and shared scroll reveals wait for visible image content to be ready. Hidden variants and offscreen lazy images cannot hold a visible container indefinitely.
- The shared observer includes the viewport's bottom edge. Observed content is checked again before reveal and remains eligible if it scrolls away while loading.
- Home, scroll reveals, and project artwork wait for a visible browser tab before starting their entrances.
- Project title artwork, character artwork, roster images, and the selected CSS background fade in after loading. The background loader follows the active desktop or mobile CSS source and avoids a second load when the source is unchanged.
- Game Dev uses the shared observer and has the same fallback for browsers without IntersectionObserver.
- Pending Home and scroll waits are cancelled on unmount. Changing to Reduce Motion releases pending content immediately.

## Verification

`npm run build` passed. The browser checks used the production build in Chromium 131 with local asset routing. All 38 recorded checks passed with no unexpected console errors or page errors:

- Two slow-load portrait reproductions: Home and About.
- Four Home/About entrance and scroll checks: 1366 x 768 desktop, 1024 x 768 touch landscape, 768 x 1024 touch portrait, and 390 x 844 phone.
- Thirteen direct-route, scroll-reveal, and full-screen canvas checks at 1024 x 768: Home, Projects, Services, About, Contact, and all eight case studies.
- Eight project-preview artwork readiness checks, one for each project.
- Project arrows and case-study link navigation.
- Home and About visibility with Reduce Motion enabled; project buttons remain functional without animation.
- DBFortri project background entrance after a 3.5-second asset delay, with controls available during loading.
- Home, About, and Projects entrances when an initially hidden tab becomes visible.
- Reduced-motion preference changed while the About portrait was still loading.
- Navigation from Home to Projects while the Home portrait was still loading.
- Game Dev content visibility with IntersectionObserver unavailable.

Compared with v92, all 403 files under `public`, dependency files, desktop canvas code, metadata and typography files, Vercel configuration, and navigation code are unchanged. No original image was resized or edited. The new project-artwork keyframe changes opacity only, preserving artwork transforms and positioning.

## Limits

This checks the source revision and local production build. No live deployment URL was available for this check, and the update has not been published to Vercel. Physical iPad/Safari testing was not performed. Visitors who enable Reduce Motion intentionally receive static content; this accessibility preference is preserved.
