---
id: ADR-0039
title: Home hero copy upper-center placement
status: accepted
date: 2026-10-03
area: design
constraint: >
  The home-page hero copy must remain left aligned and sit slightly above the
  vertical center of the photographic collage, with a responsive upward offset.
---

# Home hero copy upper-center placement

## Context

The vertically centered hero copy balanced the full collage mathematically, but
appeared low because the photographic composition carries more visual weight in
its lower half.

## Decision

Keep the hero eyebrow, name, and descriptive line left aligned, but shift the
copy block upward by a responsive amount. This places it in the upper-middle of
the collage while preserving the existing image treatment and responsive type.

## Options considered

- **Exact vertical center:** balanced by measurement but looked low against the
  image composition.
- **Upper-middle placement (chosen):** gives the text more breathing room below
  and creates a better visual balance with the collage.

## Trade-offs

- Pros: the opening copy reads as intentionally placed within the imagery.
- Cons: it is no longer geometrically centered within the hero.

## Revisit if

The hero image sequence or hero height changes substantially.
