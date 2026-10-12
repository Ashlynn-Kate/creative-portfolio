---
id: ADR-0066
title: Prince introduction heading and alignment
status: accepted
date: 2026-10-11
area: design
constraint: >
  The Prince of Egypt introduction must present From story to stage as a section
  heading above both left-aligned paragraphs, not as a separate side label;
  its copy must share the opening photograph's wide-column left edge.
---

# Prince introduction heading and alignment

## Context
After approving the editorial redesign, Ashlynn requested a smaller introduction
lead and a section heading above copy sharing a single left edge.

## Decision
Use a semantic section heading and one left-aligned narrative column within the
existing wide narrative column, without a second inset inside its responsive gutters.
Tighten the vertical space above and below this aligned introduction. Reduce the lead by approximately 10px
at the annotated desktop width, with a readable 21px minimum on phones.
This refines the artistic introduction of ADR-0064 without changing its page sequence.

## Options considered
- Keep the side label and offset narrative.
- Heading above aligned paragraphs (chosen).

## Trade-offs
- A clearer heading and calmer lead preserve hierarchy without separate columns.

## Revisit if
The introduction needs additional imagery or a different narrative structure.
