'use client';

import { ContentCard } from '@/components/content-card';
import { ContentFilters } from '@/components/content-filters';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { PageHero } from '@/components/page-hero';
import { articles } from '@/data/articles';
import { filterContent, getCategories } from '@/hooks/use-content';
import type { Article } from '@/types/content';
import { useMemo, useState } from 'react';

export default function ArticlesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const categories = useMemo(() => getCategories(articles), []);
  const filtered = useMemo(
    () => filterContent(articles as Article[], search, category),
    [search, category]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 relative">
      <Header />
      <PageHero
        title="Articles & Guides"
        subtitle="Approfondissez vos connaissances sur les matelas et le sommeil avec nos contenus rédigés par des experts."
      />
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <ContentFilters
            allItems={articles}
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
            <p className="text-slate-600">
              {filtered.length} article{filtered.length > 1 ? 's' : ''} trouvé
              {filtered.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <ContentCard
                key={post.slug}
                item={post}
                basePath="/artigos"
                ctaLabel="Lire l’article"
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
