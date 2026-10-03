---
id: ADR-0027
title: Choreographic Works collection
status: superseded
date: 2026-10-02
area: design
constraint: >
  Original choreography must appear as a data-driven Choreographic Works
  collection, discoverable in Selected Works and on a dedicated root listing
  page, with each work opening on its own page from an editorial image-led row.
superseded_by: ADR-0033
---

# Choreographic Works collection

## Context

Ashlynn’s portfolio was expanding from three case studies into individual
choreographic works that need a clear home without crowding the primary menu.
The first work, *Knock on Wood*, needs a concise listing treatment and a page
for its full context.

## Decision

Choreographic Works is a fourth data-driven Selected Works category and has a
root listing at `/choreographic-works/`. Its individual works use root routes
under that collection. The listing uses restrained landscape-image rows with
text and an arrow link, matching the site’s editorial language. The work page
uses a supplied still as a clearly labelled video placeholder until a Google
Drive link is available.

## Options considered

- **Add choreography to the primary menu:** this would overfill the compact
  navigation before the collection has several works.
- **Keep work pages only beneath `/work/`:** this would make choreography feel
  like a sub-page of an unrelated case study.
- **Dedicated Choreographic Works collection (chosen):** makes the category
  discoverable from Selected Works while remaining scalable.

## Trade-offs

- Pros: gives choreography a clear category, a repeatable row pattern, and
  direct links that are easy to extend.
- Cons: introduces one additional top-level route.

## Revisit if

The collection expands enough that it needs a dedicated primary-navigation
entry or a different filter structure.
