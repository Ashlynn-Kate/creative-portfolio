---
id: ADR-0053
title: Mobile Conceptual Portrait object presentation
status: superseded
date: 2026-10-06
area: design
superseded_by: ADR-0054
constraint: >
  Conceptual Portraits disclosures must retain the full-size object beside the portrait
  gallery on desktop. On phones, opening a concept must enlarge its compact object thumbnail
  to 112px beside the title and descriptor, then show the portrait gallery directly below
  without the separate full-size object image; carousel behavior remains as previously defined.
---

# Mobile Conceptual Portrait object presentation

## Context

On a phone, opening a concept placed the full-height inspiration-object photograph before
the portrait gallery. This made a visitor scroll through an entire screen of an object such
as the Feather Bag or Sharpie before reaching the portrait that expresses the concept.

The owner chose the subtle-lift lab option: enlarge the compact object thumbnail enough to
read clearly, keep it visually paired with the concept name and descriptor, and bring the
portrait gallery close beneath it. Desktop already gives the object and gallery room to sit
beside one another and should keep that composition.

## Decision

At phone widths (560px and below), a closed disclosure keeps its existing 64px object
thumbnail. When opened, that thumbnail becomes 112px and sits beside a grouped title and
descriptor. The full-size object column is hidden only at these widths; the portrait label
and existing carousel follow directly beneath the summary. Desktop retains the full-size
object beside the portrait gallery. Image sources, aspect ratios, and carousel controls and
timing are unchanged.

The earlier object-thumbnail and gallery-layout decisions in ADR-0019 and ADR-0050 are
superseded by this responsive rule. Their unrelated requirements—including the existing
carousel navigation, autoplay, pause, and reduced-motion behavior—remain in force.

## Options considered

- **Keep the full-height object on phones:** preserves desktop composition, but delays the
  portrait and makes the object dominate the small screen.
- **Remove object context on phones:** brings the portrait forward, but weakens the link
  between the inspiration and its translation.
- **Enlarge the thumbnail beside the title, then show portraits (chosen):** keeps the
  concept legible while preserving screen space for the portrait work.

## Trade-offs

- The full-size inspiration object is not shown on phone widths when a concept is open.
- The 112px thumbnail gives the inspiration more presence than the 64px closed-state image.
- Desktop remains unchanged and continues to show both full-size images together.

## Revisit if

- Phone testing shows 112px is too prominent or still too small to recognize the objects.
- Additional content or gallery controls make the object-to-portrait transition feel crowded.
