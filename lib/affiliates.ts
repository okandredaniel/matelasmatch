export const AMAZON_PARTNER_TAG = 'mat-match-21';

export function buildAmazonUrl(asin: string, brand?: string, product?: string) {
  const base = `https://www.amazon.fr/dp/${asin}`;
  const url = new URL(base);
  if (AMAZON_PARTNER_TAG) url.searchParams.set('tag', AMAZON_PARTNER_TAG);
  url.searchParams.set('utm_source', 'matelasmatch');
  url.searchParams.set('utm_medium', 'affiliate');
  if (brand) url.searchParams.set('utm_brand', brand);
  if (product) url.searchParams.set('utm_product', product);
  return url.toString();
}
