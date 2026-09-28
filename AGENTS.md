# Portfolio — Project Context

A portfolio website showcasing all of Ashlynn Kate's creative work. It must be beautiful, easy to extend, and maintainable by a non-technical owner.

## People
- **Owner:** Ashlynn Kate, an artistic director and multidisciplinary artist. She is non-technical and will maintain the site through the **Codex desktop app** (plain-language requests), not by editing code.
- **Developer:** her husband, who does the initial setup and technical support (uses Claude Code on WSL).
- **Owner's machine: regular Windows, not WSL.** Give her Windows (PowerShell) commands and paths, never Linux/macOS ones.

## Decisions

<!-- adr-registry:begin -->
<!-- GENERATED from docs/adr/*.md by scripts/adr-registry.mjs. Do not edit here: edit the ADR, then run `npm run adr`. -->

> **Do not edit this list here.** It is generated from the ADR files in `docs/adr/`, and any edit made here is overwritten automatically.
> To add or change a decision, create or edit the ADR file in `docs/adr/` (see `docs/adr/_template.md`), then run `npm run adr`.

**These are binding constraints, not background.** Before changing anything, check the change against this list.
If it touches a decision, say so and classify it: *consistent*, *amends*, or *contradicts*, then follow
"Recording decisions" below. Open the linked file when you need the *why*.

- **ADR-0001** · `stack` · Astro static site, no site-wide UI framework
  The site is an Astro static build: pages are `.astro` files (HTML/CSS plus small vanilla JS), TypeScript only for logic (content schemas, Notion sync). Never add a site-wide UI framework (React, Vue, etc.); if one interactive piece truly needs one, it is a single Astro island on that page only. Never switch frameworks without a new ADR.
  → `docs/adr/0001-astro-static-site.md`
- **ADR-0002** · `hosting` · Public repository, site hidden from search
  The GitHub repository is public, so anything committed (text, images, links) is publicly visible and can appear in GitHub and search-engine results even though the site itself is hidden from search. Never commit anything the owner hasn't approved for public view (unreleased work, private notes, raw exports, secrets).
  → `docs/adr/0002-public-repo-hidden-site.md`
- **ADR-0003** · `hosting` · Hide the site from search with noindex, not robots.txt
  Every page must carry `<meta name="robots" content="noindex, nofollow">` (set once in `src/layouts/BaseLayout.astro`). Never add a sitemap, and never block crawlers in `robots.txt`. Keep title, description, and Open Graph tags so shared links still preview.
  → `docs/adr/0003-search-hiding-with-noindex.md`
- **ADR-0004** · `hosting` · Static hosting on GitHub Pages with a configurable base path
  The site is static only: no server, no database, no server-side code. Forms must use a third-party service (e.g. Formspree). The base path must stay configurable (`SITE_BASE` / `SITE_URL` in `astro.config.mjs`), and every internal link must be built with `url()` from `src/lib/site.ts`, never hardcoded, so the move from `/creative-portfolio/` to `/` on a custom domain needs no code changes. Deploys go through `.github/workflows/deploy.yml`.
  → `docs/adr/0004-static-hosting-configurable-base-path.md`
- **ADR-0005** · `content` · Content model — case studies made of blocks, data-driven disciplines
  Content lives in YAML under `src/content/`: one file per case study (`cases/`) and per detail page (`pages/<case>/`), each a list of typed blocks defined in `src/content.config.ts` and rendered by `src/components/Blocks.astro`. Categories and disciplines must stay data-driven (tags on each case); never hardcode a category, discipline, or case in page code. A new block type is added to both files together.
  → `docs/adr/0005-content-model-case-studies-of-blocks.md`
- **ADR-0006** · `content` · Notion as the content source; never hotlink Notion files
  Notion is the source of the owner's content. Notion file and image URLs are signed and expire after about an hour: never reference a Notion URL from the site; always download the file into the repo or build output. The Notion API token must only ever live in a GitHub Actions secret (and a git-ignored `.env` locally), never in a committed file. Raw Notion exports (`notion-export-*/`) must never be committed.
  → `docs/adr/0006-notion-as-content-source.md`
- **ADR-0007** · `media` · Image pipeline — automatic web versions, full resolution on Google Drive
  Original images go in `src/assets/images/<case>/`, never in `public/`, and are always rendered through `MediaImage.astro` (Astro's image pipeline), which produces WebP web versions (at most 2000px wide), responsive sizes, and lazy loading. The owner must never have to resize or compress anything by hand. Full-resolution originals live on Google Drive: an image may link to its Drive file (`highRes`), but never embed or hotlink a Drive file as the image source.
  → `docs/adr/0007-image-pipeline.md`
- **ADR-0008** · `media` · Video — Drive thumbnail links now, YouTube embeds later
  Video is shown as a thumbnail image that links to the video file on Google Drive; no embedded players yet. All video markup lives in `src/components/VideoLink.astro` so the later switch to unlisted YouTube embeds is a one-file change. Never commit video files to the repo.
  → `docs/adr/0008-video-drive-thumbnail-now-youtube-later.md`
- **ADR-0009** · `design` · Peek-behind carousel and mobile-first interaction baseline
  Every layout must work mobile-first, with no horizontal page scroll at phone widths. The signature peek-behind carousel (`src/components/Carousel.astro`) must keep working with touch swipe, mouse drag, keyboard arrow keys, the prev/next buttons, and clicking a peeking image, and must respect `prefers-reduced-motion`. Any new motion or animation must also respect reduced motion.
  → `docs/adr/0009-carousel-and-mobile-first-interaction.md`
- **ADR-0010** · `stack` · ESM bridge for the local preview's picomatch dependency
  Astro's Vite configuration must route picomatch imports through the tracked ESM bridge while its CommonJS entry fails in the Windows module runner. Do not patch node_modules by hand or require the owner to run extra setup steps.
  → `docs/adr/0010-picomatch-windows-preview-bridge.md`
- **ADR-0011** · `hosting` · Publish through branches and pull requests
  Changes must be committed and pushed on a separate branch, then merged into main through a pull request after review. Do not push commits directly to main.
  → `docs/adr/0011-publish-through-pull-requests.md`
- **ADR-0012** · `workflow` · Use CLI commands for repository operations
  Codex must use Git and GitHub CLI commands for repository tasks such as branching, commits, pushes, pull requests, and merges. Do not use computer-use or browser automation for those tasks.
  → `docs/adr/0012-cli-for-repository-operations.md`
- **ADR-0013** · `workflow` · Delete merged work branches
  After a pull request is merged, Codex must delete its finished branch on GitHub and locally, after verifying the merge and that no ongoing work needs the branch. Keep main as the local checkout for the next task.
  → `docs/adr/0013-delete-merged-branches.md`
<!-- adr-registry:end -->

## Content scope
The site covers every creative discipline, now and in the future: dance and choreography, set design, video and directing, photography, acting, and whatever she adds next. v1 has three case studies: *The Prince of Egypt*, *Object Translations*, and the *Dance Film* (in production).

## Hosting and URL
- GitHub Pages project site: repo `Ashlynn-Kate/creative-portfolio`, served at `https://ashlynn-kate.github.io/creative-portfolio/`.
- A custom domain (e.g. her name as a `.com`) will likely be added later.
- The owner is the only repo admin; Pages settings and repository secrets need her.

