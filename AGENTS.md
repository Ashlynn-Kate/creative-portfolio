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
- **ADR-0014** · `workflow` · Design lab — explore layouts in throwaway prototypes before implementing
  Layout and visual ideas are explored first as throwaway prototypes in `lab/<topic>/<version>.astro`, served only by `npm run dev` through `src/lab/integration.mjs`. Lab pages must never be built, deployed, or linked from the site, nothing in `src/` may import from `lab/`, and prototypes stay git-ignored (only `lab/README.md` and `lab/example/` are tracked). Exploring is not deciding: when the owner chooses a version ("make it real"), rebuild it properly in `src/` under all other ADRs, record the design decision in an ADR, run the full checks, and open a pull request.
  → `docs/adr/0014-design-lab-explore-before-implementing.md`
- **ADR-0015** · `content` · Mindspace is the title of the dance film
  The dance film case study must be titled “Mindspace” and presented as a dance film; it must not use the song title “Crazy” as the work's title.
  → `docs/adr/0015-mindspace-film-title.md`
- **ADR-0018** · `design` · Site menu and About page
  The site header must use a three-line menu control that reveals links to Work, Disciplines, and About, and the About page must present Ashlynn Kate's biography with a primary portrait in an editorial layout.
  → `docs/adr/0018-site-menu-and-about-page.md`
- **ADR-0030** · `design` · Mindspace role after concept
  Post-tag narrative content in the home-page case studies must align to the wide content column used by Object Translations; Mindspace’s role statement must appear directly after its Concept paragraph in that narrative flow.
  → `docs/adr/0030-mindspace-role-after-concept.md`
- **ADR-0037** · `design` · Home photographic hero sequence
  The home-page hero must present owner-approved photographs as a subtle, full-width asynchronous sequence behind the existing copy, with varied scale and placement, cream-feathered edges, offscreen pausing, and a static reduced-motion presentation.
  → `docs/adr/0037-home-photographic-hero-sequence.md`
- **ADR-0039** · `design` · Home hero copy upper-center placement
  The home-page hero copy must remain left aligned and sit slightly above the vertical center of the photographic collage, with a responsive upward offset.
  → `docs/adr/0039-home-hero-copy-upper-center.md`
- **ADR-0041** · `design` · Balanced neutral paper palette
  The site background must use the balanced neutral-grey paper palette, with matching neutral surface, rule, and hero-feather colors rather than the superseded cool-grey palette.
  → `docs/adr/0041-balanced-neutral-paper-palette.md`
- **ADR-0042** · `design` · Editorial interaction hierarchy
  The interface must reserve rounded pills for discipline filters, present project disciplines as plain linked metadata, use restrained rectangular labels for status, and reserve outlined controls for explicit actions.
  → `docs/adr/0042-editorial-interaction-hierarchy.md`
- **ADR-0044** · `design` · Photo-specific lower-edge feathering in the home hero
  High-contrast home-hero photographs must receive non-destructive, photo-specific lower-edge fades layered with their existing perimeter feathers. These fades must not change image aspect ratios, source pixels, collage positions, or transparency away from the edges.
  → `docs/adr/0044-photo-specific-hero-bottom-feathers.md`
- **ADR-0045** · `design` · Feather the suspended dancer's upper image edge
  The black-unitard suspended-dancer photo in the home hero must have a short, photo-specific top-edge feather that reaches full opacity before the raised hands, while retaining its bottom and perimeter masks and unchanged crop.
  → `docs/adr/0045-suspended-photo-top-feather.md`
- **ADR-0046** · `design` · Feather the black portrait's upper side edges
  The black-turtleneck portrait in the home collage must have a photo-specific upper-side feather that removes visible wall boundaries near the head while preserving the face, lower arms, existing bottom fade, and image geometry.
  → `docs/adr/0046-black-portrait-upper-side-feather.md`
