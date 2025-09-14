import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Matelas hybrides : comparatif, avantages et conseils | MatelasMatch',
  description:
    "Guide des matelas hybrides : avantages, composition, niveaux de fermeté et conseils d'achat. Accédez au comparateur filtré pour trouver votre modèle idéal.",
  alternates: { canonical: absoluteUrl('/categorie/matelas-hybrides') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/categorie/matelas-hybrides'),
    title: 'Matelas hybrides : comparatif et conseils',
    description:
      'Guide complet des matelas hybrides + accès au comparateur filtré pour trouver le bon modèle.',
    images: [
      {
        url: absoluteUrl('/matelas-hybride-premium-ressorts-mousse.png'),
        width: 1200,
        height: 630,
        alt: 'Matelas hybride',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matelas hybrides : comparatif et conseils',
    description:
      'Guide complet des matelas hybrides + accès au comparateur filtré pour trouver le bon modèle.',
    images: [absoluteUrl('/matelas-hybride-premium-ressorts-mousse.png')],
  },
  robots: { index: true, follow: true },
  keywords: [
    'matelas hybride',
    'ressorts ensachés',
    'mousse mémoire',
    'comparatif matelas hybride',
    'guide achat matelas',
  ],
};

export default function MatelasHybridesPage() {
  const faq = [
    {
      q: 'Qu’est-ce qu’un matelas hybride ?',
      a: 'Un matelas qui combine ressorts ensachés et couches de confort (mousse mémoire, latex, etc.) pour allier soutien, aération et accueil.',
    },
    {
      q: 'Pour qui le matelas hybride est-il conseillé ?',
      a: 'Il convient à la plupart des dormeurs, notamment ceux qui recherchent un bon maintien avec une ventilation supérieure et une bonne indépendance de couchage.',
    },
    {
      q: 'Hybride vs mousse : lequel choisir ?',
      a: 'La mousse mémoire offre un enveloppement marqué ; l’hybride ajoute des ressorts pour un meilleur flux d’air et une sensation plus dynamique.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Matelas hybrides',
    url: '/categorie/matelas-hybrides',
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
          name: 'Matelas hybrides',
          item: '/categorie/matelas-hybrides',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'Thing', name: 'Matelas hybride avec ressorts ensachés' },
        { '@type': 'Thing', name: 'Matelas hybride mousse mémoire' },
        { '@type': 'Thing', name: 'Matelas hybride latex' },
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
            Matelas hybrides
          </h1>

          <div className="glass-card-enhanced rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Les matelas hybrides combinent ressorts ensachés et couches de
              confort (mousse à mémoire, latex, etc.) pour un équilibre entre
              soutien, confort et ventilation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Avantages
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Bon maintien avec accueil confortable</li>
              <li>Excellente aération grâce aux ressorts</li>
              <li>Indépendance de couchage renforcée</li>
              <li>Durabilité et stabilité</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Composition type
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Base :</strong> ressorts ensachés
              </li>
              <li>
                <strong>Transition :</strong> mousse de soutien
              </li>
              <li>
                <strong>Confort :</strong> mousse mémoire ou latex
              </li>
              <li>
                <strong>Housse :</strong> tissu respirant
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/comparateur?type=hybride"
                prefetch={false}
                className="glass-button px-5 py-3 rounded-lg font-medium"
              >
                Voir les matelas hybrides
              </Link>
              <Link
                href="/blog?c=Comparatif"
                prefetch={false}
                className="px-5 py-3 rounded-lg font-medium bg-white/70 hover:bg-white/80"
              >
                Comparatifs récents
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
      <JsonLd id="hybride-collection" data={jsonLd} />
      <JsonLd id="hybride-faq" data={faqJsonLd} />
    </div>
  );
}
