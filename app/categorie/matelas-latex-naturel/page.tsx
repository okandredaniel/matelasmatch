import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Matelas latex naturel : respirabilité et soutien | MatelasMatch',
  description:
    "Guide des matelas en latex naturel : points forts, densités et conseils d'achat. Accédez au comparateur pour filtrer selon vos besoins.",
  alternates: { canonical: absoluteUrl('/categorie/matelas-latex-naturel') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/categorie/matelas-latex-naturel'),
    title: 'Matelas latex naturel : comparatif et conseils',
    description:
      'Avantages du latex naturel, densités, aération et durabilité. Accès au comparateur filtré.',
    images: [
      {
        url: absoluteUrl('/matelas-latex-naturel.png'),
        width: 1200,
        height: 630,
        alt: 'Matelas latex naturel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matelas latex naturel : comparatif et conseils',
    description:
      'Avantages du latex naturel, densités, aération et durabilité. Accès au comparateur filtré.',
    images: [absoluteUrl('/matelas-latex-naturel.png')],
  },
  robots: { index: true, follow: true },
  keywords: [
    'matelas latex naturel',
    'respirabilité matelas',
    'durabilité latex',
    'comparatif matelas latex',
    'guide achat matelas',
  ],
};

export default function MatelasLatexNaturelPage() {
  const faq = [
    {
      q: 'Comment reconnaître un vrai latex naturel ?',
      a: 'Recherchez des labels comme GOLS, Oeko-Tex ou Eurolatex, et un pourcentage de latex naturel élevé. Vérifiez la traçabilité.',
    },
    {
      q: 'Talalay vs Dunlop : quelle différence ?',
      a: 'Talalay donne un accueil plus homogène et aérien ; Dunlop offre une sensation plus dense et soutenante.',
    },
    {
      q: 'Le latex naturel est-il durable ?',
      a: 'Oui, c’est l’un des matériaux les plus durables, souvent 15–20 ans selon l’entretien.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Matelas en latex naturel',
    url: '/categorie/matelas-latex-naturel',
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
          name: 'Matelas en latex naturel',
          item: '/categorie/matelas-latex-naturel',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'Thing', name: 'Matelas latex naturel GOLS' },
        { '@type': 'Thing', name: 'Matelas latex Talalay' },
        { '@type': 'Thing', name: 'Matelas latex naturel bio' },
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
            Matelas en latex naturel
          </h1>

          <div className="glass-card-enhanced rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Le latex naturel offre un confort élastique, hypoallergénique et
              durable, avec une excellente régulation thermique.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Avantages
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Matériau naturel et respirant</li>
              <li>Propriétés antibactériennes et anti-acariens</li>
              <li>Grande longévité</li>
              <li>Excellent soutien morphologique</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Points de vérification
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Labels (GOLS, Oeko-Tex, Eurolatex)</li>
              <li>Procédé Talalay ou Dunlop</li>
              <li>Teneur en latex naturel</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/comparateur?type=latex-naturel"
                prefetch={false}
                className="glass-button px-5 py-3 rounded-lg font-medium"
              >
                Voir les matelas en latex
              </Link>
              <Link
                href="/blog?c=Comparatif"
                prefetch={false}
                className="px-5 py-3 rounded-lg font-medium bg-white/70 hover:bg-white/80"
              >
                Comparatifs latex
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
      <JsonLd id="latex-collection" data={jsonLd} />
      <JsonLd id="latex-faq" data={faqJsonLd} />
    </div>
  );
}
