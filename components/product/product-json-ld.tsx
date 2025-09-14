import { generateSlug, parsePrice } from '@/lib/product';
import { Mattress } from '@/types/mattress';

export function ProductJsonLd({ mattress }: { mattress: Mattress }) {
  const slug = generateSlug(mattress.name);
  const priceNumber = parsePrice(mattress.price);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: mattress.name,
    brand: mattress.brand
      ? { '@type': 'Brand', name: mattress.brand }
      : undefined,
    image: mattress.images?.length
      ? mattress.images.map((u) => `https://www.matelasmatch.fr${u}`)
      : mattress.image
      ? [`https://www.matelasmatch.fr${mattress.image}`]
      : undefined,
    description: `${mattress.name}${
      mattress.comfort ? ` — ${mattress.comfort}` : ''
    }`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: mattress.rating,
      reviewCount: mattress.reviews,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: priceNumber ? String(priceNumber) : undefined,
      url: `https://www.matelasmatch.fr/matelas/${slug}`,
      availability: 'https://schema.org/InStock',
    },
    sku: mattress.asin,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
