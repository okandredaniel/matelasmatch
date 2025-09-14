import { AmazonButton } from '@/components/amazon-button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Breadcrumbs } from '@/components/product/breadcrumbs';
import { FeatureList } from '@/components/product/feature-list';
import { MerchantLinks } from '@/components/product/merchant-links';
import { MetaBadges } from '@/components/product/meta-badges';
import { PriceBlock } from '@/components/product/price-block';
import { ProductGallery } from '@/components/product/product-gallery';
import { ProductJsonLd } from '@/components/product/product-json-ld';
import { ProsCons } from '@/components/product/pros-cons';
import { RelatedProducts } from '@/components/product/related-products';
import { Section } from '@/components/product/section';
import { SocialProof } from '@/components/product/social-proof';
import { SpecsTable } from '@/components/product/specs-table';
import { StarRating } from '@/components/product/star-rating';
import { TrustIcons } from '@/components/product/trust-icons';
import { comfortLevels, mattressTypes } from '@/data/filters';
import { mattresses } from '@/data/mattresses';
import { toBrandSlug, toProductSlug } from '@/lib/slug';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

const typeMap = new Map(mattressTypes.map((o) => [o.value, o.label]));
const comfortMap = new Map(comfortLevels.map((o) => [o.value, o.label]));

type PageParams = { brand: string; slug: string };
type PageProps = { params: PageParams };

export const dynamicParams = true;

export async function generateStaticParams() {
  return mattresses.map((m) => ({
    brand: m.brand ? toBrandSlug(m.brand) : 'marque',
    slug: toProductSlug(m.name),
  }));
}

function findMattressByParams({ brand, slug }: PageParams) {
  const brandNorm = toBrandSlug(brand || '');
  const slugNorm = toProductSlug(slug || '');
  let found = mattresses.find(
    (m) =>
      toBrandSlug(m.brand || '') === brandNorm &&
      toProductSlug(m.name) === slugNorm
  );
  if (found) return found;
  found = mattresses.find((m) => toProductSlug(m.name) === slugNorm);
  return found;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const m = findMattressByParams(params);
  if (!m) return { title: 'Matelas non trouvé' };
  const canonical = `/matelas/${toBrandSlug(
    m.brand || params.brand
  )}/${toProductSlug(m.name)}`;
  const title = `${m.name} - Avis & Prix | MatelasMatch`;
  const description = `Découvrez le ${m.name} : avis clients, prix, caractéristiques et où l'acheter au meilleur prix. ${m.rating}/5 avec ${m.reviews} avis.`;
  const image = m.image ?? '/og-default.jpg';
  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonical,
      images: [{ url: image, width: 1200, height: 630, alt: m.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: { canonical },
  };
}

export default function Page({ params }: PageProps) {
  const mattress = findMattressByParams(params);
  if (!mattress) notFound();

  const m = mattress!;
  const canonicalBrand = toBrandSlug(m.brand || params.brand);
  const canonicalSlug = toProductSlug(m.name);
  const requestedBrand = toBrandSlug(params.brand);
  const requestedSlug = toProductSlug(params.slug);
  if (requestedBrand !== canonicalBrand || requestedSlug !== canonicalSlug) {
    redirect(`/matelas/${canonicalBrand}/${canonicalSlug}`);
  }

  const typeLabel = typeMap.get(m.type) || m.type;
  const comfortKey = m.firmness || m.comfort || '';
  const comfortLabel = comfortKey
    ? comfortMap.get(comfortKey) || comfortKey
    : undefined;
  const features = m.features?.length ? m.features : m.benefits;
  const images = m.images?.length
    ? m.images
    : m.image
    ? [m.image]
    : ['/placeholder.svg'];

  return (
    <div className="min-h-screen bg-white">
      <ProductJsonLd mattress={m} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Section>
          <Breadcrumbs
            items={[
              { href: '/', label: 'Accueil' },
              { href: '/comparateur', label: 'Comparateur' },
              ...(m.brand
                ? [{ href: `/matelas/${canonicalBrand}`, label: m.brand }]
                : []),
              {
                href: `/matelas/${canonicalBrand}/${canonicalSlug}`,
                label: m.name,
                current: true,
              },
            ]}
          />
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-8">
            <ProductGallery
              images={images}
              fallback="/placeholder.svg"
              title={m.name}
              badge={m.badge}
            />
            <div className="space-y-6">
              <MetaBadges
                brand={m.brand}
                typeLabel={typeLabel}
                comfortLabel={comfortLabel}
              />
              <h1 className="text-3xl font-bold text-slate-900">{m.name}</h1>
              <div className="mb-2 flex items-center gap-4">
                <StarRating value={m.rating} />
                <span className="text-slate-600">
                  ({m.reviews.toLocaleString('fr-FR')} avis)
                </span>
              </div>
              <PriceBlock price={m.price} originalPrice={m.originalPrice} />
              <AmazonButton
                asin={m.asin || ''}
                brand={m.brand}
                product={m.name}
              />
              <p className="text-center text-xs text-slate-500">
                Lien d’affiliation : nous pouvons percevoir une commission, sans
                surcoût pour vous.
              </p>
              <TrustIcons />
            </div>
          </div>
        </Section>

        {m.descriptionHtml ? (
          <Section title="À propos de ce matelas">
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: m.descriptionHtml }}
            />
          </Section>
        ) : null}

        <Section>
          <ProsCons pros={m.pros} cons={m.cons} />
        </Section>

        <Section>
          <FeatureList items={features || []} />
        </Section>

        <Section>
          <SpecsTable
            thicknessCm={m.thicknessCm}
            warrantyYears={m.warrantyYears}
            trialNights={m.trialNights}
            materials={m.materials}
            certifications={m.certifications}
            sizes={m.sizes}
            countryOfOrigin={m.countryOfOrigin}
            edgeSupport={m.edgeSupport}
            motionIsolation={m.motionIsolation}
            cooling={m.cooling}
            bestFor={m.bestFor}
            weightSupportKg={m.weightSupportKg}
          />
        </Section>

        <Section title="Avis & confiance">
          <SocialProof mattress={m} />
        </Section>

        <Section title="Où acheter">
          <MerchantLinks mattress={m} />
        </Section>

        <Section>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-600">Voir d’autres</span>
            <a
              href={`/comparateur?type=${encodeURIComponent(m.type)}`}
              className="text-sm font-medium text-accent underline underline-offset-4"
            >
              matelas {typeLabel?.toLowerCase()}
            </a>
          </div>
        </Section>

        <Section title="Produits similaires">
          <RelatedProducts currentId={m.id} type={m.type} />
        </Section>
      </main>
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/30 bg-white/90 p-3 backdrop-blur md:hidden">
        <AmazonButton asin={m.asin || ''} brand={m.brand} product={m.name} />
      </div>
    </div>
  );
}
