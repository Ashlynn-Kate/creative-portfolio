---
id: ADR-0007
title: Image pipeline — automatic web versions, full resolution on Google Drive
status: accepted
date: 2026-09-27
area: media
constraint: >
  Original images go in `src/assets/images/<case>/`, never in `public/`, and are always
  rendered through `MediaImage.astro` (Astro's image pipeline), which produces WebP web
  versions (at most 2000px wide), responsive sizes, and lazy loading. The owner must never
  have to resize or compress anything by hand. Full-resolution originals live on Google
  Drive: an image may link to its Drive file (`highRes`), but never embed or hotlink a Drive
  file as the image source.
---

# Image pipeline: automatic web versions, full resolution on Google Drive

## Context
The site is image-heavy. The owner's originals are large (screenshots and photos of 0.1–2.3 MB each in v1, and potentially much larger camera originals later), and she can't be expected to prepare web versions. Visitors who want the full-quality image, such as casting directors or collaborators, should still be able to get it.

GitHub limits: a Pages site can be about 1 GB, a single file 100 MB (warning at 50 MB), and a web-UI upload 25 MB.

## Decision
- Originals are committed to `src/assets/images/` and processed at build time by Astro: WebP, a set of responsive widths up to 2000px (never upscaled), `sizes` hints, and lazy loading. In v1 this turned 22 MB of originals into files of roughly 7–100 KB each.
- Each displayed image is the web version. When a `highRes` Google Drive link is set in the content, clicking the image opens the Drive file in a new tab. The link is the only way Drive is used.

## Options considered
- **Hand-exported web versions in `public/`:** no build step, but manual work for the owner and no responsive sizes.
- **Hotlinking Google Drive images:** Drive isn't a CDN; its direct links are slow, rate-limited, and change format.
- **An image CDN (Cloudinary, imgix):** excellent, but another account, and overkill at this size.
- **Astro's build-time pipeline plus Drive links (chosen).**

## Trade-offs
**Pros**
- Zero manual image work; fast pages.
- Full quality is still one click away.

**Cons**
- Originals count against the repo and GitHub's size limits.
- Builds get slower as the library grows.
- In a public repo (ADR-0002), committed originals are publicly downloadable.

## Revisit if
- The repo approaches GitHub's size limits, or builds get slow. Consider keeping only web-sized masters in the repo, or Git LFS.
- Camera originals routinely exceed 25–50 MB.
