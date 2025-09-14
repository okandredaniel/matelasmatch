import { AmazonButton } from '@/components/amazon-button';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { comfortLevels, mattressTypes } from '@/data/filters';
import { toBrandSlug, toProductSlug } from '@/lib/slug';
import type { Mattress } from '@/types/mattress';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const typeMap = new Map(mattressTypes.map((o) => [o.value, o.label]));
const comfortMap = new Map(comfortLevels.map((o) => [o.value, o.label]));

function parsePrice(val?: string) {
  if (!val) return undefined;
  const n = Number(val.replace(/[^\d,.-]/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : undefined;
}

interface MattressCardProps {
  mattress: Mattress;
  className?: string;
}

export function MattressCard({ mattress, className }: MattressCardProps) {
  const titleId = `mattress-${mattress.id}-title`;
  const typeLabel = typeMap.get(mattress.type) || mattress.type;
  const comfortKey: string = mattress.firmness ?? mattress.comfort ?? '';
  const comfortLabel = comfortMap.get(comfortKey) || comfortKey;
  const stars = Math.round(mattress.rating || 0);
  const priceNow = parsePrice(mattress.price);
  const priceWas = parsePrice(mattress.originalPrice);
  const hasSavings = !!(priceNow && priceWas && priceWas > priceNow);
  const savingsPct = hasSavings
    ? Math.round(((priceWas! - priceNow!) / priceWas!) * 100)
    : undefined;
  const featureList = mattress.features?.length
    ? mattress.features
    : mattress.benefits || [];
  const productUrl = `/matelas/${toBrandSlug(
    mattress.brand || ''
  )}/${toProductSlug(mattress.name)}`;
  const ratingLabel = `${mattress.rating} sur 5, ${mattress.reviews} avis`;

  return (
    <article aria-labelledby={titleId} className={className}>
      <Card className="glass-card rounded-2xl group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden pt-0">
        <CardHeader className="p-0">
          <Link href={productUrl} className="block">
            <div className="relative overflow-hidden">
              <Image
                src={mattress.image || '/placeholder.svg'}
                alt={`${mattress.name} — ${typeLabel}${
                  comfortLabel ? `, ${comfortLabel}` : ''
                }`}
                width={960}
                height={640}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority={false}
              />
              {mattress.badge ? (
                <Badge className="absolute left-4 top-4 bg-accent/90 text-white backdrop-blur-sm">
                  {mattress.badge}
                </Badge>
              ) : null}
              <div className="absolute right-4 top-4 flex items-center gap-2">
                {mattress.brand ? (
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-md">
                    {mattress.brand}
                  </span>
                ) : null}
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-md">
                  {typeLabel}
                </span>
              </div>
            </div>
          </Link>
        </CardHeader>

        <CardContent className="px-6 py-0">
          <div className="mb-2 flex items-center justify-between">
            <Link href={productUrl}>
              <CardTitle
                id={titleId}
                className="cursor-pointer text-xl font-semibold text-foreground transition-colors hover:text-accent"
              >
                {mattress.name}
              </CardTitle>
            </Link>
            <div className="flex items-center gap-2" aria-label={ratingLabel}>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < stars
                        ? 'h-4 w-4 text-yellow-400 fill-current'
                        : 'h-4 w-4 text-slate-300'
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">
                {mattress.rating.toFixed(1)}
              </span>
              <span className="text-sm text-slate-500">
                ({mattress.reviews.toLocaleString('fr-FR')})
              </span>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-accent">
                {mattress.price}
              </span>
              {mattress.originalPrice ? (
                <span className="text-lg text-slate-400 line-through">
                  {mattress.originalPrice}
                </span>
              ) : null}
              {savingsPct ? (
                <Badge variant="secondary" className="text-xs">
                  -{savingsPct}%
                </Badge>
              ) : null}
            </div>
            {comfortLabel ? (
              <Badge variant="outline">{comfortLabel}</Badge>
            ) : null}
          </div>

          {featureList.length ? (
            <CardDescription className="mb-4">
              <ul className="space-y-2">
                {featureList.slice(0, 5).map((feature, index) => (
                  <li
                    key={`${mattress.id}-feature-${index}`}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardDescription>
          ) : null}

          <div className="space-y-3">
            <Button variant="outline" className="w-full" size="xl" asChild>
              <Link href={productUrl}>Voir les détails</Link>
            </Button>
            <AmazonButton
              asin={mattress.asin || ''}
              brand={mattress.brand}
              product={mattress.name}
            />
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
