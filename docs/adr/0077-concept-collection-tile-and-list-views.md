---
id: ADR-0077
title: Concept collection tile and list views
status: accepted
date: 2026-10-13
area: design
constraint: >
  Conceptual Portraits must offer an object-only tile mosaic and the existing
  named-disclosure list, with portraits hidden until a concept is selected.
  The mosaic must use unequal, uncropped image sizes on subtle grey backing,
  no hover titles, and restrained 2.5 percent hover enlargement without overlapping images.
---

# Concept collection tile and list views

## Context

The owner selected lab G after exploring portrait previews, object mosaics,
spacing, placement, backing colors, and hover effects. Portrait previews gave
away the reveal. She explicitly approved replacing ADR-0017's list-only rule.

## Decision

Provide Tile view and List view controls on the same collection page. Start in
the object mosaic when JavaScript is available; retain the original functional
list as the no-JavaScript fallback. Both views use the same content blocks.
Tile selection opens a named native dialog with the concept's original gallery
and translation notes. Close and Escape dismiss it, with native focus handling.

Preserve the approved unequal tile arrangement and individual offsets. Swap
the floral shoe and highlighter positions. Use #e7e7e4 backing extending past
the outer objects, no separate grey boxes, and no floating hover titles. Enlarge
images 2.5 percent on hover or keyboard focus, disabling enlargement for reduced
motion. Keep the Sharpie's pale background distinct with a non-destructive
brightness/contrast adjustment; originals remain untouched.

Store concept placement and photo treatment in content, not case-specific page
code. Reuse the existing concept renderer in both the list and dialogs, keeping
ADR-0054's responsive gallery proportions and mobile thumbnail treatment.
The existing introduction, disciplines, images, copy, and concept order remain.

## Options considered

- Portrait-led preview grids: reveal the finished work too early.
- Object-only list: retained as an alternate browsing mode.
- Unequal object mosaic with subtle enlargement (chosen): invites exploration
  while preserving the portrait reveal.

## Trade-offs

The mosaic needs JavaScript for modal interaction and contains intentional art
direction for the current collection. New concepts may need new mosaic placement.
The list remains available for scanning and as a progressive-enhancement fallback.

## Revisit if

The collection outgrows the current mosaic or visitors need shareable concept URLs.
