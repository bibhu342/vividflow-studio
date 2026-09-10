# Bibhudendu Behera — portfolio rebuild prompt

Paste this whole thing, unedited, into Claude Code from inside the `vividflow-studio` repo.

---

Act as an award-winning UI/UX designer and elite frontend developer. Rebuild my portfolio site from scratch in this repository.

**The content below is real and already written. Use it as given. Do not replace it, do not paraphrase it into marketing copy, do not invent new sections, and do not add any statistic, client, testimonial or claim that is not in this document.** What changes is the design — the content stays.

## 0. Who this is for

Bibhudendu Behera — AI Engineer. Ten years of systems thinking from operations leadership, now building production ML and data engineering. Based in Bangalore, Karnataka, India. Currently seeking AI/ML Engineer roles, and taking freelance creative work through VividFlow Studio.

The site has to work for two readers: a hiring manager scanning for production ML experience, and a freelance client checking whether he can build. Same page, one clear hierarchy — engineer first.

## 1. Visual design system

Warm, light, tactile, soft-3D. Deliberately **not** a dark neon site.

### 1.1 Colour — exact values, no substitutions

| Role | Hex | Use |
|---|---|---|
| Canvas | `#F1EBE1` | Page background — warm bone |
| Canvas raised | `#FBF8F3` | Cards, panels |
| Canvas sunken | `#EBE1D7` | Alternating section bands |
| Ink | `#2A2B38` | Headings |
| Body | `#5F5C6B` | Paragraph text |
| Muted | `#94909E` | Labels, meta, captions |
| **Accent** | `#F08A5D` | Buttons, links, active states — warm coral |
| Accent deep | `#DE7444` | Hover |
| Accent wash | `#FBDCCB` | Tints, skill pills, badges |
| Deep band | `#031F46` → `#052C6D` | ONE full-bleed dark section only |
| Holographic | `#4FD8F5` | Only inside that band |
| Hairline | `#E2D9CD` | Borders, dividers |

Coral is the only accent on light ground — never two competing. The navy band appears exactly once. Cyan exists only inside it.

Check coral against bone for contrast: if `#F08A5D` on `#F1EBE1` falls below 4.5:1 for any text, use `#C25E30` for text and keep `#F08A5D` for fills only.

### 1.2 Typography

- **Display:** `Outfit` 600/700 — Google Fonts, weights 300;400;500;600;700
- **Body:** `Inter` 400/500
- Fallbacks on both: `system-ui, -apple-system, sans-serif`
- H1 `clamp(38px, 6.2vw, 74px)` / 700 / `-0.035em` / `1.05`
- H2 `clamp(28px, 4.2vw, 48px)` / 600 / `-0.03em` / `1.1`
- H3 `clamp(18px, 2.3vw, 24px)` / 600 / `-0.02em`
- Body `clamp(15px, 1.7vw, 17.5px)` / `1.68`
- Eyebrow `12px` / 500 / `0.18em` / uppercase / coral, preceded by a 26px coral rule
- All fluid via `clamp()`. No fixed-pixel headings.

### 1.3 Shape and depth

- Card radius `20px`, buttons `999px`, inputs `14px`, skill pills `999px`
- Warm diffuse shadows, never grey: `0 18px 40px -22px rgba(120, 84, 60, 0.28)`
- Borders `1px solid #E2D9CD`
- Cards padded `34px 30px`; sections `clamp(80px, 11vw, 140px)` vertical, `6vw` gutter
- No glassmorphism, no gradient-mesh backgrounds, no left-border accent stripes

## 2. The 3D

Original soft-clay isometric scenes rendered live with Three.js. Matte pastel materials, rounded bevels, soft shadows. Build these three — original geometry, no downloaded models, no assets copied from any other site.

**Scene A — hero: the data pipeline.** An isometric conveyor on a coral base plate. Rough grey clay blocks enter, pass through three rounded modules — a funnel (extract), a sieve (clean), a stacked tray (structured output) — and leave as clean coloured blocks. Continuous ~14s loop. Cursor position tilts the scene ±6° on both axes, damped at 0.06 lerp.

**Scene B — projects: three small objects.** One per project card — a document stack, a spider-web node cluster, a spreadsheet tile. Gentle bob and slow Y-rotation, phase-offset so they never sync.

**Scene C — the navy band: quality check.** A holographic cyan wireframe grid with clay blocks passing through; one block lights coral as it's flagged. This is the visual argument for the data-quality background.

**Fallback is mandatory.** No WebGL, or `prefers-reduced-motion`, or viewport under 768px → render a static pre-baked PNG of the same scene in the same slot. The page must be complete with zero WebGL. Never an empty box.

## 3. Sections — content is fixed, use it verbatim

Semantic HTML. Exactly one `<h1>`.

