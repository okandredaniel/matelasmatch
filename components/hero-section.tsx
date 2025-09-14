'use client';

import { FilterBar } from '@/components/filter-bar';
import { comfortLevels, mattressTypes } from '@/data/filters';

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/30 to-indigo-100/40"
      />
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Trouvez le matelas parfait en quelques clics
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 text-pretty max-w-2xl mx-auto">
          Comparez les meilleurs matelas disponibles sur Amazon. Filtrez par
          type, confort et prix pour trouver votre matelas idéal.
        </p>

        <FilterBar
          mode="form"
          action="/comparateur"
          names={{ search: 'q', type: 'type', comfort: 'confort' }}
          options={{ types: mattressTypes, comforts: comfortLevels }}
          placeholders={{
            search: 'Rechercher un matelas…',
            type: 'Type de matelas',
            comfort: 'Niveau de confort',
            submit: 'Filtrer',
          }}
        />
      </div>
    </section>
  );
}