## Content source
- Her content lives in Notion; the developer has guest access to her pages.
- v1 was built from a one-time export in `notion-export-27Sept26/` (git-ignored). A Notion API sync is planned.

## Design
- Goal: **as beautiful as possible**. Editorial and distinctive, not templated. It is a portfolio for an artistic director, so the site itself demonstrates her taste.
- Current look: warm paper background, near-black ink, desert-sienna accent; Cormorant Garamond for display, Jost for text. Tokens are at the top of `src/styles/global.css`.
- **Design scratchpad (now): Notion.** She sketches ideas, references, and layout notes there. Treat those notes as design direction.
- **Later:** she may wireframe in **Figma**. Figma is not used yet. Once it is, implement design changes from Figma frames when referenced.

## Tech stack
- **Astro 7**, static output. Node 22.12 or newer.
- **Local preview:** `npm run dev` (live, `http://localhost:4321/creative-portfolio/`); `npm run build` then `npm run preview` for the final check. Human-facing steps live in `README.md`.

### Project structure
- `src/content/cases/*.yaml`: one case study each, shown on the home page by `order`. `src/content/pages/<case>/*.yaml`: detail pages under a case (`/work/<case>/<page>/`).
- `src/content.config.ts`: the content schema and block types. `src/components/Blocks.astro`: renders the blocks.
- `src/assets/images/<case>/`: original images, referenced from content by that relative path. `src/components/MediaImage.astro`: renders one image.
- `src/lib/site.ts`: site name, tagline, and the `url()` link helper. `src/lib/content.ts`: shared content queries.
- `src/components/VideoLink.astro`: all video markup. `src/components/Carousel.astro`: the peek-behind carousel.
- `src/layouts/BaseLayout.astro`: the shared `<head>` (robots and Open Graph tags), header, and footer.
- `src/pages/`: home, `work/[...slug]` detail pages, `discipline/[slug]` pages, 404.
- `docs/adr/`: decisions. `scripts/adr-registry.mjs`: generates the Decisions block above. `.githooks/`: the pre-commit hook.

