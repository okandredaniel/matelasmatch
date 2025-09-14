export type BaseContent = {
  title: string;
  excerpt: string;
  date: string;
  dateISO?: string;
  updatedISO?: string;
  readTime?: string | number;
  slug: string;
  image?: string;
  category?: string;
  author?: string;
  tags?: string[];
  contentHtml?: string;
};

export type BlogPost = BaseContent & {
  kind: 'blog';
  category: string;
  author: string;
};

export type Article = BaseContent & {
  kind: 'article';
  category: string;
};

export type ContentItem = BlogPost | Article;

export function isBlogPost(item: ContentItem): item is BlogPost {
  return (item as BlogPost).kind === 'blog';
}

export function isArticle(item: ContentItem): item is Article {
  return (item as Article).kind === 'article';
}

export function contentHref(item: ContentItem): string {
  return `${isBlogPost(item) ? '/blog' : '/articles'}/${item.slug}`;
}

export function formatReadTime(readTime?: string | number): string | undefined {
  if (readTime === undefined || readTime === null) return undefined;
  return typeof readTime === 'number' ? `${readTime} min de lecture` : readTime;
}

export function getPublishedDate(item: BaseContent): Date {
  return new Date(item.dateISO || item.date);
}

export function getModifiedDate(item: BaseContent): Date {
  return new Date(item.updatedISO || item.dateISO || item.date);
}

export function formatFRDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
