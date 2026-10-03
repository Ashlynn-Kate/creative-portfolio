---
id: ADR-0029
title: Wide case narrative alignment
status: superseded
date: 2026-10-02
area: design
constraint: >
  Post-tag narrative content in the home-page case studies must align to the
  wide content column used by Object Translations; a case-level role statement
  remains visually attached to its header.
superseded_by: ADR-0030
---

# Wide case narrative alignment

## Context

Object Translations established a more spacious left-aligned narrative area
after its discipline tags. Ashlynn chose to apply that alignment to the other
home-page case studies while retaining Mindspace’s role statement as part of
its header.

## Decision

Prince of Egypt and Mindspace use the wide content column for headings, prose,
lists, disclosures, and media after their tags. Narrative prose has a 1010px
maximum measure. Mindspace’s role remains in the case header, directly beneath
its discipline tags.

## Options considered

- **Everything wide:** move the role statement with the rest of the content.
- **Role with header (chosen):** preserve the role as a compact header detail,
  while aligning the narrative flow with Object Translations.

## Trade-offs

- Pros: gives every case study a consistent, more editorial reading edge.
- Cons: case narratives use longer lines on wide screens.

## Revisit if

A future case needs a narrower reading measure for a substantially longer body
of text.
