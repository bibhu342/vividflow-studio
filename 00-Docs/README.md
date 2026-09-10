# VividFlow Studio — website

The studio site. Hand-written HTML, CSS and vanilla JavaScript — no build step, no framework,
no dependencies. Google Fonts is the only external request.

```
00-Docs/
  index.html
  BRAND.md            Logo rules, palette, type, voice
  assets/
    css/style.css
    js/main.js
    img/              logo-mark, logo-lockup, logo-v2, footer, voltage-energy
```

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000 — or use the VS Code **Live Server** extension.

## Deploy

GitHub's simple "deploy from a branch" setting only accepts the repo root or a folder named
exactly `docs`, so this site publishes through a workflow instead:
`.github/workflows/pages.yml` uploads `00-Docs/` on every push to `main`.

One-time setup: **Settings → Pages → Source: GitHub Actions**. After that, pushing to `main`
publishes automatically; watch progress under the Actions tab.

Live at `https://bibhu342.github.io/vividflow-studio/`.

## Conventions

- Colours come only from the custom properties in `:root` (`assets/css/style.css`). Never
  hard-code a hex elsewhere. See `BRAND.md`.
- Page background stays `#000000` — the logo artwork shows a seam on anything lighter.
- Mobile-first; every layout must hold at 360px.
- All motion respects `prefers-reduced-motion`.
- Nothing on this site is invented. No fake clients, no made-up statistics. If a fact can't
  be sourced, it doesn't ship.

## Content status

Groundtruth links to the live concept site. **Campaign Set** and **Café promo** are marked
placeholders — they need real images before launch. The five files in `Social Creative/`
would fill Campaign Set.
