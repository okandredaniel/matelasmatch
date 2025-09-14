import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { ContentItem } from '@/types/content';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function hrefFor(item: ContentItem) {
  return item.kind === 'article'
    ? `/articles/${item.slug}`
    : `/blog/${item.slug}`;
}

export function FeaturedCard({ item }: { item: ContentItem }) {
  const headingId = `featured-${item.slug}-heading`;
  const href = hrefFor(item);

  const d = new Date(item.date);
  const dateLabel = isNaN(d.getTime())
    ? item.date
    : d.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
  const readLabel =
    typeof item.readTime === 'number' ? `${item.readTime} min` : item.readTime;

  return (
    <section className="py-8 px-4" aria-labelledby={headingId}>
      <div className="container mx-auto">
        <h2 id={headingId} className="text-2xl font-bold text-foreground mb-6">
          Article à la une
        </h2>

        <article className="glass-card-enhanced rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="md:grid md:grid-cols-2">
            <div className="relative aspect-video md:h-full bg-slate-100">
              <Link
                href={href}
                prefetch={false}
                aria-label={item.title}
                className="absolute inset-0 overflow-hidden"
              >
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            <div className="p-8 md:flex md:flex-col">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {item.category ? (
                  <Badge variant="secondary">{item.category}</Badge>
                ) : null}

                <div className="flex items-center text-sm text-slate-600 gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time
                      dateTime={
                        isNaN(d.getTime()) ? undefined : d.toISOString()
                      }
                    >
                      {dateLabel}
                    </time>
                  </span>

                  {readLabel ? (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {readLabel}
                    </span>
                  ) : null}
                </div>
              </div>

              <h3 className="font-sans text-2xl font-bold text-foreground mb-4 text-balance">
                <Link
                  href={href}
                  prefetch={false}
                  className="hover:underline underline-offset-4"
                >
                  {item.title}
                </Link>
              </h3>

              <p className="text-slate-700 mb-6 text-pretty">{item.excerpt}</p>

              <div className="mt-auto flex items-center justify-between">
                {item.author ? (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                ) : (
                  <span />
                )}

                <Button asChild variant="outline">
                  <Link
                    href={href}
                    prefetch={false}
                    aria-label={`Lire l’article : ${item.title}`}
                  >
                    Lire l’article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
