import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faqItems } from '@/lib/data';
import type { FaqItem } from '@/types/faq';
import Link from 'next/link';
import Script from 'next/script';

export function FAQSection() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqItems as FaqItem[]).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <section id="faq" className="py-20 px-4" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="faq-heading"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Questions fréquentes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trouvez des réponses claires pour choisir le matelas idéal.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 backdrop-blur-xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {(faqItems as FaqItem[]).map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-0">
                <AccordionTrigger className="glass-button rounded-2xl px-6 py-4 text-left hover:no-underline hover:bg-white/20 transition-all duration-300 [&[data-state=open]]:bg-white/25">
                  <span className="font-semibold text-foreground text-lg">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-white/30 border-white/40 hover:bg-accent/20 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:scale-105 px-8 h-12"
            asChild
          >
            <Link href="/contact" prefetch={false}>
              <span className="font-medium">
                Poser une question à nos experts
              </span>
            </Link>
          </Button>
        </div>
      </div>

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
