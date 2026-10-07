---
id: ADR-0052
title: Stable home navigation arrows
status: superseded
date: 2026-10-06
area: design
superseded_by: ADR-0055
constraint: >
  The home page's Areas of work links and its adjacent portfolio links must use
  drawn arrow icons rather than Unicode arrow characters, so their appearance
  stays typographic and consistent across desktop and mobile platforms.
---

# Stable home navigation arrows

## Context

The diagonal arrow character beside each home-page area appeared as a colorful
emoji on the owner's phone, although it looked like a quiet text glyph in the
desktop mobile preview. Font selection and emoji presentation differ by device.

## Decision

Use small inline SVG arrows for the Areas of work links and the two related
links beneath them. The icons inherit the existing accent color and are hidden
from assistive technology because the link text already names each destination.

## Options considered

- **Keep Unicode arrows:** depends on the phone's emoji and font behavior.
- **Force text presentation with a Unicode variation selector:** compact, but
  still relies on platform font support.
- **Draw the arrows as SVG (chosen):** preserves their restrained appearance
  across devices without adding image assets or a library.

## Trade-offs

- The markup is slightly longer than a single character.
- Arrow shape is now controlled in code rather than by a font.

## Revisit if

- The site adopts a shared icon component or formal icon set.
