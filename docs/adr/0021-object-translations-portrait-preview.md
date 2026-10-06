---
id: ADR-0021
title: Object Translations portrait preview
status: superseded
date: 2026-10-01
area: design
constraint: >
  The Object Translations summary page must place a compact, static four-portrait teaser between
  its introduction and the All Concepts link, showing all four images without scrolling.
superseded_by: ADR-0049
---

# Object Translations portrait preview

## Context

The Object Translations case-study introduction needed an immediate visual invitation to the
complete series before visitors choose to view every concept. A scrolling carousel made the fourth
portrait easy to miss and added an interaction that was not needed for this short teaser.

## Decision

Show four differently styled Object Translations portraits in a small static gallery directly below
the introduction and above the All Concepts link. Keep the portraits in their selected order and use
unaggressive containment so styling, pose, and silhouette remain visible. On narrow screens, show
the same four images in a two-by-two grid rather than adding horizontal scrolling.

## Options considered

- **Horizontal scrolling teaser:** echoes the site carousel but can hide the final portrait.
- **Static four-image gallery (chosen):** lets every visual direction be understood at once while
  keeping the composition quiet.

## Trade-offs

- The portraits are smaller than a carousel slide.
- The full all-concepts page remains the place to explore each object-to-portrait connection.

## Revisit if

- The teaser grows beyond four images or needs image-specific captions.
