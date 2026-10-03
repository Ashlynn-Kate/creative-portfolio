/**
 * Content definitions.
 *
 * All site content lives in YAML files under src/content/:
 *   - cases/  one file per case study (shown on the home page, in `order`)
 *   - pages/  detail pages that belong to a case, e.g. pages/prince-of-egypt/throne-inspiration.yaml
 *
 * Every case and page is a list of "blocks" (heading, text, image, grid,
 * carousel, preview gallery, role, status line, details, video, pages, page-link). This mirrors how Notion structures content,
 * so a future Notion sync can map Notion blocks straight onto these.
 *
 * Image paths are relative to src/assets/images/, e.g. "prince-of-egypt/palace.png".
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** One image as referenced from content. */
const image = z.object({
  src: z.string(),
  alt: z.string(),
  /** Short text shown under the image. Markdown allowed (**bold**, *italic*). */
  caption: z.string().optional(),
  /** Link to the full-resolution original on Google Drive. Clicking the image opens it. */
  highRes: z.url().optional(),
});

const heading = z.object({
  type: z.literal('heading'),
  text: z.string(),
  /** Smaller line under the heading, e.g. "Volume · Texture · Gold". */
  sub: z.string().optional(),
});

const text = z.object({
  type: z.literal('text'),
  /** Markdown: paragraphs, **bold**, *italic*, lists, links. */
  body: z.string(),
});

const imageBlock = image.extend({
  type: z.literal('image'),
  /** "wide" breaks out of the text column; "full" spans the window. */
  size: z.enum(['text', 'wide', 'full']).default('wide'),
});

const grid = z.object({
  type: z.literal('grid'),
  images: z.array(image).min(1),
  /** Optional small label above each image, in the same order, e.g. ["Object", "Portrait"]. */
  labels: z.array(z.string()).optional(),
});

const carousel = z.object({
  type: z.literal('carousel'),
  /** Read out by screen readers, e.g. "Performance photos". */
  label: z.string(),
  images: z.array(image).min(1),
});

const video = z.object({
  type: z.literal('video'),
  /** v1: a thumbnail linking to the video on Google Drive. Later: YouTube embeds. */
  thumbnail: image,
  url: z.url(),
  caption: z.string().optional(),
});

/** A performance-video thumbnail with its accompanying narrative alongside it. */
const videoFeature = z.object({
  type: z.literal('video-feature'),
  thumbnail: image,
  url: z.url(),
  caption: z.string().optional(),
  heading: z.string(),
  body: z.string(),
});

const pages = z.object({
  type: z.literal('pages'),
  /** Page ids, e.g. "prince-of-egypt/throne-inspiration". Shown as cards in this order. */
  items: z.array(z.string()).min(1),
  /** Compact four-across presentation for short, image-led material links. */
  layout: z.enum(['default', 'compact', 'compact-overlay']).default('default'),
});

/** A compact, static row of editorial images used as a visual teaser. */
const previewGallery = z.object({
  type: z.literal('preview-gallery'),
  /** Read out by screen readers, e.g. "Object Translations portrait preview gallery". */
  label: z.string(),
  images: z.array(image).min(1),
});

/** A short, labeled responsibility statement placed within a case-study flow. */
const role = z.object({
  type: z.literal('role'),
  label: z.string().default('My role'),
  body: z.string(),
});

/** A compact image paired with related expandable notes. */
const imageDetails = z.object({
  type: z.literal('image-details'),
  image,
  details: z.array(z.object({ summary: z.string(), body: z.string() })).min(1),
});

/** An always-visible image with its accompanying editorial narrative. */
const imageFeature = z.object({
  type: z.literal('image-feature'),
  image,
  heading: z.string(),
  body: z.string(),
});

/** Small project-credit lines that follow an introduction. */
const credits = z.object({
  type: z.literal('credits'),
  lines: z.array(z.string()).min(1),
});

/** A quiet, short project-status line following supporting body copy. */
const statusLine = z.object({
  type: z.literal('status-line'),
  text: z.string(),
});

const pageLink = z.object({
  type: z.literal('page-link'),
  /** Page id, e.g. "object-translations/all-concepts". */
  item: z.string(),
  /** Visible call to action. */
  label: z.string(),
});

