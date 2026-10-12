---
id: ADR-0067
title: Prince complete production page
status: accepted
date: 2026-10-11
area: design
constraint: >
  The Prince of Egypt must present its approved opening, artistic introduction,
  alternating Throne, Landscape and Opening chapters, and Performance Photos on one
  complete page, without bottom Selected Materials tiles or separate supporting pages.
  Its galleries must cycle smoothly forward with three seconds at rest and no backing
  rectangles, with manual arrows and a logical count for Performance Photos.
---

# Prince complete production page

## Context
Ashlynn requested removal of the four bottom tiles and their separate pages because
their material is now expanded in the main narrative. She explicitly approved replacing
ADR-0036 and the Selected Materials requirement in ADR-0064.

## Decision
Retain the approved Gift of Athens-style opening with the reaching-dancers photograph
and understated credits. Retain the introduction refined in ADR-0066.
Keep the alternating, closely paired chapters and their detailed 17px narrative copy.
Keep reference photographs before stage photographs; the Opening stage image links
to the existing Drive clip through VideoLink. Its compact reference gallery and wider
17px note share a row, with vertically centered text, stacking on phones.
Keep the subtle neutral-grey separator above Performance Photos, all seven photographs,
and tightly placed arrow controls and logical counter.
Retain 1.65-second smooth transitions after three seconds settled, forward cycling for
two-image galleries, and offscreen, hidden-page and reduced-motion pausing.
Remove Selected Materials. Retire the four supporting routes, redirecting old links to
matching main-page sections. Preserve their YAML as unpublished archival content;
the performance gallery still reuses that photo list. No images are deleted.
Production remains YAML-driven and never imports the lab.

## Options considered
- Keep duplicated detail navigation and four supporting pages.
- Complete main-page narrative with redirected legacy links (chosen).

## Trade-offs
- Visitors can see the complete production without repeated navigation.
- Archival source material remains recoverable while the old pages stop publishing.

## Revisit if
New supporting material needs a genuinely separate destination.
