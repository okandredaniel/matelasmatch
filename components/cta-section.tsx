import { Button } from '@/components/ui/button';
import { cta } from '@/data/cta';
import Link from 'next/link';

export function CTASection() {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-indigo-100/40 via-blue-50/30 to-white/20"
      />
      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <div className="glass-card rounded-3xl p-12">
          <h2
            id="cta-heading"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            {cta.title}
          </h2>
          <p className="text-lg text-slate-600 mb-8">{cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl" asChild>
              <Link href={cta.primary.href} prefetch={false}>
                {cta.primary.label}
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href={cta.secondary.href} prefetch={false}>
                {cta.secondary.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
