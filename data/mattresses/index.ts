import { toBrandSlug, toProductSlug } from '@/lib/slug';
import type { Mattress } from '@/types/mattress';

import { bonnellClassic } from './bonnell/classic';
import { casperEssential } from './casper/essential';
import { emmaOriginal } from './emma/original';
import { latexBioNaturel } from './latexbio/naturel-bio';
import { simbaHybrid } from './simba/hybrid';
import { tempurCloud } from './tempur/cloud';

export const mattresses: Mattress[] = [
  emmaOriginal,
  simbaHybrid,
  casperEssential,
  tempurCloud,
  latexBioNaturel,
  bonnellClassic,
];

export function getAllMattresses(): Mattress[] {
  return mattresses;
}

export function getAllBrandSlugs(): string[] {
  return Array.from(new Set(mattresses.map(m => toBrandSlug(m.brand)))).sort();
}

export function getMattressesByBrandSlug(brandSlug: string): Mattress[] {
  return mattresses.filter(m => toBrandSlug(m.brand) === brandSlug);
}

export function getMattressBySlugs(brandSlug: string, productSlug: string): Mattress | undefined {
  return mattresses.find(
    m => toBrandSlug(m.brand) === brandSlug && toProductSlug(m.name) === productSlug
  );
}

export function getAllProductParams(): { brand: string; product: string }[] {
  return mattresses.map(m => ({
    brand: toBrandSlug(m.brand),
    product: toProductSlug(m.name),
  }));
}
