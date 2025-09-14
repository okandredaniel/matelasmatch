import { Star } from 'lucide-react';

type Props = { value: number };

export function StarRating({ value }: Props) {
  const full = Math.round(value);
  return (
    <div
      className="inline-flex items-center gap-2"
      aria-label={`${value.toFixed(1)} sur 5`}
    >
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < full
                ? 'h-5 w-5 text-yellow-500 fill-current'
                : 'h-5 w-5 text-slate-300'
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-slate-900">
        {value.toFixed(1)}
      </span>
    </div>
  );
}
