'use client';

import { ContactCTA } from '@/components/contact-cta';
import { ContactFAQ } from '@/components/contact-faq';
import { ContactForm } from '@/components/contact-form';
import { ContactHero } from '@/components/contact-hero';
import { ContactInfoGrid } from '@/components/contact-info-grid';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { JsonLd } from '@/components/json-ld';
import { TestimonialHighlight } from '@/components/testimonial-highlight';
import { faqItems } from '@/data/faq';
import { useMemo } from 'react';

export default function ContactPage() {
  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: typeof f.answer === 'string' ? f.answer : '',
        },
      })),
    }),
    []
  );

  const contactJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contactez-nous',
      url: '/contact',
      mainEntity: {
        '@type': 'Organization',
        name: 'Matelasmatch',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'contact@matelasmatch.fr',
            availableLanguage: ['fr'],
          },
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: '+33 1 23 45 67 89',
            availableLanguage: ['fr'],
          },
        ],
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 relative">
      <Header />
      <ContactHero />
      <ContactInfoGrid />
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactFAQ />
          </div>
        </div>
      </section>
      <TestimonialHighlight />
      <ContactCTA />
      <Footer />
      <JsonLd id="contact-faq-jsonld" data={faqJsonLd} />
      <JsonLd id="contact-page-jsonld" data={contactJsonLd} />
    </div>
  );
}
