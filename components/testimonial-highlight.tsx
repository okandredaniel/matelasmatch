import { Star } from 'lucide-react';

export function TestimonialHighlight() {
  return (
    <section>
      <div className="container mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex justify-center mb-4" aria-hidden="true">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
              ))}
            </div>
          </div>
          <blockquote className="text-lg text-foreground mb-4 italic">
            « L’équipe de Matelasmatch.fr m’a aidée à trouver le matelas parfait
            pour mes problèmes de dos. Leurs conseils personnalisés ont fait
            toute la différence ! »
          </blockquote>
          <cite className="text-sm text-slate-600 dark:text-slate-300 not-italic">
            Sarah M., utilisatrice satisfaite
          </cite>
        </div>
      </div>
    </section>
  );
}