- **ADR-0048** · `content` · Conceptual portrait category and curated role tags
  The site must identify Ashlynn as a creative director, artistic director, choreographer, and performer, and must credit sole and shared project work accurately. Her idea-led portrait work must be categorized as Conceptual portraits; Object Translations must frame photography as part of planning and directing her own shoots from concept through final image, credit her photography in its narrative, and must not use Photography as a browse tag unless she chooses to invite photography commissions.
  → `docs/adr/0048-conceptual-portrait-category-and-role-tags.md`
- **ADR-0049** · `design` · Direct destinations from areas of work
  Home-page areas of work must link directly to their destination rather than through the Works overview. Object Translations must open on its complete concept collection without a separate four-portrait summary, and grouped areas such as Live performance must have focused pages that show their work groups and current projects immediately.
  → `docs/adr/0049-direct-area-destinations.md`
- **ADR-0051** · `design` · Conceptual Portraits introduction and index width
  The Conceptual Portraits all-concepts page must place its series introduction after the title, subtitle, and disciplines but before the concept disclosures. The introduction and concept index must use wider editorial columns so each three-part concept descriptor stays on one line when space permits, without causing horizontal scroll on smaller screens.
  → `docs/adr/0051-concept-series-intro-and-index-width.md`
- **ADR-0054** · `design` · Portrait-led Conceptual Portrait gallery proportions
  Open Conceptual Portraits disclosures on phones must show a 129px object thumbnail beside the title and descriptor, followed by the portrait gallery without a separate full-size object image. At 900px and above, the full-size object and portrait gallery must use a 35/65 column split favoring the portrait; intermediate widths retain the existing layout.
  → `docs/adr/0054-portrait-led-concept-gallery-proportions.md`
- **ADR-0055** · `design` · Consistent vector arrows across the interface
  Decorative arrows used for navigation, paging, action links, and external-link cues must be drawn vector icons rather than Unicode arrow characters, across production pages and design-lab navigation, so mobile platforms cannot render them as emoji. Keep meaningful accessible link text and hide decorative icons from assistive technology.
  → `docs/adr/0055-sitewide-vector-arrow-icons.md`
- **ADR-0056** · `design` · Neutral-grey color for plus and arrow controls
  Decorative plus/minus marks and arrow icons across the site must use a neutral grey rather than the desert-sienna accent, with a lighter neutral-grey variant on dark image surfaces to preserve contrast. Keep sienna for non-control accents.
  → `docs/adr/0056-neutral-control-mark-color.md`
- **ADR-0059** · `content` · Contemporary ballet production listing
  The full-length production directory must list The Gift of Athens before The Prince of Egypt and identify both as Contemporary ballet. Directory descriptors must be stored in content independently of the detailed production-page kickers.
  → `docs/adr/0059-production-directory-order-and-labels.md`
- **ADR-0060** · `design` · Gift of Athens scene captions below thumbnails
  The Gift of Athens must retain the story-first order and community layout of ADR-0058, with all scene-video titles, including Death of Socrates, displayed below their thumbnails.
  → `docs/adr/0060-athens-scene-captions-below.md`
- **ADR-0061** · `design` · Unnumbered Mindspace and Prince headers
  Mindspace and The Prince of Egypt must use unnumbered case-study headers. Mindspace must omit the separate Creative Process section from its current presentation.
  → `docs/adr/0061-mindspace-and-prince-unnumbered-headers.md`
- **ADR-0062** · `design` · Works links to the expanded Live performance page
  Grouped categories on the Works overview must link to their focused area page. Live performance must open with Full-length productions and Individual pieces expanded, retaining their images and individual work links.
  → `docs/adr/0062-works-live-performance-destination.md`
- **ADR-0063** · `stack` · Native dependency bridges for Windows preview
  While Astro's Windows module runner misloads eventemitter3 and esbuild, Vite must route them through tracked ESM bridges that use Node's native CommonJS loader, without manual node_modules patches or additional setup.
  → `docs/adr/0063-windows-preview-dependency-bridges.md`
