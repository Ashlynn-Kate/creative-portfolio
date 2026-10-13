---
id: ADR-0074
title: About uncropped portrait
status: accepted
date: 2026-10-13
area: design
constraint: >
  The About portrait must show the full original image at its natural aspect
  ratio, including the visible top of Ashlynn's jeans, without a fixed-ratio crop.
---

# About uncropped portrait

## Context
Ashlynn noticed that the real page cropped more of the portrait than the approved
lab appearance. She requested the full image, including the jeans.

## Decision
Remove the fixed 3/4 image frame and cover fit. Use responsive width and natural
height on desktop and phones. Preserve the source image, image pipeline, and
the editorial split of ADR-0073.

## Options considered
- Fixed portrait-ratio crop.
- Full original image (chosen).

## Trade-offs
- The portrait column becomes taller, preserving the complete composition.

## Revisit if
Ashlynn provides a replacement portrait or explicitly approves a crop.
