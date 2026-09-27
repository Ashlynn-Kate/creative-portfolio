---
id: ADR-0008
title: Video — Drive thumbnail links now, YouTube embeds later
status: accepted
date: 2026-09-27
area: media
constraint: >
  Video is shown as a thumbnail image that links to the video file on Google Drive; no
  embedded players yet. All video markup lives in `src/components/VideoLink.astro` so the
  later switch to unlisted YouTube embeds is a one-file change. Never commit video files to
  the repo.
---

# Video: Drive thumbnail links now, YouTube embeds later

## Context
Several projects have video (for example the Prince of Egypt opening scene). Video files are far too large for the repo (GitHub caps files at 100 MB), and the owner's videos already live on Google Drive.

## Decision
- **v1:** a `video` block renders a still image with a play badge that opens the Drive file in a new tab.
- **Later:** switch to unlisted YouTube embeds, which play inline and stream efficiently.
- One component, `VideoLink.astro`, owns all video markup, so the switch doesn't touch content or other components. The `video` block's `url` field will then hold the YouTube URL.

## Options considered
- **Embed Drive's player (iframe):** clunky, requires specific sharing settings, and isn't built for public viewing.
- **Self-hosted video files:** exceeds GitHub's limits and has no adaptive streaming.
- **YouTube embeds now:** the best experience, but the owner hasn't uploaded the videos yet.
- **Drive thumbnail links now, YouTube later (chosen).**

## Trade-offs
**Pros**
- Works today with files she already has.
- A clean path to inline playback.

**Cons**
- Visitors leave the site to watch.
- Drive's sharing settings must allow "anyone with the link" or viewers hit a permission wall.

## Revisit if
- The videos are uploaded to YouTube. Update `VideoLink.astro` and supersede this ADR.
