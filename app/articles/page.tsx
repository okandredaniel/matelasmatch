'use client';

import { ContentCard } from '@/components/content-card';
import { ContentFilters } from '@/components/content-filters';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { PageHero } from '@/components/page-hero';
import { articles } from '@/data/articles';
import { filterContent, getCategories } from '@/hooks/use-content';
import type { Article } from '@/types/content';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

const PAGE_SIZE = 9;

export default function ArticlesPage() {
  const params = useSearchParams();
  const initialSearch = params.get('q') ?? '';
  const initialCategory = params.get('cat') ?? '';
  const page = Math.max(1, parseInt(params.get('page') ?? '1', 10) || 1);

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);

  const categories = useMemo(() => getCategories(articles), []);

  const filtered = useMemo(
    () => filterContent(articles, search, category) as Article[],
    [search, category]
  );

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageItems = filtered.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const featured = page === 1 && pageItems.length ? pageItems[0] : undefined;
  const rest = featured ? pageItems.slice(1) : pageItems;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PageHero
        title="Articles"
        subtitle="Analyses synthétiques pour comprendre rapidement l’essentiel."
      />

      <section className="px-4">
        <div className="container mx-auto">
          <ContentFilters
            allItems={articles.map((a) => ({
              title: a.title,
              excerpt: a.excerpt,
              category: a.category || '',
            }))}
            categories={categories}
            selectedCategory={category}
            onSelectCategory={setCategory}
            search={search}
            onSearch={setSearch}
            reset={() => {
              setSearch('');
              setCategory('');
            }}
          />

          <div className="mb-6">
            <p className="text-slate-700">
              {filtered.length} article{filtered.length > 1 ? 's' : ''} trouvé
              {filtered.length > 1 ? 's' : ''}
            </p>
          </div>

          {featured ? (
            <div className="mb-8">
              <ContentCard item={featured} />
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a) => (
              <ContentCard key={a.slug} item={a} />
            ))}
          </div>

          <nav
            className="mt-10 flex items-center justify-center gap-2"
            aria-label="Pagination"
          >
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const href = {
                pathname: '/articles',
                query: { q: search, cat: category, page: String(p) },
              };
              const active = p === page;
              return (
                <Link
                  key={p}
                  href={href}
                  prefetch={false}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-3 text-sm font-medium ${
                    active
                      ? 'bg-slate-900 text-white'
                      : 'border border-slate-300 text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {p}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <Footer />
    </div>
  );
}
