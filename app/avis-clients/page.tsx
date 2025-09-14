import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { TestimonialsSection } from '@/components/testimonials-section';
import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Avis clients | MatelasMatch',
  description:
    'Notes, retours et témoignages des utilisateurs sur les meilleurs matelas.',
  alternates: { canonical: absoluteUrl('/avis-clients') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/avis-clients'),
    title: 'Avis clients | MatelasMatch',
    description:
      'Notes, retours et témoignages des utilisateurs sur les meilleurs matelas.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Avis MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avis clients | MatelasMatch',
    description:
      'Notes, retours et témoignages des utilisateurs sur les meilleurs matelas.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function AvisPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Avis clients', item: '/avis' },
    ],
  };

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Avis clients matelas',
    url: '/avis',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2500',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Avis clients
          </h1>

          <div className="glass-card-enhanced rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Découvrez les retours d&apos;expérience authentiques de nos
              utilisateurs. Chaque avis est vérifié et contribue à enrichir nos
              recommandations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Pourquoi nos avis sont fiables ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Avis vérifiés d&apos;acheteurs réels</li>
              <li>Période de test minimum de 30 nuits</li>
              <li>Critères d&apos;évaluation standardisés</li>
              <li>Transparence sur avantages et inconvénients</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Comment nous collectons les avis
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
              <li>Suivi des utilisateurs après achat via nos liens</li>
              <li>Questionnaire détaillé après 30 jours d&apos;utilisation</li>
              <li>Vérification de l&apos;achat et de l&apos;identité</li>
              <li>Publication fidèle des avis, positifs comme négatifs</li>
            </ol>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/comparateur"
                prefetch={false}
                className="glass-button px-5 py-3 rounded-lg font-medium"
              >
                Trouver mon matelas
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className="px-5 py-3 rounded-lg font-medium bg-white/70 hover:bg-white/80"
              >
                Laisser un avis
              </Link>
            </div>
          </div>

          <section aria-labelledby="temoignages" className="mb-12">
            <h2 id="temoignages" className="sr-only">
              Témoignages
            </h2>
            <TestimonialsSection />
          </section>

          <div className="glass-card-enhanced rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Partagez votre expérience
            </h2>
            <p className="text-gray-700 mb-4">
              Vous avez acheté un matelas via nos recommandations ? Aidez
              d’autres personnes à choisir plus sereinement.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="inline-block bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Laisser un avis
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd id="breadcrumb-avis" data={breadcrumbJsonLd} />
      <JsonLd id="collection-avis" data={pageJsonLd} />
    </div>
  );
}
