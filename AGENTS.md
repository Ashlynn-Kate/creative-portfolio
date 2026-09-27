# Portfolio — Project Context

A portfolio website showcasing all of [NAME]'s creative work. It must be beautiful, easy to extend, and maintainable by a non-technical owner.

## People
- **Owner:** [NAME], an artistic director and multidisciplinary artist. She is non-technical and will maintain the site through the **Codex desktop app** (plain-language requests), not by editing code.
- **Developer:** her husband, who does the initial setup and technical support (uses Claude Code on WSL).
- **Owner's machine: regular Windows, not WSL.** Give her Windows (PowerShell) commands and paths, never Linux/macOS ones.

## Content scope
The site covers every creative discipline, now and in the future:
- Dance and choreography
- Set design (photos of sets)
- Video projects and directing
- Photography
- Acting
- Any future category. Categories must be data-driven, never hardcoded.

## Hosting and URL
- GitHub Pages, **project site**: repo `Ashlynn-Kate/creative-portfolio`, served at `https://ashlynn-kate.github.io/creative-portfolio/`.
- A custom domain (e.g. herName.com) will likely be added later. **Make the base path configurable**: `/creative-portfolio/` now, `/` after the custom domain is attached.
- The site is static only: no server, no database. Any forms must use a third-party service (e.g. Formspree).
- Deploy through GitHub Actions to Pages.
- The site must **not** be discoverable through search engines. It is public to anyone with the link, but hidden from search results.
  - Every page includes `<meta name="robots" content="noindex, nofollow">` (set once in the shared layout).
  - Do not generate a sitemap.
  - Do not block crawlers in `robots.txt`. Crawlers must be able to load a page to see its `noindex` tag, and a blocked URL can still appear in results.
  - Still include a good `<title>`, meta description, and Open Graph tags so shared links show a proper preview.
  - Hiding from search is not privacy. Anyone with the link can view the site.

## Content source: Notion as the CMS
- Her content lives in Notion. The developer has **guest access** to her pages.
- **Now:** initialize the site from her Notion content (via Notion MCP/connector or an export).
- **Later:** a build script pulls a Notion "Projects" database through the Notion API (integration token stored as a GitHub secret) and rebuilds the site on a schedule and on manual dispatch.
- **Important:** Notion file and image URLs are signed and **expire after about an hour**. The build must **download images** into the build output; never hotlink Notion URLs.
- Suggested database fields: Title, Slug, Category (multi-select), Date, Role, Description, Cover image, Gallery images, Video URL, High-res link (Google Drive), Published (checkbox), Order.

## Media rules
- **Images:** generate web versions automatically (WebP, about 2000px on the long edge, roughly 200–400 KB each). The owner must never need to compress anything by hand.
- Each displayed image is the downscaled web version, and it **links to its full-resolution original on Google Drive**. Clicking the image opens the Drive file. Link only; never embed or hotlink Drive images.
- **Video (v1):** show a thumbnail image that **links to the video file on Google Drive**. No embedded players yet.
- **Video (later):** switch to unlisted YouTube embeds. Keep the video markup in one component so this is an easy swap.
- Don't commit video files to the repo.
- GitHub limits: about 1 GB per site, 100 MB per file (warning at 50 MB), 25 MB per file via web upload.

## Design
- Goal: **as beautiful as possible**. Editorial and distinctive, not templated. It is a portfolio for an art director, so the site itself demonstrates her taste.
- Signature component: a **peek-behind swipe carousel**. The current image sits in the foreground with the previous (and next) image peeking behind it; swipe or drag left and right (plus arrow keys and buttons) to cycle. It must work on touch and desktop and respect `prefers-reduced-motion`.
- Responsive and mobile-first; fast loading (lazy-load images, correct sizes).
- **Design scratchpad (now): Notion.** The owner sketches ideas, references, and layout notes in Notion. Treat those notes as design direction.
- **Later:** she may wireframe in **Figma**. Figma is not used yet. Once it is, implement design changes from Figma frames when referenced.

