function parsePrice(val?: string) {
  if (!val) return undefined;
  const n = Number(
    val
      .replace(/\u00A0/g, ' ')
      .replace(/[^\d,.-]/g, '')
      .replace(',', '.')
  );
  return Number.isFinite(n) ? n : undefined;
}

type Props = { price: string; originalPrice?: string };

export function PriceBlock({ price, originalPrice }: Props) {
  const now = parsePrice(price);
  const was = parsePrice(originalPrice);
  const hasSavings =
    typeof now === 'number' && typeof was === 'number' && was > now;
  const pct = hasSavings ? Math.round(((was - now) / was) * 100) : undefined;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-3xl font-bold text-accent">{price}</span>
      {originalPrice ? (
        <span className="text-lg text-slate-400 line-through">
          {originalPrice}
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
