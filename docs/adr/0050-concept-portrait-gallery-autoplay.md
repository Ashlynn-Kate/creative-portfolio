---
id: ADR-0050
title: Soft auto-scroll for Conceptual Portraits galleries
status: superseded
date: 2026-10-05
area: design
superseded_by: ADR-0053
constraint: >
  Layouts must remain mobile-first without phone-width horizontal scroll, and ordinary carousels
  must retain peek-behind navigation by swipe, drag, keyboard, buttons, and peeking-image click.
  Each Conceptual Portraits concept must keep its object beside a light-background gallery of its
  lead and additional portraits, but its outgoing left peek may fade away as the images scroll.
  These galleries must advance every 2.35 seconds only while open and visible, pause on hover or
  focus, stop after manual interaction until reopened, and disable autoplay for reduced motion.
---

# Soft auto-scroll for Conceptual Portraits galleries

## Context

ADR-0009 established the site's mobile-first carousel interaction and ADR-0020 put a
light-background peek-behind carousel beside each Object Translations inspiration object.
The owner wanted the complete concept galleries to move automatically, with a quieter
handoff closer to the home's photographic rhythm. In the lab, the default handoff felt
too abrupt, while a stationary crossfade lost the carousel's scrolling character.
The owner chose the scrolling version that fades the departing image away rather than
bringing it back as a left peek, and explicitly approved replacing the earlier peek rule
for these concept galleries only.

## Decision

Keep the shared carousel component and all existing manual controls. Only the
Conceptual Portraits object-and-gallery pair opts into autoplay. It advances on a
2.35-second cycle with a 1.65-second eased scroll and fade of the outgoing portrait.
The outgoing left preview remains faded out until the next navigation; the incoming
right preview still scrolls into the center. The object remains beside the gallery,
with the primary portrait first and the additional portraits after it. There is no
separate Additional Photos disclosure.

Autoplay runs only while the concept is expanded, its gallery is on screen, the page
is visible, and the visitor is not hovering or focusing it. Hover and focus pause
temporarily. A click, arrow-key action, tap, or drag gives the visitor control and
stops autoplay until that concept is closed and reopened. Automatic changes do not
repeatedly announce captions to screen readers. Autoplay and the special fade are
disabled when reduced motion is requested. Other carousels keep the original
peek-behind behavior and controls. Every layout remains mobile-first.

## Options considered

- **Keep manual navigation only:** makes each portrait deliberately browsed, but
  does not give the series the active editorial rhythm the owner wanted.
- **Stationary crossfade:** gentle, but removes the horizontal scroll and peek.
- **Soft scrolling handoff (chosen):** retains movement while avoiding the harsh
  front-layer switch and the departed image's visible return.

## Trade-offs

- A departed portrait no longer remains as the left preview during autoplay.
- Autoplay needs visibility, input, and reduced-motion handling, so this component
  has more behavioral complexity than the original manual carousel.
- A fast-moving gallery may compete for attention; the visitor can pause or take
  control immediately.

## Revisit if

- The owner wants a different rhythm or the galleries gain much larger image sets.
- Accessibility testing indicates a more explicit pause control is needed.