## Tech stack
- **Framework: Astro** (decided 2026-09-27). Pages and components are `.astro` files: plain HTML and CSS, plus small vanilla JS scripts for interactivity (e.g. the carousel).
- **TypeScript** for logic only: the Notion sync script and content schemas. Markup and styles stay plain HTML/CSS.
- **No site-wide UI framework** (React, Vue, etc.). If one interactive piece truly needs it, add it as a single Astro island on that page only.
- Code should be readable and well commented so Codex can make safe edits later.
- **Local preview:** `npm run dev` (live, `http://localhost:4321/creative-portfolio/`); `npm run build` then `npm run preview` for the final check. Human-facing steps live in `README.md`.

### Project structure
- `src/content/cases/*.yaml`: one case study each, shown on the home page by `order`. `src/content/pages/<case>/*.yaml`: detail pages under a case (`/work/<case>/<page>/`).
- Content is a list of **blocks** (`heading`, `text`, `image`, `grid`, `carousel`, `details`, `video`, `pages`), defined in `src/content.config.ts` and rendered by `src/components/Blocks.astro`. This mirrors Notion's block model so a future Notion sync maps onto it. Add new block types in both files.
- Images live in `src/assets/images/<case>/` and are referenced by that relative path. Never put images in `public/`; they would skip optimization.
- Disciplines are free-form tags on each case; discipline pages (`/discipline/<slug>/`) are generated from them.
- `src/lib/site.ts`: site name, tagline, and the `url()` helper. **Always build internal links with `url()`** so the base path keeps working.
- `src/components/VideoLink.astro`: the only place video markup lives (Drive thumbnail now, YouTube later).
- `src/components/Carousel.astro`: the peek-behind carousel.
- Run `npm run check` and `npm run build` after changes; both must pass with no errors.

### Decision record: why Astro
**Context.** A content-heavy static site on GitHub Pages, with a build step that pulls from Notion and resizes images. The only interactive piece today is the carousel. Future interactivity is unknown. The owner is non-technical and edits through Codex.

**Options considered.**
- *Raw HTML/CSS/JS:* no dependencies, but we would hand-build the Notion pull, image resizing, per-project page generation, and base-path handling.
- *React (JSX/TSX, e.g. Next.js or Vite):* very flexible, but ships a JS runtime on every page and adds concepts (state, hooks, hydration) that make AI edits riskier for a non-technical owner. Overkill for a content site.
- *Astro (chosen).*

**Pros.**
- Outputs plain static files, which is exactly what GitHub Pages serves.
- Built-in image pipeline (WebP, resizing) covers the media rules with no manual work.
- Content collections make categories and projects data-driven.
- One `base` setting handles `/creative-portfolio/` now and `/` after the custom domain.
- `.astro` files read like HTML, so Codex can edit them safely.
- Ships zero JS by default, so pages load fast.
- Leaves room to grow: islands allow a React/Svelte/Vue component on one page only; View Transitions give app-like page changes; GSAP/Motion work for richer animation.

**Cons / trade-offs.**
- Needs Node.js and a build step. The site can't be edited by opening an HTML file directly.
- Dependencies need occasional upgrades (Astro major versions).
- Smaller ecosystem than React for ready-made complex UI components.
- One more thing to learn compared to raw HTML.

**Revisit this decision if:**
- The site needs server features (logins, a database, saving user data). GitHub Pages can't do that. Move hosting to Netlify/Vercel first; Astro supports server rendering there, so a rewrite is likely unnecessary.
- Most pages become heavily interactive, app-like experiences. A React-based framework may then fit better.
- Astro's build or image handling can't keep up with the media library size or the Notion sync.
- Maintaining Node and dependencies becomes a real burden relative to the site's needs.

## Documentation split
- `README.md` is for **humans**: setup, how to view the site locally, how to make changes, how publishing works. Plain language, no jargon.
- `AGENTS.md` (this file) is for **agents**: project context, coding rules, design rules, decisions.
- When setup steps, commands, or the publishing flow change, update `README.md` in the same change.

## Guidance for AI agents working in this repo
- The owner is non-technical. When she asks for a change, make it, explain it briefly in plain language, and avoid jargon.
- Don't restructure the content pipeline or change the base path without being asked.
- Preview changes locally before committing when possible.
- **After every change, remind the human how to see it:** give the exact command (`npm run dev`) and the link (`http://localhost:4321/creative-portfolio/`), and name the page to look at. If a dev server is already running, just say which page to refresh. Before a push, suggest the final check (`npm run build`, then `npm run preview`).