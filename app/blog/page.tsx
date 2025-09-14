'use client';

import { ContentCard } from '@/components/content-card';
import { ContentFilters } from '@/components/content-filters';
import { FeaturedCard } from '@/components/featured-card';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { PageHero } from '@/components/page-hero';
import { blogPosts } from '@/data/blogposts';
import { filterContent, getCategories } from '@/hooks/use-content';
import type { BlogPost } from '@/types/content';
import { useMemo, useState } from 'react';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const categories = useMemo(() => getCategories(blogPosts), []);
  const filtered = useMemo(
    () => filterContent(blogPosts as BlogPost[], search, category),
    [search, category]
  );
  const featured = filtered[0] ?? (blogPosts as BlogPost[])[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20">
      <Header />
      <PageHero
        title="Blog Matelas & Sommeil"
        subtitle="Conseils d’experts, guides d’achat et actualités pour bien choisir votre matelas."
      />

      <FeaturedCard item={featured} />

      <section className="py-8 px-4">
        <div className="container mx-auto">
          <ContentFilters
            allItems={blogPosts}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered
              .filter((p) => p.slug !== featured.slug)
              .map((post) => (
                <ContentCard key={post.slug} item={post} />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