### 3.1 Nav
Fixed, pill-shaped, centred, `top: 20px`, `max-width: 1000px`. Raised-canvas background at 82% opacity, `backdrop-filter: blur(16px)`, hairline border. Items: Work · Skills · Experience · Studio · Contact. Right: coral "Get in touch". Hamburger under 860px with `aria-label` and `aria-expanded`.

### 3.2 Hero
Two columns `1.05fr 1fr`; single column under 900px with 3D above copy.

- H1: **AI Engineer | 10 Years of Systems Thinking + Production ML Engineering**
- Sub: *AI Engineer with 10 years of systems thinking from operations leadership, now building production ML and data engineering solutions.*
- Buttons: coral "Get in touch", outlined "View projects", text-link "Download résumé"
- Availability pill: *Open to AI/ML Engineer roles · Bangalore · open to relocation*
- Scene A right column

### 3.3 Achievements strip
Six figures on canvas-sunken, count up once on first view:

`5+` Production-grade AI/ML projects · `13+` Open-source repositories · `20%` Operational efficiency improvement · `100K+` Interactions managed monthly · `4` Google certifications · `Multiple` Recognition awards

### 3.4 Featured projects
Three cards, equal columns, stacking under 820px. Each: title, one-line descriptor in coral, description, tech-stack pills, links to repo and live demo. One Scene B object per card, top-right. Lift `-4px` on hover.

**CSV-Cleaner-Pro** — *Production ETL Engine | 10K+ Validation Rules | ML-Ready Data Pipelines*
Automated data quality system transforming raw CSVs into ML-ready datasets. Handles up to 500K rows with batch processing and exports to CSV, JSON, Parquet formats.
Python • Pandas • NumPy • Streamlit • FastAPI • Docker • GitHub Actions

**Web-Extractor-Pro** — *Fault-Tolerant Web Scraping | Data Ingestion at Scale | ML Dataset Builder*
Scalable web data extraction system with production-grade fault tolerance, rate limiting, and schema adaptation.
Python • BeautifulSoup • Requests • Pandas • asyncio • Docker

**PDF-Parser-Pro** — *AI-Powered Document Intelligence | Multi-Format Parsing | Structured Data Extraction*
Production document parsing system with OCR pipeline, ML-powered table detection, and automatic key-value pair extraction.
Python • PyPDF2 • Tesseract OCR • OpenCV • Pandas • Streamlit • FastAPI

### 3.5 Technical skills
Eight groups as cards in a responsive grid; each skill a small pill on accent-wash. Group headings in ink, pills in body colour.

**Programming & Development** — Python (Production-grade) • SQL (Advanced) • Git/GitHub • REST API Design • Shell Scripting
**Machine Learning & AI** — scikit-learn • TensorFlow • PyTorch • Feature Engineering • Model Selection • Evaluation Metrics • Cross-Validation • Hyperparameter Tuning
**Generative AI & LLMs** — LangChain • OpenAI API • Google Gemini APIs • Embeddings & Vector Search • Prompt Engineering • Vector Databases (Pinecone, Chroma)
**Data Engineering** — Pandas • NumPy • ETL Pipeline Design • Data Quality Frameworks • Data Validation & Cleaning • Schema Design • JSON/CSV/Parquet Processing
**MLOps & Production** — FastAPI • Docker • CI/CD (GitHub Actions) • Model Packaging & Versioning • Error Handling & Logging • Testing (Unit, Integration)
**Cloud & Google Ecosystem** — Google Cloud Platform (GCP) • BigQuery • Vertex AI • Cloud Storage • Service Deployment
**Visualization & Tools** — Streamlit • Matplotlib • Seaborn • Plotly • Excel (Advanced) • Power BI
**Web & Automation** — Web Scraping (BeautifulSoup, Scrapy, Selenium) • Process Automation • API Integration • Workflow Optimization

### 3.6 Experience — the navy band
The single full-bleed deep section. Two columns: timeline left, Scene C right. Text goes `#F1EBE1` inside this band; coral stays the accent.

**Assistant Team Leader | Operations & Data Engineering** — IntouchCX · Bangalore, India · 2016–2025 (9 years)
Managed 25+ analysts processing 100,000+ customer interactions monthly with 90%+ CSAT scores for Fortune 500 gaming and entertainment companies.
- Designed data quality frameworks reducing onboarding inefficiencies by 20%
- Built automated reporting workflows processing large-scale datasets
- Conducted weekly executive analytics reviews (WBRs)
- Implemented A/B testing and root cause analysis methodologies
- Managed multi-client operations

**Brand Expert** — Helpchat · Bangalore, India · 2015–2016 (9 months)
High-volume customer operations (100+ daily interactions, 90%+ CSAT).

### 3.7 VividFlow Studio — creative work
A secondary section, clearly subordinate to the engineering work, but with its own real portfolio.

