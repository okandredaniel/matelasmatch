export function parsePrice(val?: unknown) {
  if (typeof val === 'number' && isFinite(val)) return val;
  if (typeof val !== 'string') return undefined;
  let s = val
    .replace(/\u00A0/g, ' ')
    .trim()
    .replace(/\s/g, '')
    .replace(/[^\d.,-]/g, '');
  if (s.includes('.') && s.includes(','))
    s = s.replace(/\./g, '').replace(',', '.');
  else if (s.includes(',') && !s.includes('.')) s = s.replace(',', '.');
  else s = s.replace(/,/g, '');
  const n = Number(s);
  return Number.isFinite(n) ? n : undefined;
}

export function formatPriceEUR(
  val?: unknown,
  opts: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }
) {
  const n = parsePrice(val);
  return typeof n === 'number'
    ? new Intl.NumberFormat('fr-FR', opts).format(n)
    : undefined;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calcSavingsPct(price?: unknown, was?: unknown) {
  const now = parsePrice(price);
  const prev = parsePrice(was);
  if (!now || !prev || prev <= now) return undefined;
  return Math.round(((prev - now) / prev) * 100);
}

type UrlResolvable = {
  amazonLink?: string;
  brandUrl?: string;
  slug?: string;
};

export function resolveExternalUrl(m?: UrlResolvable) {
  if (!m) return undefined;
  if (m.amazonLink) return m.amazonLink;
  if (m.brandUrl) return m.brandUrl;
  if (m.slug) return `/matelас/${m.slug}`;
  return undefined;
}
