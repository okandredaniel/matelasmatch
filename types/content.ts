export type ContentKind = 'blog' | 'article';

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
