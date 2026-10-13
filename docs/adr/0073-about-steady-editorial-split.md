---
id: ADR-0073
title: About steady editorial split
status: accepted
date: 2026-10-13
area: design
constraint: >
  About must use the approved steady editorial split, with portrait and contact
  information in a supporting left column and the biography in a continuous
  right column. On phones the order must be portrait, biography, then contact.
---

# About steady editorial split

## Context
Ashlynn compared three About reading-rhythm labs and chose A to replace the
floating portrait and changing biography width.

## Decision
Keep the existing portrait, biography, contact wording, email, and font sizes.
Use a 40/60 desktop grid with a restrained gap. Keep contact directly beneath
the portrait with a quiet neutral rule, rather than spanning the full page.
Keep the biography in one continuous column without wrapping beneath the image.
At the existing 720px About breakpoint, stack portrait, biography, and contact
in their natural document order. The portrait stays compact on phones.
This is consistent with ADR-0018's portrait-led editorial About page; the menu
and other pages are unchanged. No production imports from the lab.

## Options considered
- A: steady portrait and biography columns (chosen).
- B: portrait above one reading column.
- C: introductory pairing with biography continuation below.

## Trade-offs
- A stable reading width and clear separation of biography from contact.
- The shorter supporting column leaves intentional breathing room below it.

## Revisit if
The biography, portrait, or contact needs change substantially.