- **ADR-0065** · `content` · Mindspace narrative contribution and reference note
  Mindspace's contribution must read as a first-person narrative sentence directly after its Concept paragraph, without a My role label or box. Its visual references must carry an understated note that they are inspiration, not images created or photographed by Ashlynn.
  → `docs/adr/0065-mindspace-narrative-contribution-and-reference-note.md`
- **ADR-0066** · `design` · Prince introduction heading and alignment
  The Prince of Egypt introduction must present From story to stage as a section heading above both left-aligned paragraphs, not as a separate side label; its copy must share the opening photograph's wide-column left edge.
  → `docs/adr/0066-prince-introduction-heading-and-alignment.md`
- **ADR-0067** · `design` · Prince complete production page
  The Prince of Egypt must present its approved opening, artistic introduction, alternating Throne, Landscape and Opening chapters, and Performance Photos on one complete page, without bottom Selected Materials tiles or separate supporting pages. Its galleries must cycle smoothly forward with three seconds at rest and no backing rectangles, with manual arrows and a logical count for Performance Photos.
  → `docs/adr/0067-prince-complete-production-page.md`
- **ADR-0068** · `content` · Knock on Wood averted consequences
  Knock on Wood must explain the protective superstition before describing the second character embodying approaching misfortune, which the main character averts by finally knocking on wood. Its narrative and choreography description must not imply that the threatened misfortune actually occurs.
  → `docs/adr/0068-knock-on-wood-averted-consequences.md`
- **ADR-0069** · `content` · Owner narrative punctuation
  New or revised portfolio narrative copy in Ashlynn's voice must avoid em and en dashes as sentence punctuation, using commas, periods, or rephrasing instead.
  → `docs/adr/0069-owner-narrative-punctuation.md`
- **ADR-0071** · `design` · Live performance return navigation
  Projects listed in Live performance must use Live performance as their page-level return destination. The separate Choreographic Works directory must redirect to Live performance, while individual-piece URLs remain unchanged. Forward must retain its approved video-narrative layout, abbreviated clip, persistence narrative, owner-provided image, and accurate choreography and company credits.
  → `docs/adr/0071-live-performance-return-navigation.md`
- **ADR-0072** · `design` · Individual work editorial columns
  Knock on Wood and Forward must use fixed editorial columns on desktop, with the uncropped video thumbnail and presentation details on the left and the work narrative and choreographic approach on the right. On phones the order must be video, presentation details, narrative, then choreographic approach.
  → `docs/adr/0072-individual-work-editorial-columns.md`
- **ADR-0073** · `design` · About steady editorial split
  About must use the approved steady editorial split, with portrait and contact information in a supporting left column and the biography in a continuous right column. On phones the order must be portrait, biography, then contact.
  → `docs/adr/0073-about-steady-editorial-split.md`
- **ADR-0074** · `design` · About uncropped portrait
  The About portrait must show the full original image at its natural aspect ratio, including the visible top of Ashlynn's jeans, without a fixed-ratio crop.
  → `docs/adr/0074-about-uncropped-portrait.md`
- **ADR-0075** · `design` · Mindspace story and mood board
  Mindspace must pair its Concept and contribution narrative with a Mood board in fixed desktop columns, stacking the narrative before the gallery on phones. Its reference images must be described as inspiration for the intended look and feel, not exact scenes or images created or photographed by Ashlynn.
  → `docs/adr/0075-mindspace-story-and-mood-board.md`
- **ADR-0076** · `design` · Compact natural-image Live performance directory
  Live performance must use a compact editorial directory with natural-ratio, uncropped photographs beside titles and metadata on desktop. Both work groups must remain visible; phones must stack each photograph above its title and arrow.
  → `docs/adr/0076-compact-natural-image-performance-directory.md`
- **ADR-0077** · `design` · Concept collection tile and list views
  Conceptual Portraits must offer an object-only tile mosaic and the existing named-disclosure list, with portraits hidden until a concept is selected. The mosaic must use unequal, uncropped image sizes on subtle grey backing, no hover titles, and restrained 2.5 percent hover enlargement without overlapping images.
  → `docs/adr/0077-concept-collection-tile-and-list-views.md`
