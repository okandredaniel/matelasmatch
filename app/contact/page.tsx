'use client';

import { ContactCTA } from '@/components/contact-cta';
import { ContactForm } from '@/components/contact-form';
import { ContactHero } from '@/components/contact-hero';
import { ContactInfoGrid } from '@/components/contact-info-grid';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { TestimonialHighlight } from '@/components/testimonial-highlight';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

export default function ContactPage() {
  const contactJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact',
      url: 'https://www.matelasmatch.fr/contact',
      publisher: { '@type': 'Organization', name: 'Matelas Match' },
      mainEntity: {
        '@type': 'Organization',
        name: 'Matelas Match',
        url: 'https://www.matelasmatch.fr',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'contact@matelasmatch.fr',
            availableLanguage: ['fr'],
          },
        ],
      },
    }),
    []
  );

  return (
    <div className="flex flex-col gap-16 min-h-screen bg-background text-foreground">
      <Header />
      <ContactHero />
      <ContactInfoGrid />

      <section>
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-7">
            <div className="lg:col-span-4">
              <ContactForm />
            </div>

            <div className="lg:col-span-3 self-start rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle
                  className="w-6 h-6 text-accent"
                  aria-hidden="true"
                />
                <h2 className="font-sans text-2xl font-bold text-foreground">
                  Vous avez une question ?
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Consultez notre centre d’aide pour des réponses claires aux
                questions les plus fréquentes sur les types de matelas, tailles,
                fermeté, essais à domicile et plus encore.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link
                    href="/faq"
                    prefetch={false}
                    aria-label="Aller à la page FAQ"
                  >
                    Accéder à la FAQ
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialHighlight />
      <ContactCTA />
      <Footer />
      <JsonLd id="contact-page-jsonld" data={contactJsonLd} />
    </div>
  );
}
