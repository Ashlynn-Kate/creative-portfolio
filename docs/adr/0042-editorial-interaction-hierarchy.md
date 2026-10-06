---
id: ADR-0042
title: Editorial interaction hierarchy
status: accepted
date: 2026-10-04
area: design
constraint: >
  The interface must reserve rounded pills for discipline filters, present
  project disciplines as plain linked metadata, use restrained rectangular
  labels for status, and reserve outlined controls for explicit actions.
---

# Editorial interaction hierarchy

## Context

Rounded pills, outlined buttons, status badges, and project tags had begun to
share the same visual language. Although each element was clear on its own,
their combined presence made the portfolio feel more like a product interface
than an editorial presentation of creative work.

## Decision

Use a visual treatment based on the role of each element:

- Discipline browsing controls remain rounded pills because they act as
  filters and navigation choices.
- Disciplines associated with a specific case become plain linked metadata,
  separated by slashes.
- Statuses use small square-cornered outlined labels.
- Explicit calls to action retain the outlined button treatment.
- Directory disclosures continue as typographic rows with a rule and simple
  plus or arrow affordance, without container styling.

## Options considered

- **One universal pill treatment:** consistent at the component level, but too
  interface-like in an editorial portfolio.
- **Editorial hierarchy (chosen):** gives interaction treatments distinct
  meanings while keeping filters easy to identify.
- **No outlined controls:** quieter, but makes calls to action less legible.

## Trade-offs

- Pros: improves hierarchy and gives the imagery and display typography more
  visual authority.
- Cons: visitors need to learn that similar-looking words may have different
  interaction roles; clear hover and focus states remain important.

## Revisit if

The portfolio adds a more complex search or filtering interface that needs a
dedicated control system.
