---
id: ADR-0011
title: Publish through branches and pull requests
status: accepted
date: 2026-09-27
area: hosting
constraint: >
  Changes must be committed and pushed on a separate branch, then merged into
  main through a pull request after review. Do not push commits directly to main.
---

# Publish through branches and pull requests

## Context

The owner was instructed to work on branches and avoid pushing directly to
`main`. The existing publishing guide said to "commit and push" without naming
the branch or review step, which could publish an unfinished change.

## Decision

Codex creates a branch for each set of changes, commits and pushes that branch,
and opens a pull request. Merging the pull request into `main` starts the
existing GitHub Pages deployment.

## Options considered

- **Push directly to main:** fewer steps, but bypasses review.
- **Use branches and pull requests (chosen):** keeps changes reviewable before
  they appear on the public site.

## Trade-offs

- Adds a review and merge step to each publication.
- Keeps work in progress separate from the live site.

## Revisit if

- The owner chooses a different publishing workflow.