/** A short, image-led index of work pages that opens each entry on its own route. */
const workListing = z.object({
  type: z.literal('work-listing'),
  /** Page ids, e.g. "choreographic-works/knock-on-wood". */
  items: z.array(z.string()).min(1),
  /** Root route used by the category index and its individual work pages. */
  route: z.string(),
  /** Optional category-level call to action, shown below the work rows. */
  linkLabel: z.string().optional(),
});

/** A data-driven directory for the portfolio's top-level Works page. */
const workDirectory = z.object({
  categories: z.array(z.object({
    title: z.string(),
    type: z.enum(['case', 'group']),
    item: z.object({ type: z.literal('case'), id: z.string() }).optional(),
    groups: z.array(z.object({
      title: z.string(),
      items: z.array(z.object({ type: z.enum(['case', 'page']), id: z.string() })).min(1),
    })).optional(),
  })).min(1),
});

// `details` holds other blocks, so it is defined lazily (a block can contain blocks).
type Block =
  | z.infer<typeof heading>
  | z.infer<typeof text>
  | z.infer<typeof imageBlock>
  | z.infer<typeof grid>
  | z.infer<typeof carousel>
  | z.infer<typeof previewGallery>
  | z.infer<typeof role>
  | z.infer<typeof imageDetails>
  | z.infer<typeof imageFeature>
  | z.infer<typeof credits>
  | z.infer<typeof statusLine>
  | z.infer<typeof video>
  | z.infer<typeof videoFeature>
  | z.infer<typeof pages>
  | z.infer<typeof pageLink>
  | z.infer<typeof workListing>
  | { type: 'details'; summary: string; sub?: string; thumbnail?: z.infer<typeof image>; order?: number; blocks: Block[] };

const block: z.ZodType<Block> = z.lazy(() =>
  z.discriminatedUnion('type', [
    heading,
    text,
    imageBlock,
    grid,
    carousel,
    previewGallery,
    role,
    imageDetails,
    imageFeature,
    credits,
    statusLine,
    video,
    videoFeature,
    pages,
    pageLink,
    workListing,
    z.object({
      type: z.literal('details'),
      /** The clickable line; the blocks inside are hidden until opened. */
      summary: z.string(),
      /** Optional supporting line shown beside the clickable title. */
      sub: z.string().optional(),
      /** Optional compact inspiration image shown in the closed disclosure row. */
      thumbnail: image.optional(),
      /** Optional order among sibling disclosures. */
      order: z.number().optional(),
      blocks: z.array(block),
    }),
  ]),
);

const cases = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/cases' }),
  schema: z.object({
    /** Position on the home page (1 = first). */
    order: z.number(),
    title: z.string(),
    /** Optional shorter or contextual title used only in the home-page index. */
    indexTitle: z.string().optional(),
    /** Short line above the title, e.g. "Full-length production". */
    kicker: z.string().optional(),
    /** One-line facts, e.g. "Full-length contemporary ballet · Fuzion School of the Arts · May 2024". */
    meta: z.string().optional(),
    /** e.g. "In production". Shown as a badge. */
    status: z.string().optional(),
    role: z.string().optional(),
    /** Used on discipline pages and in link previews. */
    summary: z.string(),
    cover: image,
    /** Free-form list. New disciplines appear on the site automatically. */
    disciplines: z.array(z.string()).min(1),
    published: z.boolean().default(true),
    /** Whether this case appears as a full section on the home page. */
    home: z.boolean().default(true),
    blocks: z.array(block),
  }),
});

const workDirectories = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/navigation' }),
  schema: workDirectory,
});

const detailPages = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/pages' }),
  schema: z.object({
    /** The case this page belongs to (its file name, e.g. "prince-of-egypt"). */
    case: z.string(),
    order: z.number(),
    title: z.string(),
    sub: z.string().optional(),
    summary: z.string(),
    cover: image,
    published: z.boolean().default(true),
    blocks: z.array(block),
  }),
});

export const collections = { cases, pages: detailPages, workDirectories };
export type { Block };
