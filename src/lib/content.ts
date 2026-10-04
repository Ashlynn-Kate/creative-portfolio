/** Shared queries for cases, detail pages, and disciplines. */
import { getCollection, type CollectionEntry } from 'astro:content';
import { slugify } from './site';

export type Case = CollectionEntry<'cases'>;
export type DetailPage = CollectionEntry<'pages'>;

/** Published full case studies, in editorial order. */
export async function getCases(): Promise<Case[]> {
  const all = await getCollection('cases', (c) => c.data.published !== false && c.data.home !== false);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Published detail pages, optionally only those belonging to one case. */
export async function getDetailPages(caseId?: string): Promise<DetailPage[]> {
  const all = await getCollection('pages', (p) => p.data.published !== false && (!caseId || p.data.case === caseId));
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Every discipline used by any case, alphabetically. Nothing is hardcoded. */
export async function getDisciplines(): Promise<{ name: string; slug: string; count: number }[]> {
  const counts = new Map<string, number>();
  for (const c of await getCases()) {
    for (const d of c.data.disciplines) counts.set(d, (counts.get(d) ?? 0) + 1);
  }
  return [...counts]
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** "01", "02", ... */
export const pad = (n: number) => String(n).padStart(2, '0');
