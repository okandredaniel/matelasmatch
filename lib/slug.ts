export function toSlug(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function toBrandSlug(brand: string): string {
  return toSlug(brand);
}

export function toProductSlug(name: string): string {
  return toSlug(name);
}
