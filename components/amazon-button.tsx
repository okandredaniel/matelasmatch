'use client';

import { Button } from '@/components/ui/button';
import { track } from '@vercel/analytics';
import { ExternalLink } from 'lucide-react';

type Props = {
  asin: string;
  brand: string;
  product: string;
  compact?: boolean;
};

export function AmazonButton({ asin, brand, product, compact }: Props) {
  const qs = new URLSearchParams();
  qs.set('brand', brand);
  qs.set('product', product);
  const href = `/go/amazon/${asin}${qs.toString() ? `?${qs.toString()}` : ''}`;

  const onClick = () => {
    const payload: Record<string, string> = { merchant: 'amazon', asin };
    if (brand) payload.brand = brand;
    if (product) payload.product = product;
    track('affiliate_click', payload);
  };

  return (
    <Button
      variant="affiliate"
      size={compact ? 'lg' : 'xl'}
      block={!compact}
      asChild
    >
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
