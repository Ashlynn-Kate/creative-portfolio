---
id: ADR-0054
title: Portrait-led Conceptual Portrait gallery proportions
status: accepted
date: 2026-10-06
area: design
constraint: >
  Open Conceptual Portraits disclosures on phones must show a 129px object thumbnail beside
  the title and descriptor, followed by the portrait gallery without a separate full-size
  object image. At 900px and above, the full-size object and portrait gallery must use a
  35/65 column split favoring the portrait; intermediate widths retain the existing layout.
---

# Portrait-led Conceptual Portrait gallery proportions

## Context

After the mobile object-thumbnail layout was published, the owner asked for two refinements:
make the enlarged mobile thumbnail slightly larger, and reduce the inspiration image relative
to the finished portrait carousel on desktop. The lab comparison showed a 35/65 desktop split
as the preferred, portrait-led option.

## Decision

At phone widths (560px and below), a closed disclosure retains its 64px thumbnail. When opened,
the thumbnail becomes 129px—about 15% larger than the previous 112px size—and stays beside the
grouped concept title and descriptor. The separate full-size object image remains hidden at
these widths, with the portrait label and carousel directly below.

At wide desktop widths (900px and above), the full-size object occupies 35% of the pair-gallery
columns and the portrait gallery 65%. At intermediate widths (561–899px), the existing equal
two-column layout remains. Image aspect ratios, sources, and carousel behavior are unchanged.

This decision supersedes ADR-0053. Its mobile-first order, disclosure behavior, and carousel
requirements remain, except for the explicitly updated thumbnail size and desktop proportions.

## Options considered

- **Keep the 40/60 split:** makes the object more prominent, but the finished portrait still
  feels close in weight to its inspiration image.
- **Portrait-led 35/65 split (chosen):** makes the finished image the clear visual focus while
  keeping enough space for the object to read.

## Trade-offs

- The inspiration object has less visual weight than the completed portrait sequence on desktop.
- The open mobile row is taller, while the closed disclosure stays compact.
- Tablet widths retain the existing equal columns rather than introducing another breakpoint.

## Revisit if

- Future phone testing shows the 129px object competes with the portrait or crowds long titles.
- More gallery content or different source-image proportions make the 35/65 desktop split feel
  unbalanced.
