import { Star } from 'lucide-react';

export function TestimonialHighlight() {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card-enhanced rounded-3xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
          <blockquote className="text-lg text-foreground mb-4 italic">
            « L’équipe de Matelasmatch.fr m’a aidée à trouver le matelas parfait
            pour mes problèmes de dos. Leurs conseils personnalisés ont fait
            toute la différence ! »
          </blockquote>
          <cite className="text-sm text-slate-600">
            Sarah M., utilisatrice satisfaite
          </cite>
        </div>
      </div>
    </section>
  );
}