<!-- adr-registry:end -->

## Content scope
The site covers every creative discipline, now and in the future: dance and choreography, set design, video and directing, photography, acting, and whatever she adds next. v1 has three case studies: *The Prince of Egypt*, *Object Translations*, and the *Dance Film* (in production).

## Hosting and URL
- GitHub Pages custom domain: repo `Ashlynn-Kate/creative-portfolio`, served at `https://byashlynnkate.com/`.
- A custom domain (e.g. her name as a `.com`) will likely be added later.
- The owner is the only repo admin; Pages settings and repository secrets need her.

## Content source
- Her content lives in Notion; the developer has guest access to her pages.
- v1 was built from a one-time export in `notion-export-27Sept26/` (git-ignored). A Notion API sync is planned.

## Design
- Goal: **as beautiful as possible**. Editorial and distinctive, not templated. It is a portfolio for an artistic director, so the site itself demonstrates her taste.
- Current look: warm paper background, near-black ink, desert-sienna accent; Cormorant Garamond for display, Jost for text. Tokens are at the top of `src/styles/global.css`.
- **Design lab:** local throwaway prototypes, shown at `http://localhost:4321/lab/` while `npm run dev` runs. This is where layout ideas get tried before anything is built for real. How it works: `lab/README.md`.
- **Notion:** she keeps references, mood boards, and notes there. Treat those notes as design direction.
- **Later:** she may wireframe in **Figma**. Figma is not used yet. Once it is, implement design changes from Figma frames when referenced.

## Tech stack
- **Astro 7**, static output. Node 22.12 or newer.
- **Local preview:** `npm run dev` (live, `http://localhost:4321/`); `npm run build` then `npm run preview` for the final check. Human-facing steps live in `README.md`.

### Project structure
- `src/content/cases/*.yaml`: one case study each; full narratives have their own `/work/<case>/` route, ordered by `order`. `src/content/pages/<case>/*.yaml`: detail pages under a case (`/work/<case>/<page>/`).
- `src/content.config.ts`: the content schema and block types. `src/components/Blocks.astro`: renders the blocks.
- `src/assets/images/<case>/`: original images, referenced from content by that relative path. `src/components/MediaImage.astro`: renders one image.
- `src/lib/site.ts`: site name, tagline, and the `url()` link helper. `src/lib/content.ts`: shared content queries.
- `src/components/VideoLink.astro`: all video markup. `src/components/Carousel.astro`: the peek-behind carousel.
- `src/layouts/BaseLayout.astro`: the shared `<head>` (robots and Open Graph tags), header, and footer.
- `src/pages/`: home, `work/[...slug]` detail pages, `discipline/[slug]` pages, 404.
- `lab/<topic>/<version>.astro`: design-lab prototypes (git-ignored except `lab/example/`). `src/lab/`: the dev-only integration and router that serve them.
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
- **Design requests start in the lab.** When she asks for a new look, layout, or UI idea, make two or three quick versions in `lab/<topic>/` rather than changing the site, and send her the side-by-side link. Keep lab work fast: no checks, builds, content-schema changes, or ADRs for exploration. Build it into the site only when she says "make it real" (or clearly picks a version and asks for it on the site). Small, specific fixes to the real site ("fix this typo", "swap these two photos") skip the lab.
- **Iterate with the dev server running** (`npm run dev`); pages update as files change. Don't run `npm run check` or `npm run build` after every edit. Run both once before committing; both must pass with no errors.
- **After every change, remind the human how to see it:** give the exact command (`npm run dev`) and the link, and name the page to look at: `http://localhost:4321/` for the site, or `http://localhost:4321/lab/<topic>/` for a lab comparison. If a dev server is already running, just say which page to refresh. Before a push, suggest the final check (`npm run build`, then `npm run preview`).
