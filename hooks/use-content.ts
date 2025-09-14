import type { ContentItem } from '@/types/content';

export function normalize(input: string) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

export function getCategories(items: Pick<ContentItem, 'category'>[]) {
  const set = new Set<string>(items.map((i) => i.category).filter(Boolean));
  return ['Tous', ...Array.from(set)];
}

export function filterContent(
  items: ContentItem[],
  search: string,
  category: string
) {
  const q = normalize(search);
  return items.filter((p) => {
    const inQ =
      !q || normalize(p.title).includes(q) || normalize(p.excerpt).includes(q);
    const inCat = !category || category === 'Tous' || p.category === category;
    return inQ && inCat;
  });
}
