---
id: ADR-0002
title: Public repository, site hidden from search
status: accepted
date: 2026-09-27
area: hosting
constraint: >
  The GitHub repository is public, so anything committed (text, images, links) is
  publicly visible and can appear in GitHub and search-engine results even though the
  site itself is hidden from search. Never commit anything the owner hasn't approved
  for public view (unreleased work, private notes, raw exports, secrets).
---

# Public repository, site hidden from search

## Context
The site must be viewable by anyone with the link but not discoverable through search (see ADR-0003). It is hosted on GitHub Pages from `Ashlynn-Kate/creative-portfolio`, which was created as a public repository on a free GitHub account.

The site and the repository are two different things. `noindex` hides the **site** pages; it does nothing for the **repository** at `github.com/Ashlynn-Kate/creative-portfolio`, which GitHub and search engines can index, including every committed photo, all written content, and the site URL in the README.

## Decision
Keep the repository **public for now**. Accept that the source is findable; rely on `noindex` only for the site.

## Options considered
- **Public repository (chosen):** free; GitHub Pages works on free accounts only for public repos.
- **Private repository:** hides the source, photos, and the site link. Requires GitHub Pro on the owner's account (about $4/month) for Pages to work. The site URL and the site itself are unchanged either way.

## Trade-offs
**Pros**
- No cost; no account changes.
- Nothing else in the setup depends on the repo being public, so switching later is a settings change, not a rebuild.

**Cons**
- The repository, and everything committed to it, can be found by searching GitHub or the web, which partly undercuts "not discoverable".
- Anything ever committed stays in the git history even if deleted later.

## Revisit if
- The owner wants her work itself private, not just hidden from search.
- Unreleased work (for example the dance film before its release) needs to go into the repo before she wants it seen.
- The repo starts to appear in search results for her name.

To switch: the owner upgrades to GitHub Pro, then Settings → General → Danger Zone → Change visibility → Private. Pages keeps working at the same URL.
