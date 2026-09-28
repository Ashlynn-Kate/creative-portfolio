#!/usr/bin/env node
/**
 * Builds the decision registry from the ADR files in docs/adr/.
 *
 * Reads each ADR's frontmatter (id, title, status, date, area, constraint) and writes:
 *   1. AGENTS.md, between the adr-registry markers: every accepted decision's
 *      constraint, so agents always see the rules (Codex has no file imports).
 *   2. docs/adr/README.md: a clickable index for humans (GitHub shows it when
 *      you open the folder).
 *
 * Usage:
 *   npm run adr          regenerate both outputs
 *   npm run adr:check    fail if either output is out of date (used in CI)
 *   --validate           only check the ADR files themselves (used by the pre-commit hook)
 *   --root <dir>         run against another copy of the repo (used by the pre-commit hook)
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

// --root <dir> runs against another copy of the repo (the pre-commit hook passes a
// snapshot of the staged files, so the check matches exactly what is being committed).
const rootArg = process.argv.indexOf('--root');
const ROOT = rootArg > -1 ? process.argv[rootArg + 1] : join(dirname(fileURLToPath(import.meta.url)), '..');
const ADR_DIR = 'docs/adr';
const AGENTS = 'AGENTS.md';
const INDEX = `${ADR_DIR}/README.md`;
const BEGIN = '<!-- adr-registry:begin -->';
const END = '<!-- adr-registry:end -->';
const STATUSES = ['proposed', 'accepted', 'superseded'];

const check = process.argv.includes('--check');
const validateOnly = process.argv.includes('--validate');
const problems = [];

// ---------- Read and validate ----------

const files = readdirSync(join(ROOT, ADR_DIR))
  .filter((f) => /^\d{4}-[a-z0-9-]+\.md$/.test(f))
  .sort();

const adrs = files.map((file) => {
  const text = readFileSync(join(ROOT, ADR_DIR, file), 'utf8');
  // Git may check files out with CRLF on Windows; accept either line ending.
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    problems.push(`${file}: missing frontmatter (--- block at the top)`);
    return null;
  }
  const fm = parse(match[1]) ?? {};
  const where = `${ADR_DIR}/${file}`;

  for (const key of ['id', 'title', 'status', 'date', 'area', 'constraint']) {
    if (!fm[key] || !String(fm[key]).trim()) problems.push(`${where}: missing "${key}"`);
  }
  const expectedId = `ADR-${file.slice(0, 4)}`;
  if (fm.id && fm.id !== expectedId) problems.push(`${where}: id is ${fm.id} but the file name says ${expectedId}`);
  if (fm.status && !STATUSES.includes(fm.status)) {
    problems.push(`${where}: status "${fm.status}" must be one of ${STATUSES.join(', ')}`);
  }
  if (fm.status === 'superseded' && !fm.superseded_by) {
    problems.push(`${where}: status is superseded but "superseded_by" is missing`);
  }

  return {
    file,
    path: where,
    id: fm.id,
    title: String(fm.title ?? '').trim(),
    status: fm.status,
    // YAML may parse an unquoted date as a Date object.
    date: fm.date instanceof Date ? fm.date.toISOString().slice(0, 10) : String(fm.date ?? ''),
    area: String(fm.area ?? '').trim(),
    constraint: String(fm.constraint ?? '').replace(/\s+/g, ' ').trim(),
    supersededBy: fm.superseded_by,
  };
}).filter(Boolean);

const ids = new Set(adrs.map((a) => a.id));
for (const a of adrs) {
  if (a.supersededBy && !ids.has(a.supersededBy)) {
    problems.push(`${a.path}: superseded_by ${a.supersededBy} does not exist`);
  }
}

if (problems.length) {
  console.error('ADR problems:\n' + problems.map((p) => `  - ${p}`).join('\n'));
  process.exit(1);
}
if (validateOnly) process.exit(0);

// ---------- Build outputs ----------

const byStatus = (s) => adrs.filter((a) => a.status === s);
const entry = (a) => `- **${a.id}** · \`${a.area}\` · ${a.title}\n  ${a.constraint}\n  → \`${a.path}\``;

function agentsBlock() {
  const accepted = byStatus('accepted');
  const proposed = byStatus('proposed');
  const lines = [
    BEGIN,
    '<!-- GENERATED from docs/adr/*.md by scripts/adr-registry.mjs. Do not edit here: edit the ADR, then run `npm run adr`. -->',
    '',
    '> **Do not edit this list here.** It is generated from the ADR files in `docs/adr/`, and any edit made here is overwritten automatically.',
    '> To add or change a decision, create or edit the ADR file in `docs/adr/` (see `docs/adr/_template.md`), then run `npm run adr`.',
    '',
    '**These are binding constraints, not background.** Before changing anything, check the change against this list.',
    'If it touches a decision, say so and classify it: *consistent*, *amends*, or *contradicts*, then follow',
    '"Recording decisions" below. Open the linked file when you need the *why*.',
    '',
    ...(accepted.length ? accepted.map(entry) : ['_No accepted decisions yet._']),
  ];
  if (proposed.length) {
    lines.push('', '**Proposed (not binding yet):**', '', ...proposed.map(entry));
  }
  lines.push(END);
  return lines.join('\n');
}

function indexFile() {
  const esc = (s) => s.replace(/\|/g, '\\|');
  const rows = adrs.map((a) => {
    const status = a.status === 'superseded' ? `superseded by ${a.supersededBy}` : a.status;
    return `| [${a.id}](${a.file}) | ${esc(a.title)} | ${status} | ${a.area} | ${a.date} |`;
  });
  return [
    '<!-- GENERATED from the ADR files in this folder by scripts/adr-registry.mjs. Do not edit: run `npm run adr`. -->',
    '',
    '# Decisions',
    '',
    'Architecture decision records (ADRs): one file per decision, with the context, the options considered, the',
    'trade-offs, and when to revisit it. Each one\'s one-line rule (`constraint`) is also copied into',
    '[`AGENTS.md`](../../AGENTS.md), so AI agents always follow it.',
    '',
    '| ID | Decision | Status | Area | Date |',
    '|---|---|---|---|---|',
    ...rows,
    '',
    '## Adding or changing a decision',
    '',
    '1. Copy [`_template.md`](_template.md) to the next number, e.g. `0004-short-name.md`, and fill it in.',
    '2. To replace a decision, write a new ADR and set the old one to `status: superseded` with `superseded_by: ADR-NNNN`.',
    '   Don\'t rewrite old decisions; the history is the point.',
    '3. Run `npm run adr` to update this index and `AGENTS.md`. The deploy fails if you forget.',
    '',
  ].join('\n');
}

// ---------- Write or check ----------

const agentsPath = join(ROOT, AGENTS);
const agentsNow = readFileSync(agentsPath, 'utf8');
const start = agentsNow.indexOf(BEGIN);
const stop = agentsNow.indexOf(END);
if (start === -1 || stop === -1 || stop < start) {
  console.error(`${AGENTS}: missing the ${BEGIN} … ${END} markers. Add them where the registry should go.`);
  process.exit(1);
}
const agentsNext = agentsNow.slice(0, start) + agentsBlock() + agentsNow.slice(stop + END.length);

const indexPath = join(ROOT, INDEX);
let indexNow = '';
try {
  indexNow = readFileSync(indexPath, 'utf8');
} catch {
  // First run: the index doesn't exist yet.
}
const indexNext = indexFile();

if (check) {
  const stale = [
    agentsNow !== agentsNext && AGENTS,
    indexNow !== indexNext && INDEX,
  ].filter(Boolean);
  if (stale.length) {
    console.error(`Decision registry is out of date: ${stale.join(', ')}. Run \`npm run adr\` and commit the result.`);
    process.exit(1);
  }
  console.log(`Decision registry is up to date (${adrs.length} ADRs).`);
} else {
  writeFileSync(agentsPath, agentsNext);
  writeFileSync(indexPath, indexNext);
  console.log(`Wrote ${AGENTS} and ${INDEX} (${adrs.length} ADRs).`);
}
