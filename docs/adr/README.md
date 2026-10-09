<!-- GENERATED from the ADR files in this folder by scripts/adr-registry.mjs. Do not edit: run `npm run adr`. -->

# Decisions

Architecture decision records (ADRs): one file per decision, with the context, the options considered, the
trade-offs, and when to revisit it. Each one's one-line rule (`constraint`) is also copied into
[`AGENTS.md`](../../AGENTS.md), so AI agents always follow it.

| ID | Decision | Status | Area | Date |
|---|---|---|---|---|
| [ADR-0001](0001-astro-static-site.md) | Astro static site, no site-wide UI framework | accepted | stack | 2026-09-27 |
| [ADR-0002](0002-public-repo-hidden-site.md) | Public repository, site hidden from search | accepted | hosting | 2026-09-27 |
| [ADR-0003](0003-search-hiding-with-noindex.md) | Hide the site from search with noindex, not robots.txt | accepted | hosting | 2026-09-27 |
| [ADR-0004](0004-static-hosting-configurable-base-path.md) | Static hosting on GitHub Pages with a configurable base path | accepted | hosting | 2026-09-27 |
| [ADR-0005](0005-content-model-case-studies-of-blocks.md) | Content model — case studies made of blocks, data-driven disciplines | accepted | content | 2026-09-27 |
| [ADR-0006](0006-notion-as-content-source.md) | Notion as the content source; never hotlink Notion files | accepted | content | 2026-09-27 |
| [ADR-0007](0007-image-pipeline.md) | Image pipeline — automatic web versions, full resolution on Google Drive | accepted | media | 2026-09-27 |
| [ADR-0008](0008-video-drive-thumbnail-now-youtube-later.md) | Video — Drive thumbnail links now, YouTube embeds later | accepted | media | 2026-09-27 |
| [ADR-0009](0009-carousel-and-mobile-first-interaction.md) | Peek-behind carousel and mobile-first interaction baseline | superseded by ADR-0050 | design | 2026-09-27 |
| [ADR-0010](0010-picomatch-windows-preview-bridge.md) | ESM bridge for the local preview's picomatch dependency | accepted | stack | 2026-09-27 |
| [ADR-0011](0011-publish-through-pull-requests.md) | Publish through branches and pull requests | accepted | hosting | 2026-09-27 |
| [ADR-0012](0012-cli-for-repository-operations.md) | Use CLI commands for repository operations | accepted | workflow | 2026-09-27 |
| [ADR-0013](0013-delete-merged-branches.md) | Delete merged work branches | accepted | workflow | 2026-09-27 |
| [ADR-0014](0014-design-lab-explore-before-implementing.md) | Design lab — explore layouts in throwaway prototypes before implementing | accepted | workflow | 2026-09-27 |
| [ADR-0015](0015-mindspace-film-title.md) | Mindspace is the title of the dance film | accepted | content | 2026-09-28 |
| [ADR-0016](0016-object-translations-all-concepts.md) | Object Translations uses a summary and all-concepts page | superseded by ADR-0022 | design | 2026-09-29 |
| [ADR-0017](0017-object-translations-concept-disclosures.md) | Object Translations concepts begin as disclosures | accepted | design | 2026-09-29 |
| [ADR-0018](0018-site-menu-and-about-page.md) | Site menu and About page | accepted | design | 2026-09-30 |
| [ADR-0019](0019-object-translations-concept-thumbnails.md) | Object Translations concept thumbnails | superseded by ADR-0053 | design | 2026-10-01 |
| [ADR-0020](0020-object-translations-inline-portrait-galleries.md) | Object Translations inline portrait galleries | superseded by ADR-0050 | design | 2026-10-01 |
| [ADR-0021](0021-object-translations-portrait-preview.md) | Object Translations portrait preview | superseded by ADR-0049 | design | 2026-10-01 |
| [ADR-0022](0022-object-translations-all-concepts-only.md) | Object Translations all-concepts-only summary | superseded by ADR-0049 | design | 2026-10-01 |
| [ADR-0023](0023-prince-of-egypt-text-led-opening.md) | Prince of Egypt text-led opening | superseded by ADR-0034 | design | 2026-10-01 |
| [ADR-0024](0024-prince-of-egypt-compact-materials.md) | Prince of Egypt compact supporting materials | accepted | design | 2026-10-01 |
| [ADR-0025](0025-home-page-case-order.md) | Home page case order | superseded by ADR-0043 | content | 2026-10-01 |
| [ADR-0026](0026-footer-back-to-top-control.md) | Footer back-to-top control | superseded by ADR-0035 | design | 2026-10-01 |
| [ADR-0027](0027-choreographic-works-collection.md) | Choreographic Works collection | superseded by ADR-0033 | design | 2026-10-02 |
| [ADR-0028](0028-object-translations-wide-introduction.md) | Object Translations wide introduction | superseded by ADR-0049 | design | 2026-10-02 |
| [ADR-0029](0029-wide-case-narrative-alignment.md) | Wide case narrative alignment | superseded by ADR-0030 | design | 2026-10-02 |
| [ADR-0030](0030-mindspace-role-after-concept.md) | Mindspace role after concept | accepted | design | 2026-10-02 |
| [ADR-0031](0031-choreographic-work-detail-rhythm.md) | Choreographic work detail rhythm | superseded by ADR-0032 | design | 2026-10-02 |
| [ADR-0032](0032-choreographic-work-video-narrative.md) | Choreographic work video narrative | accepted | design | 2026-10-02 |
| [ADR-0033](0033-works-directory-navigation.md) | Works directory navigation | superseded by ADR-0043 | design | 2026-10-02 |
| [ADR-0034](0034-prince-artistic-portfolio-narrative.md) | Prince artistic portfolio narrative | accepted | design | 2026-10-02 |
| [ADR-0035](0035-home-back-to-top-placement.md) | Home back-to-top placement | superseded by ADR-0043 | design | 2026-10-02 |
| [ADR-0036](0036-prince-material-overlay-tiles.md) | Prince selected-material overlay tiles | accepted | design | 2026-10-03 |
| [ADR-0037](0037-home-photographic-hero-sequence.md) | Home photographic hero sequence | accepted | design | 2026-10-03 |
| [ADR-0038](0038-home-hero-copy-alignment.md) | Home hero copy alignment | superseded by ADR-0039 | design | 2026-10-03 |
| [ADR-0039](0039-home-hero-copy-upper-center.md) | Home hero copy upper-center placement | accepted | design | 2026-10-03 |
| [ADR-0040](0040-cool-grey-paper-palette.md) | Cool grey paper palette | superseded by ADR-0041 | design | 2026-10-03 |
| [ADR-0041](0041-balanced-neutral-paper-palette.md) | Balanced neutral paper palette | accepted | design | 2026-10-04 |
| [ADR-0042](0042-editorial-interaction-hierarchy.md) | Editorial interaction hierarchy | accepted | design | 2026-10-04 |
| [ADR-0043](0043-category-first-homepage.md) | Category-first home page with standalone case studies | superseded by ADR-0049 | design | 2026-10-04 |
| [ADR-0044](0044-photo-specific-hero-bottom-feathers.md) | Photo-specific lower-edge feathering in the home hero | accepted | design | 2026-10-04 |
| [ADR-0045](0045-suspended-photo-top-feather.md) | Feather the suspended dancer's upper image edge | accepted | design | 2026-10-04 |
| [ADR-0046](0046-black-portrait-upper-side-feather.md) | Feather the black portrait's upper side edges | accepted | design | 2026-10-04 |
| [ADR-0047](0047-role-language-and-project-attribution.md) | Role language and project attribution | superseded by ADR-0048 | content | 2026-10-05 |
| [ADR-0048](0048-conceptual-portrait-category-and-role-tags.md) | Conceptual portrait category and curated role tags | accepted | content | 2026-10-05 |
| [ADR-0049](0049-direct-area-destinations.md) | Direct destinations from areas of work | accepted | design | 2026-10-05 |
| [ADR-0050](0050-concept-portrait-gallery-autoplay.md) | Soft auto-scroll for Conceptual Portraits galleries | superseded by ADR-0053 | design | 2026-10-05 |
| [ADR-0051](0051-concept-series-intro-and-index-width.md) | Conceptual Portraits introduction and index width | accepted | design | 2026-10-06 |
| [ADR-0052](0052-home-navigation-arrow-icons.md) | Stable home navigation arrows | accepted | design | 2026-10-06 |
| [ADR-0053](0053-mobile-concept-object-presentation.md) | Mobile Conceptual Portrait object presentation | superseded by ADR-0054 | design | 2026-10-06 |
| [ADR-0054](0054-portrait-led-concept-gallery-proportions.md) | Portrait-led Conceptual Portrait gallery proportions | accepted | design | 2026-10-06 |
| [ADR-0057](0057-gift-of-athens-chaptered-production.md) | Gift of Athens chaptered production page | superseded by ADR-0058 | design | 2026-10-08 |
| [ADR-0058](0058-athens-story-first-community-wrap.md) | Gift of Athens story-first order and community photographs | accepted | design | 2026-10-09 |
| [ADR-0059](0059-production-directory-order-and-labels.md) | Contemporary ballet production listing | accepted | content | 2026-10-09 |

## Adding or changing a decision

1. Copy [`_template.md`](_template.md) to the next number, e.g. `0004-short-name.md`, and fill it in.
2. To replace a decision, write a new ADR and set the old one to `status: superseded` with `superseded_by: ADR-NNNN`.
   Don't rewrite old decisions; the history is the point.
3. Run `npm run adr` to update this index and `AGENTS.md`. The deploy fails if you forget.
