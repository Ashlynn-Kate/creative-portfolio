/** Shared queries for cases, detail pages, and disciplines. */
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { slugify } from './site';

export type Case = CollectionEntry<'cases'>;
export type DetailPage = CollectionEntry<'pages'>;

/** The main destination for a case, whether it uses its own page or a detail page. */
export const casePath = (entry: Case) => `work/${entry.data.landingPage ?? entry.id}`;

/** Return a work to its focused group directory, using the same navigation data
 * that places it there. Works outside a group retain the all-works destination. */
export async function getWorkArea(type: 'case' | 'page', id: string) {
  const directory = await getEntry('workDirectories', 'works');
  const category = directory?.data.categories.find((category) =>
    category.type === 'group' && category.groups?.some((group) =>
      group.items.some((item) => item.type === type && item.id === id),
    ),
  );
  return category ? { title: category.title, path: `area/${slugify(category.title)}` } : undefined;
}

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
