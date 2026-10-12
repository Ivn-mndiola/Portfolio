# Vercel routing fix, v91

The portfolio uses React Router's BrowserRouter. A normal left-click in the navigation updates the route in the current React application. A middle-click opens the link in another tab, which requests that path directly from the hosting server. Refreshing a case study or opening a shared deep link makes the same direct request.

The preceding source did not include a Vercel SPA fallback. Without it, a static deployment can return 404 NOT_FOUND for `/projects` or a case-study path even though `/` works.

The root `vercel.json` now rewrites otherwise unresolved paths to `/index.html`, following [Vercel's Vite SPA instructions](https://vercel.com/docs/frameworks/frontend/vite). React Router then renders the requested route. Existing JavaScript, CSS, images, and fonts continue to be served as static files. Navigation also leaves modified clicks and non-primary clicks to the browser.

## Apply to the deployed project

Keep `vercel.json` in the same folder as `package.json`, inside the Root Directory selected for this project on Vercel. Do not put it in `src`, `public`, or `dist`.

Commit and push the updated source if your Vercel project deploys from Git, or redeploy using your existing workflow. The config must be part of the new deployment; this local source update has not changed the live Vercel account.

To apply only the server-routing fix to your current source, copy the supplied `vercel.json` into that project root and redeploy. The complete ZIP additionally includes the modified-click navigation guard and retains the preceding full-screen iPad fix.

## Verification

- Production build passed.
- A local static-server check reproduced a middle-click 404 with the preceding build and no fallback.
- With the configured fallback, middle-click and Ctrl-click opened Projects in a new tab while leaving Home in the original tab. Refreshing the new tab returned HTTP 200 and rendered Projects.
- Normal left-click navigation continued to use the current tab.
- Direct requests to all thirteen routes returned HTTP 200 and rendered their navigation. Refreshing DBFortri rendered its gallery.
- JavaScript, CSS, and the logo image retained their static-file content types and returned HTTP 200.
- No JavaScript errors were recorded.

These are local Chromium browser checks against a static server applying the configured rewrite. They are not a live Vercel deployment test. After redeploying, open `/projects` and `/projects/dbfortri` directly and refresh them to confirm the deployment uses the new config.
