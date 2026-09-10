# CLAUDE.md — VividFlow Studio site

Context for Claude Code working in this repo.

## What this is

The VividFlow Studio marketing site. Static, hand-written, deployed to GitHub Pages
from `main` at the repo root. Owner: Bibhudendu Behera (`bibhu342`).

## Non-negotiables

1. **No build step.** No npm, no bundler, no framework, no CSS library. If a change
   needs tooling, it's the wrong change.
2. **No fabricated content.** No invented client names, logos, testimonials,
   statistics, or case-study results. If a claim can't be sourced, it doesn't ship.
   This is a stated brand principle, not a stylistic preference.
3. **Colours come from `:root`** in `assets/css/style.css`. Never hard-code a hex
   value elsewhere. See `BRAND.md` for the locked palette.
4. **Motion respects `prefers-reduced-motion`.** Every animation needs the guard.
5. **Mobile-first.** Verify at 360px before anything else.

## Structure

```
index.html              Single page, semantic sections with id anchors
assets/css/style.css    All styles. Organised by section, commented headers.
assets/js/main.js       Scroll reveal, sticky nav, year. Vanilla, IIFE, no deps.
BRAND.md                Palette, type, voice
README.md               Setup and deploy
```

## Conventions

- Fluid type via `clamp()`. No fixed-pixel headings.
- Class naming is loose BEM: `.block`, `.block__element`, `.block--modifier`.
- Add `.reveal` to anything that should fade in on scroll — the observer picks it
  up automatically and staggers siblings.
- Section rhythm uses `--sec`; horizontal gutter uses `--gut`. Don't invent new
  spacing values without a reason.

## Voice when writing copy

Direct, technical, no marketing filler. Read `BRAND.md` before touching any text.
Short sentences beat long ones. Concrete beats abstract.

## Local preview

```bash
python -m http.server 8000
```

## Roadmap context

v1 is deliberately a fast, high-craft static page. A WebGL scroll experience is
planned for v2 — after client work exists, not before. Don't pre-build it.