## Documentation split
- `README.md` is for **humans**: setup, how to view the site locally, how to make changes, how publishing works. Plain language, no jargon.
- `AGENTS.md` (this file) is for **agents**: project context, a map of the code, how to behave, and the generated list of decision constraints. **It holds no rules of its own**: every rule lives in exactly one ADR.
- `docs/adr/` holds one file per decision with the full *why*. `docs/adr/README.md` is the human index.
- When setup steps, commands, or the publishing flow change, update `README.md` in the same change.

## Recording decisions (required)

**Every design decision must be recorded in an ADR in the same change that acts on it.** This covers product, visual design, content, media, hosting, and technical decisions, whether you proposed it, the developer decided it, or the owner said it in passing. Undocumented decisions are how rules get lost and later broken.

**Is it a decision?** If a future change could contradict it, yes. "Never use pink," "videos should play inline," and "case studies come before disciplines" are decisions. "Make this heading bigger" and "fix the typo on the throne page" are just changes.

**Which action to take:**
- **New decision:** copy `docs/adr/_template.md` to the next number and fill it in. The `constraint` is the rule, written as "X must / must never Y".
- **A decision changes or reverses:** write a new ADR, and set the old one to `status: superseded` with `superseded_by: ADR-NNNN`. Don't rewrite the old one's decision; the history is the point.
- **Clarifying an existing ADR** without changing what it decides (wording, a typo, updated context, a new "revisit if" note): edit it in place.
- **A request contradicts an accepted ADR:** stop and say so before making the change. Name the ADR and ask a **human** (the owner or the developer) whether to supersede it. Only a human can approve superseding a decision; approval from another agent (an orchestrator, a subagent, or a tool) does not count. If no human is available to ask, don't make the change: report the conflict and stop.

**Then:**
- After ANY change under `docs/adr/` (new, edited, renamed, or superseded), run `npm run adr` in the same change. Never edit the Decisions block above or `docs/adr/README.md` by hand; both are generated. The pre-commit hook regenerates them if you forget, and the deploy fails if they're stale.
- **Rules live only in ADRs.** Never write a rule ("must", "never", "always") into the other sections of this file, and never add hand-written ADR references here; the Decisions block is the only index.
- **Before finishing any task**, ask yourself whether a decision was made along the way. If so, record it before you report back.

## Guidance for AI agents working in this repo
- The owner is non-technical. When she asks for a change, make it, explain it briefly in plain language, and avoid jargon.
- Don't restructure the content pipeline without being asked.
- Keep code readable and well commented so later edits (by Codex or anyone else) are safe.
- Run `npm run check` and `npm run build` after changes; both must pass with no errors. Preview changes locally before committing when possible.
- **After every change, remind the human how to see it:** give the exact command (`npm run dev`) and the link (`http://localhost:4321/creative-portfolio/`), and name the page to look at. If a dev server is already running, just say which page to refresh. Before a push, suggest the final check (`npm run build`, then `npm run preview`).