Intro line: *Alongside engineering work I run VividFlow Studio — freelance creative for AI and data companies.*

**Three service cards, compact, no sales pitch:**

**Launch pages** — Hand-built HTML, CSS and JavaScript, or Webflow when a CMS is needed.
**Product film** — Directed shot by shot and chained for continuity; scripts and start frames before anything renders.
**Ad creative** — Ad sets built to one locked reference so every asset in a set matches.

**No prices anywhere on this site.** Quote per scope.

**Then a four-item work grid.** Each card: type label in coral, year in muted, title, one-line description, image or preview, and a link where one exists. Every item is a real piece — do not add, rename or embellish any of them.

| Title | Type | Year | Description | Link |
|---|---|---|---|---|
| **Groundtruth** | Concept / SaaS Landing Page | 2026 | Landing page concept — label quality tooling for AI teams | `getgroundtruth.webflow.io` |
| **Voltage Energy** | Concept / Product Visual | 2026 | Energy drink can product render with gold liquid splash | — |
| **Campaign Set** | Concept / Social Creative | 2026 | Matched social creative set | — |
| **Café promo** | Video | 2026 | In production | — |

Mark "Café promo" with an *In production* badge on accent-wash rather than a live link. Where an item has no image yet, render a clearly marked placeholder tile in canvas-sunken — never a stock photo, never an invented render.

### 3.8 Education & certifications
Two columns on canvas-sunken.

**B.Tech, Electronics & Telecommunications** — Biju Patnaik University of Technology (BPUT), Odisha, India · Graduated 2013

Google AI Essentials (2025) · Google Data Analytics Professional Certificate (2025) · Learn SQL Basics for Data Science, UC Davis (2025) · Python for Everybody Specialization, University of Michigan (2025)

### 3.9 Contact
Centred. H2 *"Let's talk."* Real details, each an actionable link:

Email bibhu342@gmail.com · Phone +91 70224 03111 (WhatsApp) · LinkedIn linkedin.com/in/bibhudendu-behera-b5375b5b · GitHub github.com/bibhu342 · Bangalore, Karnataka, India · Résumé PDF download

Below, in muted: *Seeking AI/ML Engineer roles. Immediate availability, open to relocation, open to visa sponsorship.*

A soft coral radial wash bleeds up from the bottom edge.

### 3.10 Footer
Copyright, GitHub, LinkedIn, Email.

## 4. Motion

- **Entrance:** `opacity 0→1`, `translateY(22px)→0`, `700ms`, `cubic-bezier(.2,.7,.3,1)`, IntersectionObserver `threshold: 0.12`, unobserved after firing. Siblings stagger 70ms, capped at 5.
- **Buttons:** `translateY(-2px)` + deeper shadow on hover, `scale(0.97)` active, `220ms`.
- **Nav links:** underline `width 0→100%` from left, `240ms`.
- **Nav bar:** gains background, blur, border past `24px` scroll, `300ms`.
- **Counters:** 1400ms ease-out, once.
- **3D:** continuous loops, not scroll-bound; pointer parallax damped `0.06`.
- **`prefers-reduced-motion: reduce` disables everything** — reveals resolve instantly, 3D and counters freeze at final state. Not optional.

## 5. Technical

- **Vanilla HTML, CSS, JavaScript. No build step, no framework, no bundler.** Deploys to GitHub Pages from `main` at repo root.
- Three.js from CDN via `importmap`, exact pinned version. Lazy-init each scene on first intersection — never all three at load.
- Files: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/js/scenes.js`, `assets/img/`.
- Every colour a custom property on `:root`. No hex outside that block.
- **Mobile-first; verify 360px first.** No horizontal scroll at any width. Tap targets ≥44px.
- Images `webp`, `loading="lazy"` below the fold, explicit `width`/`height`.
- Accessibility: visible focus rings, `alt` on every image, `aria-label` on icon-only controls, body contrast ≥4.5:1.
- SEO: one `<h1>`, descriptive `<title>` and meta description, Open Graph tags.

## 6. Rules

- **No invented content.** Every fact, figure and project description above comes from the existing site. If something is missing, write `[PLACEHOLDER]` — never fill it in.
- Generate all 3D from Three.js primitives. Do not download, hotlink or copy assets from any other website.
- Update `BRAND.md` to this palette and type system; update `CLAUDE.md` if any convention here contradicts it.
- Add no dependencies beyond Three.js. Do not refactor or add features beyond this spec.
- Before reporting done: run a local server and check 360px, 768px, 1440px. Confirm no horizontal scroll, no clipped text, WebGL fallback renders, reduced-motion path renders.
- If anything here conflicts with the repo, stop and ask rather than guessing.

Execute meticulously. The warmth, the spacing and the credibility of the real content are what make this work — not the 3D.
