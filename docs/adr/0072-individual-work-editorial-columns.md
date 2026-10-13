---
id: ADR-0072
title: Individual work editorial columns
status: accepted
date: 2026-10-12
area: design
constraint: >
  Knock on Wood and Forward must use fixed editorial columns on desktop, with
  the uncropped video thumbnail and presentation details on the left and the
  work narrative and choreographic approach on the right. On phones the order
  must be video, presentation details, narrative, then choreographic approach.
---

# Individual work editorial columns

## Context
Ashlynn compared three reading-rhythm studies, selected B's two editorial columns,
approved its mobile order, and explicitly approved replacing ADR-0032 and applying
the layout to both Knock on Wood and Forward.

## Decision
Use equal desktop columns with a restrained gap and the existing body font sizes.
Put the presentation information beneath the video, separated by a subtle rule.
Keep the story in a continuous reading column instead of wrapping around the image
and expanding below it. Stack the columns at the existing 640px work-page breakpoint,
retaining the owner's chosen mobile sequence. Preserve wording, media and credits.
Use a page-level editorial layout option and typed support placement on content
blocks so future changes stay maintainable and no case IDs or headings are hardcoded.
Other page layouts remain unchanged. Retain Live performance return navigation.

## Options considered
- A: retain the wrap with narrower following sections.
- B: stable editorial columns with supporting details beside the story (chosen).
- C: one stacked reading column.

## Trade-offs
- Steady reading width and clear separation of story from performance context.
- The short supporting column intentionally leaves breathing room below its details.

## Revisit if
Additional work pages need a different image or narrative balance.
