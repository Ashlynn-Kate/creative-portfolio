---
id: ADR-0026
title: Footer back-to-top control
status: superseded
date: 2026-10-01
area: design
constraint: >
  Every page footer must include a full-width Back to top control that smoothly returns the visitor
  to the main content, while respecting reduced-motion preferences.
superseded_by: ADR-0035
---

# Footer back-to-top control

## Context

The portfolio has long, image-rich home-page sections. The owner selected the full-width footer
control from the design lab so visitors have an obvious return path without a persistent floating button.

## Decision

Place a full-width “Back to top” control with a minimal upward arrow below the footer information on
every page. Use the page’s existing anchor and smooth-scroll behavior; reduced-motion users retain
the site’s existing non-animated behavior.

## Options considered

- **Small text link:** quieter but easier to overlook at the end of a long page.
- **Full-width footer control (chosen):** clear and easy to select without competing with the work.

## Trade-offs

- The footer becomes slightly taller.
- A persistent floating control is avoided, keeping visual focus on the work.

## Revisit if

- Very long detail pages need an additional mid-page navigation aid.
