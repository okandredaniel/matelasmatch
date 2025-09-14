import { AmazonButton } from '@/components/amazon-button';
import { Card, CardContent } from '@/components/ui/card';
import { mattresses } from '@/data/mattresses';
import { calcSavingsPct } from '@/lib/product';
import { toBrandSlug, toProductSlug } from '@/lib/slug';
import { ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = { currentId: number; type: string; max?: number };

export function RelatedProducts({ currentId, type, max = 6 }: Props) {
  const items = mattresses
    .filter((m) => m.id !== currentId && m.type === type)
    .slice(0, max);
  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {items.map((r) => {
        const brand = r.brand ? toBrandSlug(r.brand) : 'marque';
        const slug = toProductSlug(r.name);
        const href = `/matelas/${brand}/${slug}`;
        const savePct = calcSavingsPct(r.price, r.originalPrice);
        const hasPrice = Boolean(r.price);

        return (
          <Card
            key={`${r.id}-${slug}`}
            className="h-full rounded-2xl border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 p-0"
          >
            <Link
              href={href}
              prefetch={false}
              aria-label={`Voir ${r.name}`}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-t-2xl block"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <Image
                  src={r.image || '/placeholder.svg'}
                  alt={r.name}
                  width={640}
                  height={400}
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="w-full h-44 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {savePct ? (
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-600 text-white">
                    -{savePct}%
                  </div>
                ) : r.badge ? (
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full bg-sky-700 text-white">
                    {r.badge}
                  </div>
                ) : null}
              </div>
            </Link>

            <CardContent className="p-4 md:p-5">
              <Link
                href={href}
                prefetch={false}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
              >
                <h3 className="text-sm md:text-base font-semibold leading-snug text-slate-900 dark:text-slate-100 line-clamp-2 min-h-[2.5rem]">
                  {r.name}
                </h3>
              </Link>

              <div className="mt-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <Star
                    aria-hidden="true"
                    className="w-4 h-4 fill-current text-amber-400"
                  />
                  <span className="text-sm font-medium">
                    {r.rating?.toFixed?.(1) ?? '—'}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    ({r.reviews ?? 0})
                  </span>
                  <span className="sr-only">Note sur 5</span>
                </div>
                <div className="text-right">
                  {hasPrice ? (
                    <div className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">
                      {r.price}
                    </div>
                  ) : null}
                  {r.originalPrice ? (
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-through">
                      {r.originalPrice}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Link
                  href={href}
                  prefetch={false}
                  aria-label={`Voir la fiche de ${r.name}`}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  Voir le produit
                  <ChevronRight className="h-4 w-4 ml-1" aria-hidden="true" />
                </Link>
                {r.asin ? (
                  <div className="shrink-0">
                    <AmazonButton
                      asin={r.asin}
                      brand={r.brand}
                      product={r.name}
                      compact
                    />
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
