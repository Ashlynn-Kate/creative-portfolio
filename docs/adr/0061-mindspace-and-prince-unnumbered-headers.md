---
id: ADR-0061
title: Unnumbered Mindspace and Prince headers
status: accepted
date: 2026-10-11
area: design
constraint: >
  Mindspace and The Prince of Egypt must use unnumbered case-study headers.
  Mindspace must omit the separate Creative Process section from its current presentation.
---

# Unnumbered Mindspace and Prince headers

## Context

The owner annotated the live Mindspace page to remove its large decorative
sequence number, requested the same treatment for The Prince of Egypt, and
asked to remove Mindspace's Creative Process heading and paragraph.

## Decision

Use a content-controlled `showNumber` flag for the two case headers and let
their headings occupy the full available header column. Remove Mindspace's
Creative Process blocks, retaining Concept, the role statement, and Visual
references. This is consistent with ADR-0005's content model and ADR-0034's
Prince narrative; it does not choose a Prince lab layout.

## Options considered

- Keep the decorative numbers: the owner requested their removal.
- Remove numbers from every case: broader than the requested two pages.
- Remove the two numbers through content (chosen): preserves other cases.

## Trade-offs

The two pages no longer display their ordering as part of the heading;
editorial order remains available for listings.

## Revisit if

The owner adds new process content to Mindspace or chooses a broader header redesign.
