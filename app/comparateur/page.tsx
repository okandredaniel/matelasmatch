'use client';

import { FilterBar } from '@/components/filter-bar';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MattressCard } from '@/components/mattress-card';
import { PageHero } from '@/components/page-hero';
import { ResultsCount } from '@/components/results-count';
import { comfortLevels, mattressTypes } from '@/data/filters';
import { mattresses } from '@/data/mattresses';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

const typeLabelByKey = new Map(mattressTypes.map((o) => [o.value, o.label]));
const comfortLabelByKey = new Map(comfortLevels.map((o) => [o.value, o.label]));

export default function ComparateurPage() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [search, setSearch] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [comfortValue, setComfortValue] = useState('');

  useEffect(() => {
    setSearch(params.get('q') ?? '');
    setTypeValue(params.get('type') ?? '');
    setComfortValue(params.get('confort') ?? '');
  }, [params]);

  const updateUrl = useCallback(
    (next: { q?: string; type?: string; confort?: string }) => {
      const sp = new URLSearchParams(params.toString());
      if (next.q !== undefined) next.q ? sp.set('q', next.q) : sp.delete('q');
      if (next.type !== undefined)
        next.type ? sp.set('type', next.type) : sp.delete('type');
      if (next.confort !== undefined)
        next.confort ? sp.set('confort', next.confort) : sp.delete('confort');
      router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
    },
    [params, pathname, router]
  );

  const onSearch = useCallback(
    (v: string) => {
      setSearch(v);
      updateUrl({ q: v });
    },
    [updateUrl]
  );

  const onType = useCallback(
    (v: string) => {
      setTypeValue(v);
      updateUrl({ type: v });
    },
    [updateUrl]
  );

  const onComfort = useCallback(
    (v: string) => {
      setComfortValue(v);
      updateUrl({ confort: v });
    },
    [updateUrl]
  );

  const onReset = useCallback(() => {
    setSearch('');
    setTypeValue('');
    setComfortValue('');
    updateUrl({ q: '', type: '', confort: '' });
  }, [updateUrl]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return mattresses.filter((m) => {
      const itemType = m.type;
      const itemComfort = (m as any).firmness ?? (m as any).comfort ?? '';
      const typeMatchKey = itemType === typeValue;
      const typeMatchLabel =
        typeLabelByKey.get(typeValue)?.toLowerCase() === itemType.toLowerCase();
      const comfortMatchKey = itemComfort === comfortValue;
      const comfortMatchLabel =
        comfortLabelByKey.get(comfortValue)?.toLowerCase() ===
        String(itemComfort).toLowerCase();
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        itemType.toLowerCase().includes(q) ||
        String(itemComfort).toLowerCase().includes(q);
      const matchesType = !typeValue || typeMatchKey || typeMatchLabel;
      const matchesComfort =
        !comfortValue || comfortMatchKey || comfortMatchLabel;
      return matchesSearch && matchesType && matchesComfort;
    });
  }, [search, typeValue, comfortValue]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 relative">
      <Header />
      <PageHero
        title="Comparateur de matelas"
        subtitle="Comparez les meilleurs matelas et trouvez celui qui vous convient parfaitement."
      />
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <FilterBar
            mode="controlled"
            search={search}
            onSearch={onSearch}
            typeValue={typeValue}
            onType={onType}
            comfortValue={comfortValue}
            onComfort={onComfort}
            onReset={onReset}
            options={{ types: mattressTypes, comforts: comfortLevels }}
            placeholders={{
              search: 'Rechercher un matelas…',
              type: 'Tous les types',
              comfort: 'Tous les conforts',
              reset: 'Réinitialiser',
            }}
          />
          <ResultsCount
            count={filtered.length}
            singular="matelas"
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m) => (
              <MattressCard key={m.id} mattress={m} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
