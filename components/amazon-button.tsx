'use client';

import { Button } from '@/components/ui/button';
import { toBrandSlug, toProductSlug } from '@/lib/slug';
import { track } from '@vercel/analytics';
import { ExternalLink } from 'lucide-react';

type Props = { asin: string; brand?: string; product?: string };

export function AmazonButton({ asin, brand, product }: Props) {
  const b = brand ? toBrandSlug(brand) : undefined;
  const p = product ? toProductSlug(product) : undefined;

  const qs = new URLSearchParams();
  if (b) qs.set('brand', b);
  if (p) qs.set('product', p);
  const href = `/go/amazon/${asin}${qs.toString() ? `?${qs.toString()}` : ''}`;

  const onClick = () => {
    const payload: Record<string, string> = { merchant: 'amazon', asin };
    if (brand) payload.brand = brand;
    if (product) payload.product = product;
    track('affiliate_click', payload);
  };

  return (
    <Button variant="affiliate" size="xl" block asChild>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        aria-label="Voir sur Amazon (ouvre un nouvel onglet)"
        title="Voir sur Amazon"
        onClick={onClick}
      >
        <span className="flex items-center gap-3">
          <ExternalLink className="h-5 w-5" />
          Voir sur Amazon
        </span>
      </a>
    </Button>
  );
}
