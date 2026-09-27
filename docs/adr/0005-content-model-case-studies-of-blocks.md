---
id: ADR-0005
title: Content model — case studies made of blocks, data-driven disciplines
status: accepted
date: 2026-09-27
area: content
constraint: >
  Content lives in YAML under `src/content/`: one file per case study (`cases/`) and per
  detail page (`pages/<case>/`), each a list of typed blocks defined in `src/content.config.ts`
  and rendered by `src/components/Blocks.astro`. Categories and disciplines must stay
  data-driven (tags on each case); never hardcode a category, discipline, or case in page
  code. A new block type is added to both files together.
---

# Content model: case studies made of blocks, data-driven disciplines

## Context
The owner's Notion page is organized as **case studies** (The Prince of Egypt, Object Translations, the Dance Film), each told as a sequence of text, images, collapsible sections, and sub-pages, not as a gallery per discipline. The site must also cover every discipline she works in (dance and choreography, set design, video and directing, photography, acting) plus any she adds later, without code changes. The site is maintained by Codex on plain-language requests, and later filled by a Notion sync (ADR-0006).

## Decision
- **Case studies are the main structure**, following her Notion layout. Each case has optional detail pages.
- Each case and page is an ordered list of **blocks**: `heading`, `text`, `image`, `grid`, `carousel`, `details`, `video`, `pages`. This mirrors Notion's own block model, so a future sync can map Notion blocks onto site blocks directly.
- **Disciplines are free-form tags** on each case. Discipline pages are generated from whatever tags exist.
- The schema validates every content file at build time (`npm run check`), so a typo fails the build instead of shipping a broken page.

## Options considered
- **One page per discipline (gallery-style):** what the original brief assumed, but it would break up her case-study storytelling.
- **Hand-written `.astro` pages per case:** most layout freedom, but every content edit becomes a code edit, and a Notion sync can't generate them.
- **Markdown/MDX per case:** good for prose, awkward for structured image groups and carousels.
- **YAML block lists with a schema (chosen).**

## Trade-offs
**Pros**
- Adding a case, page, or discipline is a content edit, not a code change.
- Matches Notion's structure, easing the future sync.
- Build-time validation catches content mistakes.

**Cons**
- Layout options are limited to the block types that exist; a new kind of layout needs a new block type.
- YAML is fussy about indentation for hand edits (mitigated: Codex does the editing, and the schema check catches errors).

## Revisit if
- The owner wants a discipline-first navigation as the main structure (the tags already support it).
- Layout needs outgrow the block set often enough that per-case custom pages would be simpler.
