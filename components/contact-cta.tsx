import { HelpCircle, Star } from 'lucide-react';
import Link from 'next/link';

export function ContactCTA() {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card-enhanced rounded-3xl p-8 text-center">
          <h2 className="font-sans text-2xl font-bold text-foreground mb-4">
            Besoin d’aide pour choisir votre matelas ?
          </h2>
          <p className="text-slate-600 mb-6">
            Notre comparateur intelligent vous guide vers le matelas idéal en
            quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/comparateur"
              prefetch={false}
              className="bg-indigo-600 hover:bg-indigo-700 text-white inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:shadow-md transition-all duration-300"
            >
              Utiliser le comparateur
              <Star className="w-5 h-5" />
            </Link>
            <Link
              href="/blog"
              prefetch={false}
              className="bg-indigo-600 hover:bg-indigo-700 text-white inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:shadow-md transition-all duration-300"
            >
              Lire nos guides
              <HelpCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
