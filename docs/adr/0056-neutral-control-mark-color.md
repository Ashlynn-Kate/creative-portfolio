---
id: ADR-0056
title: Neutral-grey color for plus and arrow controls
status: accepted
date: 2026-10-06
area: design
constraint: >
  Decorative plus/minus marks and arrow icons across the site must use a neutral
  grey rather than the desert-sienna accent, with a lighter neutral-grey variant
  on dark image surfaces to preserve contrast. Keep sienna for non-control accents.
---

# Neutral-grey color for plus and arrow controls

## Context

The desert-sienna accent gives the site warmth, but repeated sienna plus signs
and arrows made small interface controls more prominent than their supporting
role. A lab comparison on the Conceptual Portraits page tested a neutral grey
and a cooler slate. The owner selected the neutral-grey option for site-wide use.

## Decision

Use `#777777` for decorative plus/minus and arrow marks on the paper background.
Use `#c9c9c9` on dark image surfaces where the darker grey would lose contrast.
Do not recolor the sienna accent system itself: role markers, emphasis, focus
outlines, and other non-control accents remain unchanged.

## Options considered

- **Keep desert sienna:** expressive, but controls compete for attention.
- **Cool slate:** cooler and distinct, but introduces a blue cast the owner did
  not prefer.
- **Neutral grey (chosen):** quiets the controls without adding a blue cast.

## Trade-offs

- Contrast-aware light grey is required for icons over dark image surfaces.
- Controls become less visually prominent; labels and interaction states must
  remain clear.

## Revisit if

- The background palette changes or controls become difficult to locate.
- The owner later chooses a site-wide cool-toned accent system.
