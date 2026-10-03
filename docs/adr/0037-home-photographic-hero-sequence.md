---
id: ADR-0037
title: Home photographic hero sequence
status: accepted
date: 2026-10-03
area: design
constraint: >
  The home-page hero must present owner-approved photographs as a subtle,
  full-width asynchronous sequence behind the existing copy, with varied scale
  and placement, cream-feathered edges, offscreen pausing, and a static
  reduced-motion presentation.
---

# Home photographic hero sequence

## Context

The portfolio opening needed to communicate Ashlynn's movement practice and
presence before visitors reach the case studies, without competing with the
existing editorial typography or turning the hero into a conventional slideshow.

## Decision

Use nine supplied black-and-white photographs in three overlapping,
full-width image panels. Each panel changes at a different time, while each
photograph travels between left, center, and right positions through the
sequence. Image centers remain legible and their edges dissolve into the warm
paper background. The sequence pauses when it is offscreen and becomes one
balanced static photograph for reduced-motion visitors.

## Options considered

- **Single-image composition:** a quieter treatment, but without the desired
  breadth or evolving sense of movement.
- **Synchronous three-image changes:** visually tidy, but more like a
  conventional slideshow.
- **Asynchronous feathered panels (chosen):** a spacious, atmospheric rhythm
  that keeps the hero copy primary.

## Trade-offs

- Pros: gives the page a distinct personal presence while preserving readable
  copy and the site’s warm editorial character.
- Cons: uses more image assets than a single static hero and needs careful
  motion and mobile handling.

## Revisit if

The image sequence affects first-load performance, the owner adds a new hero
photograph set, or the visual direction moves toward a still opening.
