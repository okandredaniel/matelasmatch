import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ContentItem } from '@/types/content';
import Image from 'next/image';
import Link from 'next/link';

function hrefFor(item: ContentItem) {
  return item.kind === 'article'
    ? `/articles/${item.slug}`
    : `/blog/${item.slug}`;
}

export function ContentCard({
  item,
  className,
}: {
  item: ContentItem;
  className?: string;
}) {
  const dateObj = new Date(item.date);
  const dateIso = isNaN(dateObj.getTime()) ? undefined : dateObj.toISOString();
  const dateLabel = isNaN(dateObj.getTime())
    ? item.date
    : dateObj.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });

  const href = hrefFor(item);
  const readTime =
    typeof item.readTime === 'number'
      ? `${item.readTime} min de lecture`
      : item.readTime;

  return (
    <Card
      data-kind={item.kind}
      className={cn(
        'glass-card rounded-2xl group hover:shadow-lg transition-all duration-300 border-0 overflow-hidden py-0',
        className
      )}
    >
      <div className="relative overflow-hidden">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          width={800}
          height={480}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      <CardHeader className="px-6 py-0">
        <div className="flex items-center justify-between text-sm text-slate-700 mb-2">
          {dateIso ? (
            <time dateTime={dateIso}>{dateLabel}</time>
          ) : (
            <span>{dateLabel}</span>
          )}
          {readTime ? <span>{readTime}</span> : null}
        </div>

        {item.category ? (
          <div className="mb-1 text-xs text-indigo-600 font-medium">
            {item.category}
          </div>
        ) : null}

        <CardTitle className="text-xl font-semibold text-foreground transition-colors group-hover:text-indigo-700 pb-2">
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <CardDescription className="mb-4 text-slate-700 line-clamp-3">
          {item.excerpt}
        </CardDescription>

        <Button asChild variant="outline">
          <Link
            href={href}
            prefetch={false}
            aria-label={`Lire l’article « ${item.title} »`}
          >
            Lire l’article
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
