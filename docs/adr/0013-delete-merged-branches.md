---
id: ADR-0013
title: Delete merged work branches
status: accepted
date: 2026-09-27
area: workflow
constraint: >
  After a pull request is merged, Codex must delete its finished branch on
  GitHub and locally, after verifying the merge and that no ongoing work needs
  the branch. Keep main as the local checkout for the next task.
---

# Delete merged work branches

## Context

The owner wants finished branches removed so the repository stays easy to
navigate. Completed work remains in `main` after the pull request merge.

## Decision

Verify the pull request is merged, then delete its remote and local work
branches. Leave the local checkout on the updated `main` branch. Do not delete
a branch that still has work in progress.

## Options considered

- **Keep all merged branches:** preserves redundant pointers, but clutters
  branch lists over time.
- **Delete finished branches (chosen):** keeps the branch list focused on work
  that is still active.

## Trade-offs

- A branch name must be recreated if someone wants to reuse it later; merged
  commits remain available through `main` and the pull request.

## Revisit if

- The owner chooses to retain particular merged branches.
