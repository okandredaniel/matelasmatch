'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { comfortLevels, mattressTypes } from '@/data/filters';
import { Filter, Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const CLEAR_VALUE = '__clear__';

export function FilterBar({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const initial = useMemo(
    () => ({
      q: params.get('q') ?? '',
      type: params.get('type') ?? '',
      confort: params.get('confort') ?? '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params.toString()]
  );

  const [q, setQ] = useState(initial.q);
  const [t, setT] = useState(initial.type);
  const [c, setC] = useState(initial.confort);

  useEffect(() => {
    setQ(initial.q);
    setT(initial.type);
    setC(initial.confort);
  }, [initial.q, initial.type, initial.confort]);

  const updateInPlace = (
    next: Partial<{ q: string; type: string; confort: string }>
  ) => {
    const sp = new URLSearchParams(params.toString());
    if (next.q !== undefined) next.q ? sp.set('q', next.q) : sp.delete('q');
    if (next.type !== undefined)
      next.type ? sp.set('type', next.type) : sp.delete('type');
    if (next.confort !== undefined)
      next.confort ? sp.set('confort', next.confort) : sp.delete('confort');
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const buildQuery = () => {
    const sp = new URLSearchParams();
    if (q) sp.set('q', q);
    if (t) sp.set('type', t);
    if (c) sp.set('confort', c);
    const qs = sp.toString();
    return qs ? `?${qs}` : '';
  };

  const handleSubmit = () => {
    if (pathname === '/comparateur') {
      updateInPlace({ q, type: t, confort: c });
    } else {
      router.push(`/comparateur${buildQuery()}`);
    }
  };

  const handleTypeChange = (v: string) => {
    const next = v === CLEAR_VALUE ? '' : v;
    setT(next);
    if (pathname === '/comparateur') updateInPlace({ type: next });
  };

  const handleComfortChange = (v: string) => {
    const next = v === CLEAR_VALUE ? '' : v;
    setC(next);
    if (pathname === '/comparateur') updateInPlace({ confort: next });
  };

  const clearAll = () => {
    setQ('');
    setT('');
    setC('');
    if (pathname === '/comparateur') {
      updateInPlace({ q: '', type: '', confort: '' });
    }
  };

  return (
    <>
      <div
        className={`glass-search-advanced rounded-3xl p-8 ${className ?? ''}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-9 gap-6">
          <div className="relative group md:col-span-4">
            <label htmlFor="filters-q" className="sr-only">
              Rechercher un matelas…
            </label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5 group-hover:text-indigo-300 transition-colors" />
            <Input
              id="filters-q"
              type="search"
              value={q}
              onChange={(e) => {
                const val = e.target.value;
                setQ(val);
                if (pathname === '/comparateur') updateInPlace({ q: val });
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Rechercher un matelas…"
              autoComplete="off"
              className="pl-12 h-14 bg-white/20 border-white/30 backdrop-blur-xl rounded-lg text-slate-700 placeholder:text-slate-500 focus:bg-white/30 focus:border-indigo-300/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            />
          </div>

          <div className="relative group md:col-span-2">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center z-10">
              <span className="w-2 h-2 bg-white rounded-sm" />
            </span>
            <Select value={t || CLEAR_VALUE} onValueChange={handleTypeChange}>
              <SelectTrigger
                aria-label="Type de matelas"
                className="pl-12 h-14 bg-white/20 border-white/30 backdrop-blur-xl rounded-lg text-slate-700 focus:bg-white/30 focus:border-indigo-300/50 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:bg-white/25"
              >
                <SelectValue placeholder="Type de matelas" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-2xl border-white/50 rounded-lg shadow-2xl">
                <SelectItem
                  value={CLEAR_VALUE}
                  className="rounded-xl hover:bg-indigo-50/80"
                >
                  Tous les types
                </SelectItem>
                {mattressTypes.map((o) => (
                  <SelectItem
                    key={o.value}
                    value={o.value}
                    className="rounded-xl hover:bg-indigo-50/80"
                  >
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative group md:col-span-2">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center z-10">
              <span className="w-2 h-2 bg-white rounded-full" />
            </span>
            <Select
              value={c || CLEAR_VALUE}
              onValueChange={handleComfortChange}
            >
              <SelectTrigger
                aria-label="Niveau de confort"
                className="pl-12 h-14 bg-white/20 border-white/30 backdrop-blur-xl rounded-lg text-slate-700 focus:bg-white/30 focus:border-indigo-300/50 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:bg-white/25"
              >
                <SelectValue placeholder="Niveau de confort" />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-2xl border-white/50 rounded-lg shadow-2xl">
                <SelectItem
                  value={CLEAR_VALUE}
                  className="rounded-xl hover:bg-emerald-50/80"
                >
                  Tous les conforts
                </SelectItem>
                {comfortLevels.map((o) => (
                  <SelectItem
                    key={o.value}
                    value={o.value}
                    className="rounded-xl hover:bg-emerald-50/80"
                  >
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleSubmit} size="xl" variant="affiliate">
            <span className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filtrer</span>
            </span>
          </Button>
        </div>
      </div>

      <div className="mt-3 text-right">
        <button
          type="button"
          onClick={clearAll}
          className="text-sm text-slate-500 hover:text-slate-700 underline underline-offset-4"
        >
          Réinitialiser
        </button>
      </div>
    </>
  );
}
