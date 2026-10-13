---
id: ADR-0076
title: Compact natural-image Live performance directory
status: accepted
date: 2026-10-13
area: design
constraint: >
  Live performance must use a compact editorial directory with natural-ratio,
  uncropped photographs beside titles and metadata on desktop. Both work groups
  must remain visible; phones must stack each photograph above its title and arrow.
---

# Compact natural-image Live performance directory

## Context

The owner compared five local layout studies and chose C, a quieter refinement
of the existing directory rather than an image-tile wall.

## Decision

Use a 960px content measure, photographs up to 260px wide, a 24px desktop row
gap, and subtle rules between groups and works. Present the groups as visible
sections with headings rather than collapsible controls. At 680px and below,
stack the photograph above its title, metadata, and vector navigation arrow.
Keep group membership, titles, labels, order, and destinations data-driven and
unchanged. Images continue through MediaImage and retain their full compositions.

This is consistent with ADR-0049 and ADR-0062: both groups and their projects
remain visible on arrival. It does not alter project return navigation.

## Options considered

- Larger image-led rows or balanced pairs: stronger image presence.
- Compact natural-image rows (chosen): restrained, readable, and uncropped.
- Square image tiles: more photographic but crop the compositions.
- Centered single column: a longer image-led sequence.

## Trade-offs

The directory stays deliberately modest rather than becoming a photographic
wall. Groups no longer collapse, keeping this short collection visible.

## Revisit if

The collection grows enough to need filtering or a different browsing structure.
