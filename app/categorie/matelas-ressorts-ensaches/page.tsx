import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Matelas à ressorts ensachés 2024 : aération et soutien | MatelasMatch',
  description:
    'Avantages, zones de confort, densité de ressorts et critères de choix. Découvrez les meilleurs matelas à ressorts ensachés et accédez au comparateur.',
  alternates: { canonical: '/categorie/matelas-ressorts-ensaches' },
  keywords: [
    'matelas ressorts ensachés',
    'matelas ressorts',
    'comparatif ressorts ensachés',
    'meilleur matelas ressorts',
    'ventilation matelas',
  ],
  openGraph: {
    title: 'Matelas à ressorts ensachés 2024 : guide et sélection',
    description:
      'Aération, indépendance de couchage et maintien adaptatif. Comparez facilement par type.',
    url: '/categorie/matelas-ressorts-ensaches',
    siteName: 'MatelasMatch',
    images: [{ url: '/matelas-ressorts-bonnell-classic.jpg' }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matelas à ressorts ensachés 2024 : guide et sélection',
    description: 'Tout savoir sur les ressorts ensachés + comparateur filtré.',
    images: ['/matelas-ressorts-bonnell-classic.jpg'],
  },
};

export default function MatelasRessortsEnsachesPage() {
  const faq = [
    {
      q: 'Pourquoi choisir des ressorts ensachés ?',
      a: 'Pour une meilleure aération, un soutien précis zone par zone et une excellente indépendance de couchage.',
    },
    {
      q: 'Combien de zones de confort ?',
      a: 'Selon les modèles, 3, 5 ou 7 zones pour s’adapter aux épaules, hanches et lombaires.',
    },
    {
      q: 'Ressorts + mousse mémoire : est-ce compatible ?',
      a: 'Oui, de nombreux modèles hybrides combinent ressorts et mémoire de forme pour cumuler soutien et accueil.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Matelas à ressorts ensachés',
    url: '/categorie/matelas-ressorts-ensaches',
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
          name: 'Ressorts ensachés',
          item: '/categorie/matelas-ressorts-ensaches',
        },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'Thing', name: 'Matelas ressorts ensachés 5 zones' },
        { '@type': 'Thing', name: 'Matelas ressorts + mousse mémoire' },
        { '@type': 'Thing', name: 'Matelas ressorts ventilation renforcée' },
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
            Matelas à ressorts ensachés
          </h1>

          <div className="glass-card-enhanced rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Les ressorts ensachés favorisent la circulation de l’air et
              apportent un soutien précis et durable, avec une très bonne
              indépendance de couchage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Avantages
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Ventilation supérieure</li>
              <li>Soutien adaptatif par zones</li>
              <li>Indépendance de couchage</li>
              <li>Durabilité renforcée</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Critères de choix
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Nombre de ressorts et densité</li>
              <li>Nombre de zones de confort</li>
              <li>Garnissage et couche de confort</li>
              <li>Niveau de fermeté</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/comparateur?type=ressorts-ensaches"
                prefetch={false}
                className="glass-button px-5 py-3 rounded-lg font-medium"
              >
                Voir les matelas à ressorts
              </Link>
              <Link
                href="/blog?c=Comparatif"
                prefetch={false}
                className="px-5 py-3 rounded-lg font-medium bg-white/70 hover:bg-white/80"
              >
                Comparatifs ressorts
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
      <JsonLd id="ressorts-collection" data={jsonLd} />
      <JsonLd id="ressorts-faq" data={faqJsonLd} />
    </div>
  );
}
