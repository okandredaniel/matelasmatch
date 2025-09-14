import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const site = 'https://www.matelasmatch.fr';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/draft', '/private'],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
