import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mattress } from '@/types/mattress';
import { ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';

interface MattressCardProps {
  mattress: Mattress;
}

export function MattressCard({ mattress }: MattressCardProps) {
  const titleId = `mattress-${mattress.id}-title`;
  const ratingLabel = `${mattress.rating} sur 5, ${mattress.reviews} avis`;

  return (
    <article aria-labelledby={titleId}>
      <Card className="glass-card rounded-2xl group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden pt-0">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-2xl">
            <Image
              src={mattress.image || '/placeholder.svg'}
              alt={`${mattress.name} — ${mattress.type}, ${mattress.comfort}`}
              width={960}
              height={640}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <Badge className="absolute top-4 left-4 bg-accent/90 text-white backdrop-blur-sm">
              {mattress.badge}
            </Badge>
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-full px-3 py-1">
              <span className="text-xs font-medium text-slate-700">
                {mattress.type}
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
            <div
              className="flex items-center space-x-1"
              aria-label={ratingLabel}
            >
              <Star
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-foreground">
                {mattress.rating}
              </span>
              <span className="text-sm text-slate-500">
                ({mattress.reviews.toLocaleString('fr-FR')})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-accent">
                {mattress.price}
              </span>
              {mattress.originalPrice && (
                <span className="text-lg text-slate-400 line-through">
                  {mattress.originalPrice}
                </span>
              )}
            </div>
            <Badge
              variant="outline"
              className="text-xs bg-white/50 border-white/60"
            >
              {mattress.comfort}
            </Badge>
          </div>

          <CardDescription className="mb-4">
            <ul className="space-y-2">
              {mattress.benefits.map((benefit, index) => (
                <li
                  key={`${mattress.id}-benefit-${index}`}
                  className="flex items-start space-x-2 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardDescription>

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
