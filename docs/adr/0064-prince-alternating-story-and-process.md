---
id: ADR-0064
title: Prince alternating story and process
status: accepted
date: 2026-10-11
area: design
constraint: >
  The Prince of Egypt must use the Gift of Athens opening-header layout with
  the approved reaching-dancers photograph, understated credits, and artistic introduction,
  followed by alternating, closely paired Throne, Landscape, and Opening chapters.
  Reference galleries must cycle smoothly forward with a three-second settled viewing time,
  without backing rectangles; Performance Photos must retain arrows and a logical photo count.
---

# Prince alternating story and process

## Context
Ashlynn reviewed three full-page studies and three section studies, chose option C's
alternating editorial sections, and explicitly approved replacing ADR-0024 and ADR-0034.

## Decision
Use the owner-approved combined story-and-process draft, with section option C.
Keep references before finished-stage images. The Opening image links to its existing
Drive video through VideoLink. Its reference paragraph sits beside, vertically centered
with, the reference gallery on desktop; the pair stacks on phones.
Small chapter galleries have no arrow buttons, and the opening references have no controls.
Performance Photos includes every photograph from its existing content page, arrows,
and a counter, with controls immediately below the image.
Use a 1.65-second smooth slide/fade after three seconds at rest. Two-image galleries
cycle in one direction rather than bouncing. Pause offscreen, hidden, or with reduced motion.
Keep the existing compact four-across square Selected Materials overlay tiles, two on phones,
consistent with ADR-0036. Store all chapters in YAML and render with reusable block components;
production does not import the lab.

## Options considered
- Close pairings and stacked storytelling.
- Alternating editorial (chosen), bringing image columns directly next to their narrative.

## Trade-offs
- The process and finished work are visible together without separate detail navigation.
- Supporting detail pages remain available through Selected Materials.

## Revisit if
New scenes or a different video platform require a revised narrative.
