---
id: ADR-0055
title: Consistent vector arrows across the interface
status: accepted
date: 2026-10-06
area: design
constraint: >
  Decorative arrows used for navigation, paging, action links, and external-link
  cues must be drawn vector icons rather than Unicode arrow characters, across
  production pages and design-lab navigation, so mobile platforms cannot render
  them as emoji. Keep meaningful accessible link text and hide decorative icons
  from assistive technology.
---

# Consistent vector arrows across the interface

## Context

The arrow beside home-page Areas of work links rendered as a colorful emoji on
the owner's phone, although it appeared as a restrained text glyph in the
desktop mobile preview. A wider audit found Unicode arrows in menu navigation,
back links, page-to-page navigation, work listings, full-resolution labels,
video links, and design-lab controls. These could vary by platform in the same
way.

## Decision

Use the shared `ArrowIcon` SVG component for decorative arrow affordances across
the site and design-lab navigation. Preserve each arrow's intended direction.
Icons are decorative and hidden from assistive technology; link text continues
to convey the destination or action. Keyboard-arrow references in instructions
and code remain ordinary technical text, not decorative UI arrows.

## Options considered

- **Keep Unicode arrows outside the homepage:** small and familiar, but still
  vulnerable to phone-specific emoji presentation.
- **Use text-presentation selectors:** avoids some emoji rendering, but relies
  on font support and leaves inconsistent icon shape.
- **Use shared vector icons everywhere (chosen):** stable appearance across
  devices and a single maintainable implementation.

## Trade-offs

- Markup is longer than a single character, and icon sizing should be checked
  alongside the adjacent text.
- Arrow shapes are controlled by the shared component rather than a font.

## Revisit if

- A formal icon system replaces the shared component.
- The site adopts a different consistent interaction language for these cues.
