---
id: ADR-0049
title: Direct destinations from areas of work
status: accepted
date: 2026-10-05
area: design
constraint: >
  Home-page areas of work must link directly to their destination rather than
  through the Works overview. Object Translations must open on its complete
  concept collection without a separate four-portrait summary, and grouped
  areas such as Live performance must have focused pages that show their work
  groups and current projects immediately.
---

# Direct destinations from areas of work

## Context

The category-first home page made the portfolio feel broader, but a visitor
had to click Conceptual portraits, then Object Translations, then See all
concepts to reach the actual series. Film also required a detour through Works.
Live performance already contains a full-length production and an individual
piece, with more of both planned. The owner approved replacing ADR-0043's
Works-directory hop and ADR-0022's four-portrait summary.
She also approved retiring ADR-0021's four-photo teaser and ADR-0028's
teaser-aligned introduction and numbered case header.

## Decision

Keep the photographic home hero, “Making ideas visible” headline, compact
data-driven area index, and no Back to top control from ADR-0043. Each area
link now opens its own useful destination: Conceptual portraits opens the full
Object Translations collection, Film opens Mindspace, and Live performance
opens a focused page with Full-length productions and Individual pieces.
Focused groups start open so their current projects are visible on arrival.
The Works page remains available as a site-wide overview, but is not a
required stop from the home page.

Object Translations' four-portrait overview and intermediate See all concepts
link are removed. Its first-person introduction moves to the complete concept
collection, where the object-and-portrait disclosures live. The former case
URL forwards to that collection so existing links do not become dead ends.
The complete page uses a project heading rather than the old numbered summary
header, and the introduction no longer needs teaser-specific alignment.
Keep category labels, order, and group membership in the shared content entry,
with case landing-page exceptions declared in content rather than hardcoded
in the home component.

## Options considered

- **Keep the Works and portrait-summary hops:** retains the previous
  hierarchy but delays access to the actual work.
- **Send every area to one project:** fast for Film, but would hide the growing
  range of Live performance work.
- **Direct destinations with a focused page for grouped work (chosen):** removes
  unnecessary clicks while allowing each category to grow.

## Trade-offs

- The home page no longer introduces a single uniform type of destination:
  one area opens a series, one a film, and one a grouped category page.
- The focused Live performance page shows more work up front; it will grow
  longer as new productions and pieces are added.

## Revisit if

- Film grows enough to need its own grouped destination instead of opening
  the current single film directly.
- A category accumulates enough projects that its focused page needs filtering
  or a different browsing pattern.
