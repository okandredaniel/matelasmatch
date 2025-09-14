import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { articles } from '@/data/articles';
import { absoluteUrl } from '@/lib/site';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const url = absoluteUrl(`/articles/${params.slug}`);
  const image = absoluteUrl('/og-image.png');
  return {
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: 'Article | MatelasMatch',
      description:
        'Guides, conseils et comparatifs autour des matelas en France.',
      images: [
        { url: image, width: 1200, height: 630, alt: 'Article MatelasMatch' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Article | MatelasMatch',
      description:
        'Guides, conseils et comparatifs autour des matelas en France.',
      images: [image],
    },
  };
}

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function Page({ params }: { params: Params }) {
  const post = articles.find((a) => a.slug === params.slug);
  if (!post) return notFound();

  const dateIso = post.dateISO || undefined;
  const dateLabel = post.date || post.dateISO || '';
  const readTime =
    typeof post.readTime === 'number' ? `${post.readTime} min` : post.readTime;

  const others = articles.filter((a) => a.slug !== post.slug);
  const sameCategory = post.category
    ? others.filter((a) => a.category === post.category)
    : [];
  const relatedBase = sameCategory.length ? sameCategory : others;
  const related = relatedBase.slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <Button asChild variant="ghost">
              <Link href="/articles" prefetch={false}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux articles
              </Link>
            </Button>
          </div>

          <header className="mb-6">
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-2">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {dateIso ? (
                  <time dateTime={dateIso}>{dateLabel}</time>
                ) : (
                  <span>{dateLabel}</span>
                )}
              </span>
              {readTime ? (
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
              ) : null}
              {post.category ? (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {post.category}
                </span>
              ) : null}
            </div>
          </header>

          {post.image ? (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div
            className="prose prose-slate max-w-none prose-headings:scroll-mt-24 dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          {related.length > 0 ? (
            <section className="mt-12">
              <h2 className="text-xl font-semibold mb-4">À lire ensuite</h2>
              <ul className="grid md:grid-cols-2 gap-6">
                {related.map((a) => (
                  <li
                    key={a.slug}
                    className="rounded-2xl border border-slate-200 p-4 bg-white dark:border-slate-800 dark:bg-slate-900"
                  >
                    <Link
                      href={`/articles/${a.slug}`}
                      className="font-medium hover:underline"
                      prefetch={false}
                    >
                      {a.title}
                    </Link>
                    {a.excerpt ? (
                      <p className="text-sm text-slate-600 mt-1">{a.excerpt}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>

      <Footer />
    </div>
  );
}
