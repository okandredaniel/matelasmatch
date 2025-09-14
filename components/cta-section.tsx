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
            <Button
              size="lg"
              className="px-8 h-14 bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl border border-indigo-500 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25"
              asChild
            >
              <Link href={cta.primary.href} prefetch={false}>
                <span className="font-medium">{cta.primary.label}</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 h-14 bg-white/30 border-white/40 hover:bg-accent/20 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href={cta.secondary.href} prefetch={false}>
                <span className="font-medium">{cta.secondary.label}</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
