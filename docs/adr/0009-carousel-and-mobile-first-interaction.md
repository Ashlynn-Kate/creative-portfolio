---
id: ADR-0009
title: Peek-behind carousel and mobile-first interaction baseline
status: superseded
date: 2026-09-27
area: design
superseded_by: ADR-0050
constraint: >
  Every layout must work mobile-first, with no horizontal page scroll at phone widths. The
  signature peek-behind carousel (`src/components/Carousel.astro`) must keep working with
  touch swipe, mouse drag, keyboard arrow keys, the prev/next buttons, and clicking a peeking
  image, and must respect `prefers-reduced-motion`. Any new motion or animation must also
  respect reduced motion.
---

# Peek-behind carousel and mobile-first interaction baseline

## Context
The site is a portfolio for an artistic director, so the experience itself shows her taste. The brief called for a signature interaction: a carousel where the current image sits in front and the previous and next images peek out behind it. Many visitors will open the site from a shared link on a phone.

## Decision
- The carousel shows the current image in front, with its neighbors scaled down, dimmed, and offset behind it. It loops.
- Input methods: swipe (touch), drag (mouse), arrow keys when focused, prev/next buttons, and clicking a peeking image to bring it forward.
- Accessibility: slides that aren't in front are hidden from screen readers and skipped by Tab; each caption is announced to screen readers as the slide changes; motion is removed under `prefers-reduced-motion`.
- Layouts are designed for phones first, then widened.

## Options considered
- **A carousel library (Swiper, Embla):** robust, but a dependency, and generic-looking without heavy restyling.
- **A plain grid or lightbox:** simpler, but loses the signature feel.
- **A small custom component (chosen):** about 100 lines of script, fully styled to the site.

## Trade-offs
**Pros**
- A distinctive feel; no dependency; small.

**Cons**
- We own its bugs. v1 testing caught two (pointer capture swallowing clicks on peeking images, and a selector collision that overwrote the first slide), both fixed.
- Any change should be retested across all input methods.

## Revisit if
- The carousel needs features a library would provide cheaply (thumbnails, zoom, virtualized very large sets).
