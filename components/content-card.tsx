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

type Props = {
  item: ContentItem;
  ctaLabel?: string;
  className?: string;
  prefetch?: boolean;
  basePath?: string;
};

export function ContentCard({
  item,
  ctaLabel,
  className,
  prefetch = false,
  basePath,
}: Props) {
  const dateObj = new Date(item.date);
  const dateIso = isNaN(dateObj.getTime()) ? undefined : dateObj.toISOString();
  const dateLabel = isNaN(dateObj.getTime())
    ? item.date
    : dateObj.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });

  const href =
    (basePath ? `${basePath}/${item.slug}` : null) ??
    (item.kind === 'article' ? `/articles/${item.slug}` : `/blog/${item.slug}`);

  const finalCta = ctaLabel ?? 'Lire l’article';
  const readTime =
    typeof item.readTime === 'number'
      ? `${item.readTime} min de lecture`
      : item.readTime;

  return (
    <Card
      data-kind={item.kind}
      className={cn(
        'glass-card rounded-2xl group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden py-0',
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
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <CardHeader className="px-6 py-0">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
          {dateIso ? (
            <time dateTime={dateIso}>{dateLabel}</time>
          ) : (
            <span>{dateLabel}</span>
          )}
          {readTime ? <span>{readTime}</span> : null}
        </div>

        {item.category ? (
          <div className="mb-1 text-xs text-accent/80 font-medium">
            {item.category}
          </div>
        ) : null}

        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors pb-2">
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <CardDescription className="mb-4 text-slate-600 line-clamp-3">
          {item.excerpt}
        </CardDescription>

        <Button
          variant="outline"
          className="w-full h-12 bg-white/30 border-white/40 hover:bg-accent/20 backdrop-blur-xl rounded-2xl transition-all duration-300"
          asChild
        >
          <Link
            href={href}
            prefetch={prefetch}
            aria-label={`${finalCta} « ${item.title} »`}
          >
            <span className="font-medium">{finalCta}</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
