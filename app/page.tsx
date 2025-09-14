import { BlogSection } from '@/components/blog-section';
import { CTASection } from '@/components/cta-section';
import { FAQSection } from '@/components/faq-section';
import { FeaturesSection } from '@/components/features-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { MattressComparator } from '@/components/mattress-comparator';
import { TestimonialsSection } from '@/components/testimonials-section';
import { absoluteUrl } from '@/lib/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MatelasMatch – Comparateur de matelas',
  description:
    'Comparez les meilleurs matelas vendus en France et trouvez le modèle idéal selon votre confort, votre budget et vos préférences.',
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/'),
    title: 'MatelasMatch – Comparateur de matelas',
    description:
      'Trouvez le matelas parfait grâce à des comparatifs clairs et des guides d’achat.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MatelasMatch – Comparateur de matelas',
    description:
      'Trouvez le matelas parfait grâce à des comparatifs clairs et des guides d’achat.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main id="main" role="main">
        <HeroSection />
        <FeaturesSection />
        <MattressComparator />
        <BlogSection />
        <FAQSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
