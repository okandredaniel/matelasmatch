import { calcSavingsPct, formatPriceEUR } from '@/lib/product';

type Props = { price?: string | number; originalPrice?: string | number };

export function PriceBlock({ price, originalPrice }: Props) {
  const pct = calcSavingsPct(price, originalPrice);

  const priceText =
    formatPriceEUR(price) ?? (typeof price === 'string' ? price : '');

  const originalText =
    formatPriceEUR(originalPrice) ??
    (typeof originalPrice === 'string' ? originalPrice : undefined);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {priceText ? (
        <span className="text-3xl font-bold text-accent">{priceText}</span>
      ) : null}
      {originalText ? (
        <span className="text-lg text-slate-400 line-through">
          {originalText}
        </span>
      ) : null}
      {pct ? (
        <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800">
          -{pct}% d’économie
        </span>
      ) : null}
    </div>
  );
}
