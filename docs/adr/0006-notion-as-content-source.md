---
id: ADR-0006
title: Notion as the content source; never hotlink Notion files
status: accepted
date: 2026-09-27
area: content
constraint: >
  Notion is the source of the owner's content. Notion file and image URLs are signed and
  expire after about an hour: never reference a Notion URL from the site; always download
  the file into the repo or build output. The Notion API token must only ever live in a
  GitHub Actions secret (and a git-ignored `.env` locally), never in a committed file. Raw
  Notion exports (`notion-export-*/`) must never be committed.
---

# Notion as the content source; never hotlink Notion files

## Context
The owner writes and organizes her work in Notion, and she is non-technical: Notion is the tool she already uses. The developer has guest access to her pages. The Notion connector available to Claude Code is tied to a different workspace, so it can't read her guest-shared pages.

## Decision
- **Now (v1):** the site was initialized from a one-time Markdown & CSV export (`notion-export-27Sept26/`, git-ignored). Images were copied from the export into `src/assets/images/` with readable names.
- **Later:** a build script pulls a Notion "Projects" database through the Notion API and maps it onto the block model (ADR-0005). It runs on a schedule and on manual dispatch. The integration token is a GitHub Actions secret; adding it needs repo admin, which only the owner has.
- Because Notion's file URLs expire, the sync must **download** every image at build time.

Suggested database fields for the future sync: Title, Slug, Category (multi-select), Date, Role, Description, Cover image, Gallery images, Video URL, High-res link (Google Drive), Published (checkbox), Order.

## Options considered
- **Keep content only in the repo:** simplest, but the owner would have to learn a second editing tool or route every change through Codex.
- **A headless CMS (Sanity, Contentful, Decap):** purpose-built, but another tool and account for a non-technical owner.
- **Notion (chosen):** she already uses it.

## Trade-offs
**Pros**
- The owner keeps working where she's comfortable.
- The export gave a fast, complete v1.

**Cons**
- Notion's export and API formats can change.
- Expiring file URLs force a download step.
- Guest access limits what the developer's own tools can read; the API integration must be created and shared from the owner's workspace.

## Revisit if
- The owner stops using Notion, or edits mostly through Codex anyway (then the repo YAML becomes the source and the sync isn't needed).
- Notion's API limits or formats make the sync unreliable.
