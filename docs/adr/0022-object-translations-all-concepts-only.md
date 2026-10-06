---
id: ADR-0022
title: Object Translations all-concepts-only summary
status: superseded
date: 2026-10-01
area: design
constraint: >
  The Object Translations summary page must introduce the series with its portrait preview and one
  All Concepts link; individual concept disclosures must appear only on the dedicated all-concepts page.
superseded_by: ADR-0049
---

# Object Translations all-concepts-only summary

## Context

The summary page was showing three individual concept disclosures as well as the visual preview and
the complete-series link. The owner decided the disclosures made the page feel repetitive now that
the all-concepts page is the central place to browse the series.

## Decision

Keep the Object Translations introduction, four-portrait preview, and one “See all concepts” call to
action on the summary page. Move the full concept-browsing experience entirely to the all-concepts
page; do not retain sample disclosures or a secondary “See more concepts” link on the summary.

## Options considered

- **Three sample concepts plus all-concepts page:** offers a preview of the browsing interface but
  duplicates the content journey.
- **All-concepts-only summary (chosen):** creates a short, visually led invitation to a single,
  complete browsing destination.

## Trade-offs

- Visitors need one click to encounter the first object-to-portrait comparison.
- The summary page is clearer and transitions more quickly to the next case study.

## Revisit if

- A future series needs a selected concept shown inline as a featured work.
