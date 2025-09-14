import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { comfortLevels, mattressTypes } from '@/data/filters';
import type { Mattress } from '@/types/mattress';
import { ExternalLink, Star } from 'lucide-react';
import Image from 'next/image';

const typeMap = new Map(mattressTypes.map((o) => [o.value, o.label]));
const comfortMap = new Map(comfortLevels.map((o) => [o.value, o.label]));

type Props = { item: Mattress };

export function MattressCardCompact({ item }: Props) {
  const typeLabel = typeMap.get(item.type) || item.type;
  const comfortLabel = comfortMap.get(item.firmness) || item.firmness;
  const stars = Math.round(item.rating);

  return (
    <article className="glass-card-enhanced rounded-3xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-4 overflow-hidden">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          width={640}
          height={360}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-sans text-xl font-semibold text-foreground mb-2">
            {item.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {typeLabel}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {comfortLabel}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < stars ? 'text-yellow-400 fill-current' : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">{item.rating.toFixed(1)}</span>
          <span className="text-sm text-slate-500">({item.reviews} avis)</span>
        </div>

        <ul className="space-y-1">
          {item.features.map((f, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <div className="text-2xl font-bold text-accent">{item.price}</div>
          <Button asChild className="glass-button">
            <a
              href={item.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Voir sur Amazon
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
