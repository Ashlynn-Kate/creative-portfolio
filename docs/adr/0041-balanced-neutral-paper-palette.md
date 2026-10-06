---
id: ADR-0041
title: Balanced neutral paper palette
status: accepted
date: 2026-10-04
area: design
constraint: >
  The site background must use the balanced neutral-grey paper palette, with
  matching neutral surface, rule, and hero-feather colors rather than the
  superseded cool-grey palette.
---

# Balanced neutral paper palette

## Context

The airy cool-grey palette was light and clean but felt too cool alongside the
portfolio's more saturated photography, particularly the work from *The Prince
of Egypt*. The owner selected the balanced neutral-grey lab option as a calmer
companion to the imagery.

## Decision

Use the balanced neutral-grey palette: `#efefed` for paper, `#e3e3e1` for
recessed paper surfaces, and `#cccac7` for rules. The home hero's photographic
wash and feathered edges continue to derive from the paper token so they blend
into the new background.

## Options considered

- **Airy cool grey:** clean and light, but a little too blue against saturated
  work.
- **Balanced neutral grey (chosen):** preserves the same lightness while
  removing the cool cast.
- **Soft warm grey:** more warmth than needed for the desired neutral base.

## Trade-offs

- Pros: makes saturated photographs feel more at home while retaining the
  site's bright editorial character.
- Cons: the shift is intentionally subtle, so it will feel less visibly
  different from the previous palette.

## Revisit if

The site moves toward a more overtly warm or a darker visual direction.
