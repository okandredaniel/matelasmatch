export type BaseContent = {
  title: string;
  excerpt: string;
  date: string;
  readTime?: string | number;
  slug: string;
  image: string;
  category?: string;
  author?: string;
};

export type BlogPost = BaseContent & {
  category: string;
  author: string;
  kind: 'blog';
};

export type Article = BaseContent & {
  category: string;
  kind: 'article';
};

export type ContentItem = BlogPost | Article;

export function isBlogPost(item: ContentItem): item is BlogPost {
  return (item as BlogPost).kind === 'blog';
}

export function isArticle(item: ContentItem): item is Article {
  return (item as Article).kind === 'article';
}
