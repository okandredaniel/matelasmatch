import { Badge } from '@/components/ui/badge';
import type { ContentItem } from '@/types/content';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  item: ContentItem;
  basePath?: string;
  ctaLabel?: string;
  heading?: string;
};

export function FeaturedCard({
  item,
  basePath = '/blog',
  ctaLabel = 'Lire l’article',
  heading = 'À la une',
}: Props) {
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
    <section className="py-8 px-4 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6">{heading}</h2>
        <article className="glass-card-enhanced rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                {item.category && (
                  <Badge variant="secondary">{item.category}</Badge>
                )}
                <div className="flex items-center text-sm text-slate-500 gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {dateLabel}
                  </span>
                  {readLabel && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {readLabel}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="font-sans text-2xl font-bold text-foreground mb-4 text-balance">
                {item.title}
              </h3>
              <p className="text-slate-600 mb-6 text-pretty">{item.excerpt}</p>
              <div className="flex items-center justify-between">
                {item.author && (
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <User className="w-4 h-4" />
                    {item.author}
                  </div>
                )}
                <Link
                  href={`${basePath}/${item.slug}`}
                  prefetch={false}
                  className="glass-button inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300"
                >
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
