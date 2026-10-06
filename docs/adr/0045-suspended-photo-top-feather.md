---
id: ADR-0045
title: Feather the suspended dancer's upper image edge
status: accepted
date: 2026-10-04
area: design
constraint: >
  The black-unitard suspended-dancer photo in the home hero must have a short,
  photo-specific top-edge feather that reaches full opacity before the raised
  hands, while retaining its bottom and perimeter masks and unchanged crop.
---

# Feather the suspended dancer's upper image edge

## Context

After the photo-specific lower-edge fades (ADR-0044), the owner noticed a
remaining straight top boundary on the black-unitard jumping photo. Its
existing elliptical perimeter mask left some opacity at the literal top edge.
The dancer's raised hands are close to that edge, so a broad top fade would
weaken the subject.

## Decision

Intersect the existing perimeter mask with a vertical gradient that reaches
full opacity seven percent into this photo, remains fully opaque through the
figure, and retains the established bottom fade. Do not alter the photograph,
its display box, or its crop.

## Options considered

- **Strengthen the shared hero mask:** would change all nine photographs.
- **Crop or reposition the photo:** could alter the jump composition.
- **Short photo-specific top fade (chosen):** removes the edge while preserving
  the hands and the other collage treatments.

## Trade-offs

- The individual mask needs rechecking if this photograph is ever replaced.
- The very top of the photo becomes more transparent, but its subject remains
  fully visible below the short transition.

## Revisit if

The raised hands appear diminished at a future hero size or crop.
