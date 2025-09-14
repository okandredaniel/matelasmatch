'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

type Props = {
  allItems: { title: string; excerpt: string; category: string }[];
  categories?: string[];
  selectedCategory: string;
  onSelectCategory: (val: string) => void;
  search: string;
  onSearch: (val: string) => void;
  reset: () => void;
  maxTags?: number;
};

export function ContentFilters({
  allItems,
  categories,
  selectedCategory,
  onSelectCategory,
  search,
  onSearch,
  reset,
  maxTags = 7,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const computed = useMemo(
    () =>
      categories && categories.length > 0
        ? categories
        : Array.from(new Set(allItems.map((i) => i.category))).filter(Boolean),
    [categories, allItems]
  );

  const cats = useMemo(
    () => ['Tous', ...computed.filter((c) => c !== 'Tous')],
    [computed]
  );

  const limitedCats = useMemo(() => {
    const base = cats.filter((c) => c !== 'Tous');
    const takeAll = expanded || base.length <= maxTags;
    const slice = takeAll ? base : base.slice(0, maxTags);
    const withSelected =
      selectedCategory &&
      selectedCategory !== 'Tous' &&
      !slice.includes(selectedCategory)
        ? [...slice, selectedCategory]
        : slice;
    return ['Tous', ...withSelected];
  }, [cats, expanded, maxTags, selectedCategory]);

  const hasMore = cats.length - 1 > maxTags;

  return (
    <div className="glass-card-enhanced rounded-3xl p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-start md:gap-4 gap-4">
        <div className="relative w-full md:w-auto md:basis-[280px] md:min-w-[240px] md:max-w-[320px] md:shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Rechercher un article..."
            className="glass-input pl-10"
          />
        </div>

        <div className="flex-1 md:min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {limitedCats.map((c) => {
              const active =
                selectedCategory === c || (!selectedCategory && c === 'Tous');
              return (
                <Button
                  key={c}
                  type="button"
                  onClick={() => onSelectCategory(c === 'Tous' ? '' : c)}
                  variant={active ? 'default' : 'outline'}
                  size="sm"
                >
                  {c}
                </Button>
              );
            })}
            {hasMore && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? 'Voir moins' : 'Voir plus'}
              </Button>
            )}
          </div>
        </div>

        <div className="md:shrink-0">
          <Button onClick={reset}>
            <Filter className="w-4 h-4 mr-2" />
            Réinitialiser
          </Button>
        </div>
      </div>
    </div>
  );
}
