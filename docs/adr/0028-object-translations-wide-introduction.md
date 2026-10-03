---
id: ADR-0028
title: Object Translations wide introduction
status: accepted
date: 2026-10-02
area: design
constraint: >
  The Object Translations introduction must align to the left edge of its
  portrait preview gallery and use a wider reading measure, while its existing
  numbered case header remains unchanged.
---

# Object Translations wide introduction

## Context

The Object Translations introduction was constrained to the standard text
column while the portrait teaser below used the wider content area. Ashlynn
wanted the introduction to begin on the same left edge as the images and for
the gallery to move upward naturally as the copy used fewer lines.

## Decision

The introduction occupies the wide content column with a restrained 1010px
maximum measure. The case heading, large number, subtitle, and discipline tags
remain in their existing arrangement.

## Options considered

- **Wide left (A):** align the copy to the images but retain a shorter measure.
- **Full measure (B, chosen):** use more of the wide column while maintaining
  comfortable editorial line length.

## Trade-offs

- Pros: visually connects the introduction and its image teaser, reducing
  unnecessary height before the portraits.
- Cons: lines are longer on wide screens.

## Revisit if

The introduction changes substantially enough that the wider measure becomes
hard to scan.
