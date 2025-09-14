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
import { Mattress } from '@/types/mattress';
import { ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';

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
  const ratingLabel = `${mattress.rating} sur 5, ${mattress.reviews} avis`;
  const typeLabel = typeMap.get(mattress.type) || mattress.type;
  const comfortLabel =
    comfortMap.get(mattress.firmness || mattress.comfort) ||
    mattress.firmness ||
    mattress.comfort;
  const stars = Math.round(mattress.rating || 0);
  const priceNow = parsePrice(mattress.price);
  const priceWas = parsePrice(mattress.originalPrice);
  const hasSavings = priceNow && priceWas && priceWas > priceNow;
  const savingsPct = hasSavings
    ? Math.round(((priceWas! - priceNow!) / priceWas!) * 100)
    : undefined;
  const featureList =
    mattress.features && mattress.features.length > 0
      ? mattress.features
      : mattress.benefits || [];

  return (
    <article aria-labelledby={titleId} className={className}>
      <Card className="glass-card rounded-2xl group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden pt-0">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-2xl">
            <Image
              src={mattress.image || '/placeholder.svg'}
              alt={`${mattress.name} — ${typeLabel}, ${comfortLabel}`}
              width={960}
              height={640}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              priority={false}
            />
            {mattress.badge ? (
              <Badge className="absolute top-4 left-4 bg-accent/90 text-white backdrop-blur-sm">
                {mattress.badge}
              </Badge>
            ) : null}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {mattress.brand ? (
                <span className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium text-slate-700">
                  {mattress.brand}
                </span>
              ) : null}
              <span className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium text-slate-700">
                {typeLabel}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-6 py-0">
          <div className="flex items-center justify-between mb-2">
            <CardTitle
              id={titleId}
              className="text-xl font-semibold text-foreground"
            >
              {mattress.name}
            </CardTitle>
            <div className="flex items-center gap-2" aria-label={ratingLabel}>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < stars
                        ? 'w-4 h-4 text-yellow-400 fill-current'
                        : 'w-4 h-4 text-slate-300'
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

          <div className="flex items-center justify-between mb-4">
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
              <Badge
                variant="outline"
                className="text-xs bg-white/50 border-white/60"
              >
                {comfortLabel}
              </Badge>
            ) : null}
          </div>

          {featureList.length > 0 ? (
            <CardDescription className="mb-4">
              <ul className="space-y-2">
                {featureList.slice(0, 5).map((feature, index) => (
                  <li
                    key={`${mattress.id}-feature-${index}`}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardDescription>
          ) : null}

          <Button
            className="w-full h-12 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 hover:from-accent/90 hover:to-accent/90 text-white shadow-2xl backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-300 hover:shadow-indigo-500/25"
            size="lg"
            asChild
          >
            <a
              href={mattress.amazonLink}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              aria-label={`Voir ${mattress.name} sur Amazon`}
            >
              <span className="flex items-center space-x-3">
                <span className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
                <span className="font-medium">Voir sur Amazon</span>
              </span>
            </a>
          </Button>
        </CardContent>
      </Card>
    </article>
  );
}
