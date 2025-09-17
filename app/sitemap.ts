import { blogPosts } from '@/data/blogposts';
import { getAllMattresses } from '@/lib/mattresses';
import { toBrandSlug, toProductSlug } from '@/lib/slug';
import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.matelasmatch.fr';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const staticRoutes = [
    '/',
    '/faq',
    '/comparateur',
    '/contact',
    '/guide-achat',
    '/avis-clients',
    '/blog',
    '/categorie/matelas-hybrides',
    '/categorie/matelas-latex-naturel',
    '/categorie/matelas-mousse-memoire',
    '/categorie/matelas-ressorts-ensaches',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const mattresses = await getAllMattresses();

  const productRoutes = mattresses.map((m) => {
    const brand = m.brand ? toBrandSlug(m.brand) : 'marque';
    const slug = toProductSlug(m.name);
    return {
      url: `${siteUrl}/matelas/${brand}/${slug}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    };
  });

  const postRoutes = blogPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: p.updatedISO || p.dateISO || now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...postRoutes];
}
