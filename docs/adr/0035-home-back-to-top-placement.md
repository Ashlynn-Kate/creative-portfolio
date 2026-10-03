---
id: ADR-0035
title: Home back-to-top placement
status: accepted
date: 2026-10-02
area: design
constraint: >
  The home page must place its centered Back to top link immediately after the
  final case-study content and before the footer; the shared footer must not
  contain a Back to top control.
---

# Home back-to-top placement

## Context

The footer control visually competed with the footer information and felt
detached from the long case-study content it was meant to navigate.

## Decision

Place a compact, centered Back to top link immediately after the final home
page case study, before the footer. It uses the existing main-content anchor
and inherits the site's reduced-motion behavior.

## Options considered

- **Footer control:** keeps the link available on every route but separates it from portfolio content.
- **End-of-home link (chosen):** makes the return action belong to the final portfolio section.

## Trade-offs

- Pros: cleaner footer and a more natural end to the home-page content.
- Cons: other pages no longer have a dedicated Back to top control.

## Revisit if

Long detail pages need their own end-of-page navigation.
