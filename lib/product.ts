export function parsePrice(val?: string) {
  if (!val) return undefined;
  const clean = val.replace(/\u00A0/g, ' ');
  const n = Number(clean.replace(/[^\d,.-]/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : undefined;
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calcSavingsPct(price?: string, was?: string) {
  const now = parsePrice(price);
  const prev = parsePrice(was);
  if (!now || !prev || prev <= now) return undefined;
  return Math.round(((prev - now) / prev) * 100);
}
