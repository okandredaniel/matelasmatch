'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';
import { useMemo } from 'react';

type Props = {
  allItems: { title: string; excerpt: string; category: string }[];
  categories?: string[];
  selectedCategory: string;
  onSelectCategory: (val: string) => void;
  search: string;
  onSearch: (val: string) => void;
  reset: () => void;
};

export function ContentFilters({
  allItems,
  categories,
  selectedCategory,
  onSelectCategory,
  search,
  onSearch,
  reset,
}: Props) {
  const computed = useMemo(
    () =>
      categories && categories.length > 0
        ? categories
        : Array.from(new Set(allItems.map((i) => i.category))),
    [categories, allItems]
  );

  const cats = useMemo(
    () => ['Tous', ...computed.filter((c) => c !== 'Tous')],
    [computed]
  );

  return (
    <div className="glass-card-enhanced rounded-3xl p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Rechercher un article..."
            className="glass-input pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {cats.map((c) => {
            const active =
              selectedCategory === c || (!selectedCategory && c === 'Tous');
            return (
              <button
                key={c}
                onClick={() => onSelectCategory(c === 'Tous' ? '' : c)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-accent text-white shadow-md'
                    : 'glass-button hover:shadow-md'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <Button onClick={reset}>
          <Filter className="w-4 h-4 mr-2" />
          Réinitialiser
        </Button>
      </div>
    </div>
  );
}
