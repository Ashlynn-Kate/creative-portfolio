---
id: ADR-0059
title: Contemporary ballet production listing
status: accepted
date: 2026-10-09
area: content
constraint: >
  The full-length production directory must list The Gift of Athens before The Prince of Egypt
  and identify both as Contemporary ballet. Directory descriptors must be stored in content
  independently of the detailed production-page kickers.
---

# Contemporary ballet production listing

## Context
The owner wants The Gift of Athens to lead the production listing and both works identified
by their medium rather than “Stage production” or Athens's location.

## Decision
List Athens first in the shared Full-length productions directory used by Works and the
Live performance destination reached from the homepage. Give both items the descriptor
“Contemporary ballet.” Support an optional directory-item label in the content schema and
renderer so the standalone pages can retain their fuller context. This is consistent with
ADR-0005's data-driven content and ADR-0049's shared navigation directory.

On the focused Live performance page, production and individual-piece titles share the
same responsive size, capped at 30px. The page heading remains left aligned with its list
and capped at 72px.

## Options considered
- Change production-page kickers globally: would remove useful context outside the listing.
- Content-driven directory labels (chosen): keeps the requested browse wording explicit.

## Trade-offs
- The directory has a clear, consistent description of both productions.
- Directory labels and case-page context can differ intentionally.

## Revisit if
- The owner changes the editorial production order or adds another production.
