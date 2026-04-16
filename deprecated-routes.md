# Deprecated / legacy routes (still accessible by direct URL)

These pages **still exist** and can be loaded if someone types the exact route, but they are **no longer linked** from the main site (the main entrypoint `/` redirects to `/redux/`).

## Main entrypoint
- `/` → redirects to `/redux/`

## Legacy timeline mount (redirects)
These are kept only for old bookmarks.
- `/timeline` → redirects to `/redux/`
- `/timeline/*` → redirects to `/redux/*` (same suffix)

## Deprecated static HTML pages (served from `public/`)
Direct routes:
- `/home.html`
- `/resume.html`
- `/portfolio.html`
- `/portfolio-modern.html`
- `/projects-globe.html`
- `/mvp.html`
- `/movierecc.html`
- `/rideability.html`
- `/gpt.html`
- `/comics.html`
- `/extras.html`

## Current app routes (not deprecated)
- `/redux/` (Timeline app entry)
- `/redux/:semesterId` (semester detail pages inside the Timeline app)

