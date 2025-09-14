import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales | MatelasMatch',
  description: 'Informations légales et coordonnées de l’éditeur du site.',
  alternates: { canonical: absoluteUrl('/mentions-legales') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/mentions-legales'),
    title: 'Mentions légales | MatelasMatch',
    description: 'Informations légales et coordonnées de l’éditeur du site.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Mentions légales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentions légales | MatelasMatch',
    description: 'Informations légales et coordonnées de l’éditeur du site.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function MentionsLegalesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: '/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mentions légales',
        item: '/mentions-legales',
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

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mentions légales',
    url: 'https://www.matelasmatch.fr/mentions-legales',
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
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
            <li className="text-slate-800 font-medium">Mentions légales</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Mentions légales
          </h1>

          <div className="glass-card-enhanced rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Éditeur du site
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Nom du site :</strong> MatelasMatch
                </p>
                <p>
                  <strong>URL :</strong> https://www.matelasmatch.fr
                </p>
                <p>
                  <strong>Email :</strong>{' '}
                  <a
                    href="mailto:contact@matelasmatch.fr"
                    className="underline hover:no-underline"
                  >
                    contact@matelasmatch.fr
                  </a>
                </p>
                <p className="text-sm text-slate-600">
                  Directeur de la publication : Équipe éditoriale MatelasMatch
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Hébergement
              </h2>
              <div className="text-gray-700 space-y-2">
                <p>Ce site est hébergé par Vercel Inc.</p>
                <p>
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                  91789, États-Unis
                </p>
                <p>
                  <strong>Site :</strong>{' '}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    vercel.com
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-gray-700 mb-4">
                L’ensemble du site relève de la législation française et
                internationale sur le droit d’auteur et la propriété
                intellectuelle. Tous droits de reproduction réservés, y compris
                pour les documents téléchargeables et les représentations
                iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie du site sur un support
                électronique ou papier est interdite sans autorisation écrite
                préalable de l’éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Liens d’affiliation
              </h2>
              <p className="text-gray-700 mb-4">
                Ce site peut contenir des liens d’affiliation vers Amazon et
                d’autres partenaires. Nous pouvons percevoir une commission sur
                les ventes réalisées via ces liens, sans surcoût pour
                l’utilisateur.
              </p>
              <p className="text-gray-700">
                Cette rémunération soutient notre indépendance éditoriale et
                nous permet de proposer des contenus gratuits et de qualité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Responsabilité
              </h2>
              <p className="text-gray-700 mb-4">
                Les informations publiées sur MatelasMatch sont fournies à titre
                indicatif et peuvent contenir des inexactitudes ou omissions
                malgré nos vérifications régulières.
              </p>
              <p className="text-gray-700">
                Pour signaler une erreur ou un dysfonctionnement, écrivez-nous à{' '}
                <a
                  href="mailto:contact@matelasmatch.fr"
                  className="underline hover:no-underline"
                >
                  contact@matelasmatch.fr
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Droit applicable
              </h2>
              <p className="text-gray-700">
                Le présent site et ses conditions d’utilisation sont régis par
                le droit français. En cas de litige et à défaut de résolution
                amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <p className="text-sm text-slate-500">
              Dernière mise à jour : 01/09/2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd id="breadcrumb-mentions" data={breadcrumbJsonLd} />
      <JsonLd id="org-schema" data={orgJsonLd} />
      <JsonLd id="page-schema" data={pageJsonLd} />
    </div>
  );
}
