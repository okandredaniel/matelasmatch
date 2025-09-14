import type { Merchant } from '@/types/mattress';
import Link from 'next/link';

type Props = {
  merchants?: Merchant[];
  dataset?: Record<string, string | number | boolean>;
};

function toDataAttrs(d?: Record<string, string | number | boolean>) {
  if (!d) return {};
  const entries = Object.entries(d).map(([k, v]) => [
    `data-${k.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
    String(v),
  ]);
  return Object.fromEntries(entries);
}

export function MerchantLinks({ merchants = [], dataset }: Props) {
  if (!merchants.length) return null;
  const dataAttrs = toDataAttrs(dataset);
  return (
    <div className="grid gap-3">
      {merchants.map((m, i) => (
        <div key={`${m.name}-${i}`}>
          <Link
            href={m.url}
            target="_blank"
            rel="sponsored nofollow noopener"
            {...dataAttrs}
          >
            {m.label || `Voir chez ${m.name}`}
          </Link>
        </div>
      ))}
    </div>
  );
}
