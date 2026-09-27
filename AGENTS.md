# Portfolio — Project Context

A portfolio website showcasing all of Ashlynn Kate's creative work. It must be beautiful, easy to extend, and maintainable by a non-technical owner.

## People
- **Owner:** Ashlynn Kate, an artistic director and multidisciplinary artist. She is non-technical and will maintain the site through the **Codex desktop app** (plain-language requests), not by editing code.
- **Developer:** her husband, who does the initial setup and technical support (uses Claude Code on WSL).
- **Owner's machine: regular Windows, not WSL.** Give her Windows (PowerShell) commands and paths, never Linux/macOS ones.

## Decisions

<!-- adr-registry:begin -->
<!-- GENERATED from docs/adr/*.md by scripts/adr-registry.mjs. Do not edit here: edit the ADR, then run `npm run adr`. -->

**These are binding constraints, not background.** Before changing anything, check the change against this list.
If it touches a decision, say so and classify it: *consistent*, *amends*, or *contradicts*. Amending or contradicting
a decision needs a new ADR, and the developer must agree first. Open the linked file when you need the *why*.

- **ADR-0001** · `stack` · Astro static site, no site-wide UI framework
  The site is an Astro static build: pages are `.astro` files (HTML/CSS plus small vanilla JS), TypeScript only for logic (content schemas, Notion sync). Never add a site-wide UI framework (React, Vue, etc.); if one interactive piece truly needs one, it is a single Astro island on that page only. Never switch frameworks without a new ADR.
  → `docs/adr/0001-astro-static-site.md`
- **ADR-0002** · `hosting` · Public repository, site hidden from search
  The GitHub repository is public, so anything committed (text, images, links) is publicly visible and can appear in GitHub and search-engine results even though the site itself is hidden from search. Never commit anything the owner hasn't approved for public view (unreleased work, private notes, raw exports, secrets).
  → `docs/adr/0002-public-repo-hidden-site.md`
- **ADR-0003** · `hosting` · Hide the site from search with noindex, not robots.txt
  Every page must carry `<meta name="robots" content="noindex, nofollow">` (set once in `src/layouts/BaseLayout.astro`). Never add a sitemap, and never block crawlers in `robots.txt`. Keep title, description, and Open Graph tags so shared links still preview.
  → `docs/adr/0003-search-hiding-with-noindex.md`
<!-- adr-registry:end -->

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
- The site is public to anyone with the link but hidden from search engines (ADR-0003). The repository itself is public (ADR-0002).

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
- **Astro 7**, static output (ADR-0001). Node 22.12 or newer.
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

## Documentation split
- `README.md` is for **humans**: setup, how to view the site locally, how to make changes, how publishing works. Plain language, no jargon.
- `AGENTS.md` (this file) is for **agents**: project context, coding rules, design rules, and the decision constraints.
- `docs/adr/` holds one file per decision with the full *why*. `docs/adr/README.md` is the human index.
- When setup steps, commands, or the publishing flow change, update `README.md` in the same change.

## Guidance for AI agents working in this repo
- The owner is non-technical. When she asks for a change, make it, explain it briefly in plain language, and avoid jargon.
- Don't restructure the content pipeline or change the base path without being asked.
- **Record decisions as ADRs.** When a choice is made that a future change could violate, copy `docs/adr/_template.md` to the next number and fill it in (the `constraint` is the rule, written as "X must / must never Y"). To change a decision, write a new ADR and mark the old one `superseded`; don't rewrite it.
- **After ANY change under `docs/adr/`** (new, edited, renamed, or superseded ADR), run `npm run adr` in the same change. Never edit the Decisions block above or `docs/adr/README.md` by hand; both are generated. The pre-commit hook regenerates them if you forget, and the deploy fails if they're stale.
- Preview changes locally before committing when possible.
- **After every change, remind the human how to see it:** give the exact command (`npm run dev`) and the link (`http://localhost:4321/creative-portfolio/`), and name the page to look at. If a dev server is already running, just say which page to refresh. Before a push, suggest the final check (`npm run build`, then `npm run preview`).