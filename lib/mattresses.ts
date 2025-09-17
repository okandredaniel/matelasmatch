import { toProductSlug } from '@/lib/slug';
import { Mattress } from '@/types/mattress';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dir = path.join(root, 'content', 'mattresses');

export async function getAllMattresses(): Promise<Mattress[]> {
  const files = await fs.readdir(dir);
  const items = await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (f) => {
        const raw = await fs.readFile(path.join(dir, f), 'utf8');
        return JSON.parse(raw) as Mattress;
      })
  );
  return items;
}

export async function getMattressBySlug(
  slug: string
): Promise<Mattress | null> {
  try {
    const raw = await fs.readFile(path.join(dir, `${slug}.json`), 'utf8');
    return JSON.parse(raw) as Mattress;
  } catch {
    /* empty */
  }
  const items = await getAllMattresses();
  const found =
    items.find((m) => m.slug === slug || toProductSlug(m.name) === slug) ||
    null;
  return found;
}
