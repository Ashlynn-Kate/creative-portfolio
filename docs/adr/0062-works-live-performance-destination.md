---
id: ADR-0062
title: Works links to the expanded Live performance page
status: accepted
date: 2026-10-11
area: design
constraint: >
  Grouped categories on the Works overview must link to their focused area page.
  Live performance must open with Full-length productions and Individual pieces
  expanded, retaining their images and individual work links.
---

# Works links to the expanded Live performance page

## Context

The owner requested that clicking Live performance on Works show both existing
work groups expanded on a dedicated page, with navigation onward from each work.
ADR-0049 already provides the focused destination with its groups open, but
Works still displayed closed disclosures in place.

## Decision

Use the same category link treatment for Live performance as for the other
Works categories. Link grouped categories to their data-derived area route
using `url()`. Reuse the existing focused directory and its image-led rows,
showing full-length productions above individual pieces. This extends the
entry points to ADR-0049's destination and is consistent with ADR-0059's order.

## Options considered

- Keep Works disclosures: requires expanding groups before seeing projects.
- Duplicate the expanded directory: adds an unnecessary second implementation.
- Link to the existing focused page (chosen): uses the requested presentation.

## Trade-offs

Works becomes a compact index; grouped work appears on its focused destination.

## Revisit if

An area grows enough to need a different browsing structure.
