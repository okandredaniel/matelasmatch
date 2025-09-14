import { Button } from '@/components/ui/button';
import { HelpCircle, Send } from 'lucide-react';
import Link from 'next/link';

export function ContactCTA() {
  return (
    <section>
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-sans text-2xl font-bold text-foreground mb-4">
            Besoin d’aide pour choisir votre matelas ?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Notre comparateur intelligent vous guide vers le matelas idéal en
            quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link
                href="/comparateur"
                prefetch={false}
                aria-label="Essayer le comparateur"
              >
                <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                Essayer le comparateur
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog" prefetch={false} aria-label="Lire nos guides">
                <HelpCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                Lire nos guides
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
