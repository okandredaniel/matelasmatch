import { toProductSlug } from '@/lib/slug';
import type { Mattress } from '@/types/mattress';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'content', 'mattresses');

async function exists(p: string): Promise<boolean> {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) files.push(...(await walk(p)));
      else if (e.isFile() && p.toLowerCase().endsWith('.json')) files.push(p);
    }
    return files;
  } catch {
    return [];
  }
}

function fileSlug(p: string): string {
  return path.basename(p).replace(/\.json$/i, '');
}

async function readJSON<T>(p: string): Promise<T> {
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw) as T;
}

export async function getAllMattresses(): Promise<Mattress[]> {
  if (!(await exists(ROOT))) return [];
  const files = await walk(ROOT);
  const items = await Promise.all(
    files.map(async (f) => {
      const data = await readJSON<Mattress>(f);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!data.slug) (data as any).slug = fileSlug(f);
      return data;
    })
  );
  return items;
}

export async function getMattressBySlug(
  slug: string
): Promise<Mattress | null> {
  const items = await getAllMattresses();
  const s = slug.toLowerCase();
  const found =
    items.find((m) => {
      const a = (m.slug || '').toLowerCase();
      const b = toProductSlug(m.name).toLowerCase();
      return a === s || b === s;
    }) || null;
  return found;
}
