import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Matelas en mousse à mémoire : pression réduite | MatelasMatch',
  description:
    "Guide des matelas en mousse mémoire : soulagement de la pression, maintien et conseils d'achat. Accédez au comparateur filtré.",
  alternates: { canonical: absoluteUrl('/categorie/matelas-mousse-memoire') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/categorie/matelas-mousse-memoire'),
    title: 'Matelas mousse mémoire : comparatif et conseils',
    description:
      'Points forts de la mousse mémoire, niveaux de fermeté et choix selon la morphologie. Accès au comparateur.',
    images: [
      {
        url: absoluteUrl('/matelas-mousse-memoire.png'),
        width: 1200,
        height: 630,
        alt: 'Matelas mousse mémoire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matelas mousse mémoire : comparatif et conseils',
    description:
      'Points forts de la mousse mémoire, niveaux de fermeté et choix selon la morphologie. Accès au comparateur.',
    images: [absoluteUrl('/matelas-mousse-memoire.png')],
  },
  robots: { index: true, follow: true },
  keywords: [
    'matelas mousse mémoire',
    'soulagement pression',
    'viscoélastique',
    'comparatif matelas mousse',
    'guide achat matelas',
  ],
};

export default function MatelasMouseMemoirePage() {
  const faq = [
    {
      q: 'Quelle densité choisir ?',
      a: 'Généralement entre 50 et 85 kg/m³ pour un bon soutien et une durabilité correcte, selon votre morphologie.',
    },
    {
      q: 'La mousse mémoire tient-elle chaud ?',
      a: 'Elle peut conserver la chaleur ; privilégiez des mousses ouvertes ou des technologies de refroidissement si vous avez chaud la nuit.',
    },
    {
      q: 'Quelle épaisseur minimale ?',
      a: 'Visez au moins 20 cm d’épaisseur totale pour un confort équilibré.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Matelas en mousse à mémoire',
    url: '/categorie/matelas-mousse-memoire',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Catégories',
          item: '/categorie',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Mousse à mémoire',
          item: '/categorie/matelas-mousse-memoire',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'Thing', name: 'Matelas mémoire de forme 20 cm +' },
        { '@type': 'Thing', name: 'Mémoire de forme à haute densité' },
        { '@type': 'Thing', name: 'Mémoire de forme refroidie' },
      ],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Matelas en mousse à mémoire de forme
          </h1>

          <div className="glass-card-enhanced rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Les matelas mémoire de forme épousent le corps, réduisent les
              points de pression et limitent les transferts de mouvements pour
              un sommeil plus stable.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Avantages
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Enveloppement et soulagement des points de pression</li>
              <li>Indépendance de couchage</li>
              <li>Bon rapport confort/soutien</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Critères clés
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Densité et épaisseur</li>
              <li>Accueil et fermeté selon la position de sommeil</li>
              <li>Technologies de thermorégulation si nécessaire</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/comparateur?type=mousse-memoire"
                prefetch={false}
                className="glass-button px-5 py-3 rounded-lg font-medium"
              >
                Voir les matelas mémoire de forme
              </Link>
              <Link
                href="/blog?c=Comparatif"
                prefetch={false}
                className="px-5 py-3 rounded-lg font-medium bg-white/70 hover:bg-white/80"
              >
                Comparatifs mémoire de forme
              </Link>
            </div>
          </div>

          <section className="glass-card-enhanced rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">FAQ</h2>
            <ul className="space-y-4 text-gray-700">
              {faq.map((f) => (
                <li key={f.q}>
                  <p className="font-medium">{f.q}</p>
                  <p className="text-gray-700">{f.a}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <JsonLd id="memoire-collection" data={jsonLd} />
      <JsonLd id="memoire-faq" data={faqJsonLd} />
    </div>
  );
}
