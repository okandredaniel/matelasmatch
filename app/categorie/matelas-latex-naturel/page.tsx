import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Matelas en latex naturel 2024 : guide, labels et conseils | MatelasMatch',
  description:
    'Tout savoir sur les matelas en latex naturel : avantages, certifications (GOLS, Oeko-Tex), durabilité et conseils d’achat. Accédez au comparateur filtré.',
  alternates: { canonical: '/categorie/matelas-latex-naturel' },
  keywords: [
    'matelas latex naturel',
    'matelas écologique',
    'latex GOLS',
    'comparatif latex naturel',
    'matelas durable',
  ],
  openGraph: {
    title: 'Matelas en latex naturel 2024 : guide complet',
    description:
      'Avantages, labels, procédés (Dunlop, Talalay) et liens vers le comparateur filtré.',
    url: '/categorie/matelas-latex-naturel',
    siteName: 'MatelasMatch',
    images: [{ url: '/matelas-latex-naturel-bio-ferme.png' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matelas en latex naturel 2024 : guide complet',
    description: 'Avantages, certifications et conseils + comparateur filtré.',
    images: ['/matelas-latex-naturel-bio-ferme.png'],
  },
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
