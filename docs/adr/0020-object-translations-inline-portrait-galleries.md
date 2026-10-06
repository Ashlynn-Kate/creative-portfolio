---
id: ADR-0020
title: Object Translations inline portrait galleries
status: superseded
date: 2026-10-01
area: design
superseded_by: ADR-0050
constraint: >
  Each Object Translations concept must show its inspiration object beside a light-background,
  peek-behind gallery whose first image is the primary portrait and whose remaining images are
  the additional portraits; it must not use a separate Additional Photos disclosure.
---

# Object Translations inline portrait galleries

## Context

The separate Additional Photos disclosure obscured related portraits from the object-and-portrait
comparison. The owner selected the existing peek-behind gallery interaction but without its dark backdrop.

## Decision

Place each concept's original portrait and additional portraits in one light-background carousel alongside
the object. Keep the carousel's swipe, drag, keyboard, and button controls.

## Options considered

- **Separate Additional Photos disclosure:** keeps the initial comparison brief but separates connected work.
- **Inline light peek-behind gallery (chosen):** preserves the established interaction and keeps the full portrait set together.

## Trade-offs

- Expanded disclosures occupy more vertical space.
- Every concept has a consistent object and gallery pair.

## Revisit if

- Portrait sets need captions visible beside each image.
