---
id: ADR-0019
title: Object Translations concept thumbnails
status: accepted
date: 2026-10-01
area: design
constraint: >
  Closed disclosures on the Object Translations all-concepts page must show a compact,
  consistently sized inspiration-object thumbnail without changing the full-size images inside.
---

# Object Translations concept thumbnails

## Context

Concept names alone do not reveal the inspiration object at a glance.

## Decision

Show a 64-pixel, contain-fitted object thumbnail beside each all-concepts disclosure.

## Options considered

- **Text-only list:** compact but lacks visual context.
- **Compact inspiration thumbnails (chosen):** preserves scanability and reveals each object.

## Trade-offs

- Rows are slightly taller.
- Small images prioritize the full object over filling every pixel.

## Revisit if

- The collection needs a denser, image-led grid.
