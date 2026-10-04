---
id: ADR-0033
title: Works directory navigation
status: superseded
date: 2026-10-02
area: design
constraint: >
  The primary menu's Works link must open a dedicated, data-driven Works page
  organized into Film, Live Performance, and Photography; Live Performance
  must group full-length productions and individual pieces in closed
  disclosures, while the home page must retain only its three core case studies.
superseded_by: ADR-0043
---

# Works directory navigation

## Context

The growing portfolio needs an intentional navigation layer without extending
the home page beyond Object Translations, Mindspace, and The Prince of Egypt.
Choreographic works should remain easy to discover alongside the production
they relate to.

## Decision

The menu's Works link opens `/works/`. The page is content-driven and presents
Film, Live Performance, and Photography. Live Performance contains closed
Full-length productions and Individual pieces disclosures. The Prince of Egypt
appears in the former and Knock on Wood in the latter. Choreographic Works no
longer appears as a separate home-page Selected Works category.

## Options considered

- **Keep a fourth home-page case study:** makes the home page longer and less focused.
- **Works directory (chosen):** gives all media a clear destination while preserving a concise home page.

## Trade-offs

- Pros: scalable organization, clear grouping, and a quieter home page.
- Cons: viewers take one extra click to reach choreographic work.

## Revisit if

The collection needs filtering across several film, photography, or live
performance projects.
