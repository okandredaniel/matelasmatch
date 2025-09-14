import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | MatelasMatch',
  description:
    'Données collectées, finalités, base légale et droits des utilisateurs.',
  alternates: { canonical: absoluteUrl('/politique-confidentialite') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/politique-confidentialite'),
    title: 'Politique de confidentialité | MatelasMatch',
    description:
      'Données collectées, finalités, base légale et droits des utilisateurs.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Politique de confidentialité',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de confidentialité | MatelasMatch',
    description:
      'Données collectées, finalités, base légale et droits des utilisateurs.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function PolitiqueConfidentialitePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Politique de confidentialité',
        item: '/politique-confidentialite',
      },
    ],
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MatelasMatch',
    url: 'https://www.matelasmatch.fr',
    email: 'contact@matelasmatch.fr',
    logo: 'https://www.matelasmatch.fr/placeholder-logo.svg',
    sameAs: [],
  };

  const policyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: 'Politique de confidentialité',
    url: 'https://www.matelasmatch.fr/politique-confidentialite',
    inLanguage: 'fr-FR',
    publisher: {
      '@type': 'Organization',
      name: 'MatelasMatch',
      url: 'https://www.matelasmatch.fr',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-slate-600">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" prefetch={false} className="hover:underline">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-800 font-medium">
              Politique de confidentialité
            </li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Politique de confidentialité
          </h1>

          <div className="glass-card-enhanced rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Collecte des données personnelles
              </h2>
              <p className="text-gray-700 mb-4">
                Nous collectons des données personnelles uniquement lorsque vous
                nous les fournissez volontairement, notamment :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Lors de l’utilisation du formulaire de contact</li>
                <li>Lors de l’inscription à notre newsletter</li>
                <li>Via les cookies et technologies similaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Utilisation des données
              </h2>
              <p className="text-gray-700 mb-4">
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Améliorer l’expérience utilisateur du site</li>
                <li>Analyser l’audience et les performances du site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>
                  Analyser le trafic et l’utilisation du site (ex. Google
                  Analytics)
                </li>
                <li>Personnaliser votre expérience de navigation</li>
                <li>Gérer les liens d’affiliation</li>
              </ul>
              <p className="text-gray-700">
                Vous pouvez désactiver les cookies dans les paramètres de votre
                navigateur, mais cela peut affecter le fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Partage des données
              </h2>
              <p className="text-gray-700 mb-4">
                Nous ne vendons, n’échangeons ni ne louons vos données
                personnelles à des tiers. Vos données peuvent être partagées
                uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter une obligation légale</li>
                <li>
                  Avec nos prestataires techniques (hébergement, analytics) sous
                  contrat de confidentialité
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Vos droits
              </h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Droit d’accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l’effacement de vos données</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d’opposition au traitement</li>
              </ul>
              <p className="text-gray-700">
                Pour exercer ces droits, contactez-nous à :{' '}
                <a
                  href="mailto:contact@matelasmatch.fr"
                  className="underline hover:no-underline"
                >
                  contact@matelasmatch.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Sécurité des données
              </h2>
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre la perte, l’utilisation abusive, l’accès non
                autorisé, la divulgation, l’altération ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact
              </h2>
              <p className="text-gray-700">
                Pour toute question concernant cette politique de
                confidentialité, écrivez-nous à :{' '}
                <a
                  href="mailto:contact@matelasmatch.fr"
                  className="underline hover:no-underline"
                >
                  contact@matelasmatch.fr
                </a>
                . Vous pouvez également utiliser notre{' '}
                <Link
                  href="/contact"
                  prefetch={false}
                  className="underline hover:no-underline"
                >
                  formulaire de contact
                </Link>
                .
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-blue-800">
                <strong>Dernière mise à jour :</strong>{' '}
                {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd id="breadcrumb-privacy" data={breadcrumbJsonLd} />
      <JsonLd id="org-schema" data={orgJsonLd} />
      <JsonLd id="policy-schema" data={policyJsonLd} />
    </div>
  );
}
