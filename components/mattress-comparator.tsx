import { mattresses } from '@/data/mattresses';
import Script from 'next/script';
import { MattressCard } from './mattress-card';

export function MattressComparator() {
  const toPriceNumber = (p?: string) =>
    p ? Number(p.replace(/[^\d,.-]/g, '').replace(',', '.')) : undefined;

  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: mattresses.map((m: any, i: number) => {
      const price = toPriceNumber(m.price);
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: m.name,
          url: m.amazonLink,
          aggregateRating:
            typeof m.rating === 'number' && typeof m.reviews === 'number'
              ? {
                  '@type': 'AggregateRating',
                  ratingValue: m.rating,
                  reviewCount: m.reviews,
                }
              : undefined,
          offers: price
            ? {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price,
              }
            : undefined,
        },
      };
    }),
  };

  return (
    <section
      id="comparateur"
      className="py-20 px-4"
      aria-labelledby="comparateur-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            id="comparateur-heading"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Comparateur de matelas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez notre sélection de matelas disponibles sur Amazon, choisis
            pour leur qualité et leur rapport qualité-prix.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {mattresses.map((mattress: any) => (
            <li key={mattress.id}>
              <MattressCard mattress={mattress} />
            </li>
          ))}
        </ul>
      </div>

      <Script
        id="itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
    </section>
  );
}
