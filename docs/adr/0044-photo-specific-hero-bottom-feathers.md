---
id: ADR-0044
title: Photo-specific lower-edge feathering in the home hero
status: accepted
date: 2026-10-04
area: design
constraint: >
  High-contrast home-hero photographs must receive non-destructive, photo-specific
  lower-edge fades layered with their existing perimeter feathers. These fades
  must not change image aspect ratios, source pixels, collage positions, or
  transparency away from the edges.
---

# Photo-specific lower-edge feathering in the home hero

## Context

Some combinations of the asynchronous collage showed straight lower image
boundaries, especially on dark portraits and studio or outdoor backgrounds.
The shared elliptical mask did not actually reach full transparency at the
bottom of the image box. A global change risked weakening combinations that
already looked seamless. The owner approved individual treatments provided
the photos' aspect ratios and central transparency remain unchanged.

## Decision

Keep the existing collage geometry, image files, animation, and perimeter
masks. Add a separate bottom gradient only to the black-turtleneck portrait,
side-looking portrait, profile portrait, suspended dancer, and outdoor veil
photo. Intersect it with each existing mask so the side and top treatments
remain intact. Tune each fade's starting point to its subject and background.

## Options considered

- **One stronger mask for every photograph:** simple, but would unnecessarily
  fade pale images that already blend well.
- **Crop or resize the problem images:** could hide a line, but risks changing
  the compositions and aspect ratios the owner wants preserved.
- **Individual edge-only fades (chosen):** targets the disruptive boundaries
  without modifying the photographs themselves.

## Trade-offs

- The hero has a few more named style rules to maintain.
- Each image can be refined independently as combinations are reviewed.

## Revisit if

An individual subject is visibly lost in its bottom fade, or a new photograph
has an edge that needs a different treatment.
