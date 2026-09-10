# VividFlow Studio

The studio site. Launch pages, product video and ad creative for AI and data products.

**Live:** https://bibhu342.github.io/vividflow-studio/

## Stack

Hand-written HTML, CSS and vanilla JavaScript. No build step, no framework, no
dependencies. Google Fonts is the only external request.

```
index.html
assets/
  css/style.css
  js/main.js
BRAND.md          Locked palette, type scale and voice
CLAUDE.md         Context for Claude Code
```

## Run locally

Any static server works:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or use the VS Code **Live Server** extension.

## Deploy

GitHub Pages, straight from `main`:

1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `(root)` → **Save**

Pushes to `main` publish automatically in about a minute.

## Conventions

- Mobile-first. Every layout must hold at 360px.
- Fluid type via `clamp()` — no fixed pixel headings.
- All motion respects `prefers-reduced-motion`.
- Colours come from the custom properties in `:root`. Never hard-code a hex
  outside that block.
- No claim on this site is made up. If a number or a client can't be sourced,
  it doesn't ship.

## Roadmap

- [ ] Case study pages for each work item
- [ ] Real project imagery from `04-Brand-Assets`
- [ ] Logo mark (currently a CSS gradient placeholder)
- [ ] Custom domain — `vividflow.studio`
- [ ] v2: WebGL scroll experience
