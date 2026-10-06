---
id: ADR-0051
title: Conceptual Portraits introduction and index width
status: accepted
date: 2026-10-06
area: design
constraint: >
  The Conceptual Portraits all-concepts page must place its series introduction
  after the title, subtitle, and disciplines but before the concept disclosures.
  The introduction and concept index must use wider editorial columns so each
  three-part concept descriptor stays on one line when space permits, without
  causing horizontal scroll on smaller screens.
---

# Conceptual Portraits introduction and index width

## Context

The introduction was written first in the content file, but the numbered
disclosures sorted ahead of it, leaving the explanation at the bottom of the
page. The narrow text column also made several three-part descriptors wrap.

## Decision

Give the introduction an explicit first position and a wide text-block size.
Place concept disclosures in a slightly narrower centered column within the
wide page track. On roomy screens, reserve enough width for their descriptor
as a single phrase; allow the compact layout to adapt at smaller widths.

## Options considered

- **Leave the introduction at the end:** obscures the context visitors need
  before opening a concept.
- **Put the introduction before a widened index (chosen):** establishes the
  premise first and keeps the concept labels easy to scan.

## Trade-offs

- The concept rows occupy more horizontal space on desktop.
- The introduction spans longer lines than ordinary body text.

## Revisit if

- The series gains much longer labels or descriptors that do not fit in the
  wide index.
