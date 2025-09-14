'use client';

import { FilterBar } from '@/components/filter-bar';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MattressCard } from '@/components/mattress-card';
import { PageHero } from '@/components/page-hero';
import { ResultsCount } from '@/components/results-count';
import { mattresses } from '@/data/mattresses';
import { absoluteUrl } from '@/lib/site';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export const metadata: Metadata = {
  title: 'Comparateur de matelas | MatelasMatch',
  description:
    'Filtrez par type, fermeté, budget et plus pour trouver votre matelas idéal.',
  alternates: { canonical: absoluteUrl('/comparateur') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/comparateur'),
    title: 'Comparateur de matelas | MatelasMatch',
    description:
      'Filtrez par type, fermeté, budget et plus pour trouver votre matelas idéal.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Comparateur MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparateur de matelas | MatelasMatch',
    description:
      'Filtrez par type, fermeté, budget et plus pour trouver votre matelas idéal.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function ComparateurPage() {
  const params = useSearchParams();
  const q = (params.get('q') || '').trim().toLowerCase();
  const typeValue = params.get('type') || '';
  const comfortValue = params.get('confort') || '';

  const filtered = useMemo(() => {
    return mattresses.filter((m) => {
      const itemType = m.type || '';
      const itemComfort = (m as any).firmness ?? (m as any).comfort ?? '';
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        itemType.toLowerCase().includes(q) ||
        String(itemComfort).toLowerCase().includes(q);
      const matchesType = !typeValue || itemType === typeValue;
      const matchesComfort =
        !comfortValue || String(itemComfort) === comfortValue;
      return matchesSearch && matchesType && matchesComfort;
    });
  }, [q, typeValue, comfortValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 relative">
      <Header />
      <PageHero
        title="Comparateur de matelas"
        subtitle="Comparez les meilleurs matelas et trouvez celui qui vous convient parfaitement."
      />
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <FilterBar />
          <ResultsCount
            count={filtered.length}
            singular="matelas"
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m) => (
              <MattressCard key={m.id} mattress={m} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
