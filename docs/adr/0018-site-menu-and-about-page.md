---
id: ADR-0018
title: Site menu and About page
status: accepted
date: 2026-09-30
area: design
constraint: >
  The site header must use a three-line menu control that reveals links to Work,
  Disciplines, and About, and the About page must present Ashlynn Kate's biography
  with a primary portrait in an editorial layout.
---

# Site menu and About page

## Context

The original header exposed Work and Disciplines as two small links, which did not leave
room for a biography page and made navigation feel secondary to the page content. The
owner compared a named navigation control with a three-line menu in the design lab and
selected the menu direction.

## Decision

Replace the header links with an accessible native disclosure menu, represented by a
three-line icon. Its open state lists Work, Disciplines, and About as editorial navigation
links. Add a standalone About page with the owner's portrait and biography.

## Options considered

- **Named “Navigation” control:** explicit, but added a visible label to the quiet header.
- **Three-line menu with an editorial link list (chosen):** keeps the header minimal while
  giving the expanded navigation enough visual presence.

## Trade-offs

- Visitors take one extra click to reach navigation links.
- The native disclosure keeps the menu keyboard-accessible without adding site-wide JavaScript.

## Revisit if

- The portfolio gains enough top-level pages that the menu needs grouping or search.
