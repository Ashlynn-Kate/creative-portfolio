---
id: ADR-0025
title: Home page case order
status: accepted
date: 2026-10-01
area: content
constraint: >
  The home page and Selected Works index must present Object Translations first, Mindspace second,
  and The Prince of Egypt third.
---

# Home page case order

## Context

The owner wants the portfolio to open with the editorial portrait series, followed by the in-production
dance film, then the full-length ballet case study. The same sequence needs to be reflected in the
index and the expanded case-study sections.

## Decision

Order the cases as Object Translations, Mindspace, and The Prince of Egypt. Keep this sequence
data-driven through each case’s existing `order` value so the index and page sections always match.

## Options considered

- **Production first:** foregrounds the most extensive completed work.
- **Editorial-first order (chosen):** gives the homepage a visually immediate introduction before
  progressing to film and live production.

## Trade-offs

- The most detailed case study appears later on the page.
- The homepage opens with the most compact, image-led work.

## Revisit if

- A future case study becomes the preferred opening work.
