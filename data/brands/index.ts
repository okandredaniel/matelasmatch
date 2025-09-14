import { toBrandSlug } from '@/lib/slug';
import type { Brand } from '@/types/brand';

export const brands: Brand[] = [
  { slug: toBrandSlug('Emma'), name: 'Emma', country: 'Allemagne' },
  { slug: toBrandSlug('Simba'), name: 'Simba', country: 'Royaume-Uni' },
  { slug: toBrandSlug('Casper'), name: 'Casper', country: 'États-Unis' },
  { slug: toBrandSlug('Tempur'), name: 'Tempur', country: 'Danemark' },
  { slug: toBrandSlug('Latex Bio'), name: 'Latex Bio', country: 'Portugal' },
  { slug: toBrandSlug('Bonnell'), name: 'Bonnell', country: 'Turquie' },
];
