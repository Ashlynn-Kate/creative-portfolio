---
id: ADR-0075
title: Mindspace story and mood board
status: accepted
date: 2026-10-13
area: design
constraint: >
  Mindspace must pair its Concept and contribution narrative with a Mood board
  in fixed desktop columns, stacking the narrative before the gallery on phones.
  Its reference images must be described as inspiration for the intended look
  and feel, not exact scenes or images created or photographed by Ashlynn.
---

# Mindspace story and mood board

## Context
Ashlynn clarified that the reference pictures are a general mood board and that
the existing project information remains correct. She reviewed three layout
studies and chose B's story-and-mood-board pairing.

## Decision
Use a reusable typed narrative-gallery block with a 42.5/57.5 desktop split,
matching the approved lab. At 720px and below, stack Concept and contribution
above the mood board. Keep the narrative left edge aligned to the wide content
column and the contribution directly after Concept, consistent with ADR-0030
and ADR-0065. Preserve the original text, images, captions, metadata and status.
Rename Visual references to Mood board and clarify the reference-image note.
Reuse the existing gallery arrows, count and image pipeline. No rehearsal
footage is needed for the current page. No production code imports the lab.

## Options considered
- A: compact introduction above imagery.
- B: stable story and mood-board columns (chosen).
- C: mood-board-first opening.

## Trade-offs
- Clear reading hierarchy and a more cohesive introduction.
- The image note distinguishes creative direction from completed film imagery.

## Revisit if
Ashlynn supplies rehearsal or final film material for the page.
