---
id: ADR-0071
title: Live performance return navigation
status: accepted
date: 2026-10-12
area: design
constraint: >
  Projects listed in Live performance must use Live performance as their page-level
  return destination. The separate Choreographic Works directory must redirect
  to Live performance, while individual-piece URLs remain unchanged.
  Forward must retain its approved video-narrative layout, abbreviated clip,
  persistence narrative, owner-provided image, and accurate choreography and company credits.
---

# Live performance return navigation

## Context
Ashlynn found the separate Choreographic Works directory confusing after entering
projects through Live performance. She explicitly approved replacing ADR-0070's
requirement to retain that separate listing.

## Decision
Live performance is the sole focused directory for full-length productions and
individual pieces. Top return links on its projects, and the bottom return links
on individual pieces, lead there with matching destination labels.
Resolve group membership from the existing Works navigation YAML rather than
hardcoding production IDs or category names into page templates.
Keep the site-wide Works overview and return behavior of other categories unchanged.
Redirect the old collection URL with the shared noindex/nofollow layout, preserving
bookmarks and all individual-piece routes. Do not intercept native browser history.
Keep Forward after Knock on Wood among Individual pieces. Retain its established
layout, uncropped approved image, abbreviated Drive clip, Behind the work,
Choreographic approach, and Presentation details. Preserve the persistence narrative
and credits to Ashlynn Kate and GO! Contemporary Dance Works at Studio Arts for
Dancers in Knoxville, Tennessee, without exclusive copyright claims.
This is consistent with ADR-0049's focused area destinations and ADR-0032's
individual-work layout; it supersedes ADR-0070 only to eliminate the extra directory.

## Options considered
- Keep a second collection directory as the individual-piece return destination.
- One focused Live performance directory (chosen).

## Trade-offs
- A single return destination gives visitors a predictable browsing loop.
- Legacy collection bookmarks redirect instead of showing the old listing.

## Revisit if
Works belong to multiple focused areas and need a different return-path convention.
