import type {
  Article,
  BaseContent,
  BlogPost,
  ContentItem,
} from '@/types/content';

export function isBlogPost(item: ContentItem): item is BlogPost {
  return item.kind === 'blog';
}

export function isArticle(item: ContentItem): item is Article {
  return item.kind === 'article';
}

export function contentHref(item: ContentItem): string {
  return `${isBlogPost(item) ? '/blog' : '/articles'}/${item.slug}`;
}

export function formatReadTime(readTime?: string | number): string | undefined {
  if (readTime === undefined || readTime === null) return undefined;
  return typeof readTime === 'number' ? `${readTime} min de lecture` : readTime;
}

function safeDate(input?: string): Date {
  if (!input) return new Date(NaN);
  const d = new Date(input);
  return isNaN(d.getTime()) ? new Date(NaN) : d;
}

export function getPublishedDate(item: BaseContent): Date {
  return safeDate(item.dateISO || item.date);
}

export function getModifiedDate(item: BaseContent): Date {
  return safeDate(item.updatedISO || item.dateISO || item.date);
}

export function formatFRDate(date: Date): string {
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function sortByNewest<T extends BaseContent>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => getPublishedDate(b).getTime() - getPublishedDate(a).getTime()
  );
}

export function filterByCategory<T extends BaseContent>(
  items: T[],
  category?: string
): T[] {
  if (!category) return items;
  return items.filter((i) => i.category === category);
}

export function filterByTag<T extends BaseContent>(
  items: T[],
  tag?: string
): T[] {
  if (!tag) return items;
  return items.filter((i) => (i.tags || []).includes(tag));
}

export function buildJsonLd(
  item: ContentItem,
  siteUrl: string
): Record<string, any> {
  const url = `${siteUrl}${contentHref(item)}`;
  const image = item.image ? `${siteUrl}${item.image}` : undefined;
  const author = item.author || 'Rédaction';
  const datePublished = getPublishedDate(item).toISOString();
  const dateModified = getModifiedDate(item).toISOString();

  return {
    '@context': 'https://schema.org',
    '@type': isBlogPost(item) ? 'BlogPosting' : 'Article',
    headline: item.title,
    description: item.excerpt,
    image,
    author: { '@type': 'Person', name: author },
    publisher: { '@type': 'Organization', name: 'MatelasMatch' },
    datePublished,
    dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: item.category,
    keywords: (item.tags || []).join(', '),
  };
}
