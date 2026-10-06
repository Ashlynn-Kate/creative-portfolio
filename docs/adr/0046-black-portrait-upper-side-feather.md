---
id: ADR-0046
title: Feather the black portrait's upper side edges
status: accepted
date: 2026-10-04
area: design
constraint: >
  The black-turtleneck portrait in the home collage must have a photo-specific
  upper-side feather that removes visible wall boundaries near the head while
  preserving the face, lower arms, existing bottom fade, and image geometry.
---

# Feather the black portrait's upper side edges

## Context

The shared elliptical perimeter mask leaves partial opacity at the literal
side edges. This is most noticeable around the black-turtleneck portrait's
head, where its gray wall has a sharper boundary against the collage. Its
lower sides already blend more naturally because the arms and backdrop have
similar values.

## Decision

Layer a side-to-side alpha gradient onto this portrait only. Limit its effect
to the upper portion by combining it with a vertical gradient that restores
full opacity before the lower arms. Intersect the result with the existing
perimeter and bottom masks. Do not alter the photo, its crop, size, or position.

## Options considered

- **Strengthen every photograph's side feather:** would weaken combinations
  that already look seamless.
- **Strengthen both sides for the full portrait height:** would unnecessarily
  dim the lower arms.
- **Limit the extra side feather to the upper portrait (chosen):** targets the
  visible wall boundary while protecting the subject.

## Trade-offs

- One more image-specific mask requires checking when this photo is replaced.
- Fine strands near the far outer edge can fade with the wall background.

## Revisit if

The hair or arms look too faint at a future viewport size.
