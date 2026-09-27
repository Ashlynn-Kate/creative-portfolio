<!-- GENERATED from the ADR files in this folder by scripts/adr-registry.mjs. Do not edit: run `npm run adr`. -->

# Decisions

Architecture decision records (ADRs): one file per decision, with the context, the options considered, the
trade-offs, and when to revisit it. Each one's one-line rule (`constraint`) is also copied into
[`AGENTS.md`](../../AGENTS.md), so AI agents always follow it.

| ID | Decision | Status | Area | Date |
|---|---|---|---|---|
| [ADR-0001](0001-astro-static-site.md) | Astro static site, no site-wide UI framework | accepted | stack | 2026-09-27 |
| [ADR-0002](0002-public-repo-hidden-site.md) | Public repository, site hidden from search | accepted | hosting | 2026-09-27 |
| [ADR-0003](0003-search-hiding-with-noindex.md) | Hide the site from search with noindex, not robots.txt | accepted | hosting | 2026-09-27 |

## Adding or changing a decision

1. Copy [`_template.md`](_template.md) to the next number, e.g. `0004-short-name.md`, and fill it in.
2. To replace a decision, write a new ADR and set the old one to `status: superseded` with `superseded_by: ADR-NNNN`.
   Don't rewrite old decisions; the history is the point.
3. Run `npm run adr` to update this index and `AGENTS.md`. The deploy fails if you forget.
