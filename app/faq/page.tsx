import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | MatelasMatch',
  description:
    'Réponses aux questions les plus fréquentes sur les matelas et notre comparateur.',
  alternates: { canonical: absoluteUrl('/faq') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/faq'),
    title: 'FAQ | MatelasMatch',
    description:
      'Réponses aux questions les plus fréquentes sur les matelas et notre comparateur.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'FAQ MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | MatelasMatch',
    description:
      'Réponses aux questions les plus fréquentes sur les matelas et notre comparateur.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
