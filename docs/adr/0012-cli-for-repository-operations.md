---
id: ADR-0012
title: Use CLI commands for repository operations
status: accepted
date: 2026-09-27
area: workflow
constraint: >
  Codex must use Git and GitHub CLI commands for repository tasks such as
  branching, commits, pushes, pull requests, and merges. Do not use computer-use
  or browser automation for those tasks.
---

# Use CLI commands for repository operations

## Context

The owner prefers the command-line workflow her husband set up. During the
first pull request, Codex opened a browser automation workflow because GitHub
CLI was not installed. The owner explicitly asked future chats to use CLI
commands for Git tasks.

## Decision

Use `git` for local repository work and `gh` for GitHub pull requests and
merges. When `gh` needs authentication, use its normal sign-in flow and leave
the authorization step to the owner.

## Options considered

- **Computer-use or browser automation:** adds UI permissions and is less
  repeatable for repository tasks.
- **Git and GitHub CLI (chosen):** makes the branch and review workflow
  straightforward and reproducible.

## Trade-offs

- GitHub CLI must be installed and signed in once on a new computer.

## Revisit if

- The owner changes her preferred workflow.
