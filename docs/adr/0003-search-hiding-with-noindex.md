---
id: ADR-0003
title: Hide the site from search with noindex, not robots.txt
status: accepted
date: 2026-09-27
area: hosting
constraint: >
  Every page must carry `<meta name="robots" content="noindex, nofollow">` (set once in
  `src/layouts/BaseLayout.astro`). Never add a sitemap, and never block crawlers in
  `robots.txt`. Keep title, description, and Open Graph tags so shared links still preview.
---

# Hide the site from search with noindex, not robots.txt

## Context
The owner wants the site public to anyone with the link, but not discoverable through search engines. GitHub Pages serves static files only, so response headers such as `X-Robots-Tag` can't be set.

## Decision
- A `noindex, nofollow` robots meta tag on every page, set once in the shared layout so no page can miss it.
- No sitemap.
- No `robots.txt` blocking.
- Keep `<title>`, meta description, and Open Graph tags: the site is shared by link, so previews in Messages, email, and social apps should look good.

## Options considered
- **`robots.txt` `Disallow`:** looks like the obvious fix but is counterproductive. A crawler that is blocked never loads the page, so it never sees `noindex`, and a blocked URL can still be listed (URL only, no snippet) if something links to it. For a project site, `robots.txt` would also have to live at `ashlynn-kate.github.io/robots.txt`, outside this repo, so it can't be controlled from here anyway.
- **`X-Robots-Tag` header:** equivalent to the meta tag and covers non-HTML files too, but GitHub Pages can't send custom headers.
- **Password protection:** real privacy, but GitHub Pages can't do it, and it would break "anyone with the link can view".
- **`noindex` meta tag (chosen).**

## Trade-offs
**Pros**
- Honored by all major search engines; the site was never indexed, so it never needs to be removed.
- One line in one file; no per-page work.

**Cons**
- Not privacy: anyone with the link can view the site, and anyone can share the link.
- Images and other non-HTML files carry no meta tag. Direct image URLs could in principle be indexed if linked from elsewhere; this is acceptable for now.
- Doesn't cover the repository itself (see ADR-0002).

## Revisit if
- The owner wants real access control (move hosting to a platform with password protection, e.g. Netlify or Cloudflare Pages).
- The owner decides she *wants* the site discoverable (for example, once a custom domain is attached and it becomes her public professional site). Then remove the tag, add a sitemap, and supersede this ADR.
