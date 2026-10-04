---
id: ADR-0043
title: Category-first home page with standalone case studies
status: accepted
date: 2026-10-04
area: design
constraint: >
  The home page must introduce data-driven areas of work over the photographic hero
  and link each area into the Works directory; full case-study narratives must live
  on dedicated routes rather than inline on the home page. Home and Works must draw
  category order and labels from the same content entry. The former home-page
  Back to top control must not appear on the shorter category-first landing page.
---

# Category-first home page with standalone case studies

## Context

The portfolio has grown beyond three application-focused projects. A visitor seeing
three named case studies on the home page could reasonably conclude that they are
the full extent of Ashlynn's work, when portrait concepts, films, and stage work
will continue to grow. The owner explored category-first landing pages in the
design lab and selected the compact, text-led version. She explicitly approved
replacing ADR-0025 and ADR-0033. With the long case-study content gone, the
owner also approved retiring ADR-0035's end-of-page Back to top control.

## Decision

The home page keeps the existing feathered photographic sequence, but its headline
describes the practice rather than repeating the owner's name: “Making ideas
visible.” A short supporting sentence names still image, moving image, and live
space. Below it, a compact index introduces areas of work without per-category
descriptions or numbered rows. Its labels and order come from the same YAML entry
as the Works directory, where visitors can browse the projects in each area.

The full Object Translations, Mindspace, and Prince of Egypt narratives move to
their own case-study routes. Detail-page, discipline, and Works links point to
those routes instead of home-page fragments. The case-study content remains in
the existing YAML block model (ADR-0005).

## Options considered

- **Keep the three expanded studies on home:** directly exposes detail, but makes
  the site feel limited to three works and forces a long scroll.
- **Lead with individual project titles:** concise, but still implies a fixed set
  of three projects.
- **Lead with growing areas of work (chosen):** introduces the range of the
  practice and gives each narrative an intentional destination.

## Trade-offs

- The visitor takes another step to reach an individual case study.
- The landing page stays calmer and can accommodate new work without growing in
  length or hardcoding new categories in page code.

## Revisit if

- The owner wants a rotating featured project on the landing page, or a category
  grows enough to need a dedicated landing page instead of a Works-directory row.
