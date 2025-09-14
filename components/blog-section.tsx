import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogposts';
import Link from 'next/link';
import Script from 'next/script';
import { ContentCard } from './content-card';

export function BlogSection() {
  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPosts.map((p: any, i: number) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'BlogPosting',
        headline: p.title,
        url: p.slug ? `/blog/${p.slug}` : p.url,
        datePublished: p.date,
        description: p.excerpt,
      },
    })),
  };

  return (
    <section id="blog" className="py-20 px-4" aria-labelledby="blog-heading">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            id="blog-heading"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Blog & Conseils
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez nos articles d’experts pour tout savoir sur les matelas et
            améliorer la qualité de votre sommeil.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {blogPosts.map((post: any, index: number) => (
            <li key={post.id ?? post.slug ?? index}>
              <ContentCard item={post} />
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog" prefetch={false}>
              <span className="font-medium">Voir tous les articles</span>
            </Link>
          </Button>
        </div>
      </div>

      <Script
        id="blog-itemlist-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
    </section>
  );
}
