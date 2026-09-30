---
id: ADR-0016
title: Object Translations uses a summary and all-concepts page
status: accepted
date: 2026-09-29
area: design
constraint: >
  Object Translations must keep its first three concepts on the case-study page and
  link to a dedicated all-concepts page containing the complete series; each concept's
  additional photos must open as an inline, scrollable gallery.
---

# Object Translations uses a summary and all-concepts page

## Context

The series is growing beyond its original three concepts. The primary case-study page
should remain an approachable introduction, while visitors still need a clear path to
the full collection and the added image sets.

## Decision

Keep Feather Bag, Vintage Lamp, and Sharpie on the main Object Translations page. Add
clear calls to action for a separate page that presents every concept. Show each
concept's additional photos inside its existing disclosure, using the site's accessible
carousel interaction rather than sending visitors to another page.

## Options considered

- **Place every concept on the main page:** complete, but makes the introductory page long.
- **Separate page with inline galleries (chosen):** preserves a focused introduction and
  provides a direct path to the complete series.

## Trade-offs

- Visitors make one extra navigation step to reach the newer concepts.
- The full collection remains easy to extend without changing the overview's structure.

## Revisit if

- The series becomes large enough to need filters or individual concept pages.
