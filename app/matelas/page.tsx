import { MattressCard } from '@/components/mattress-card';
import { getAllMattresses } from '@/lib/mattresses';

export const revalidate = 0;

export default async function Page() {
  const items = await getAllMattresses();
  const sorted = items.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Colchões</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((product) => (
          <MattressCard key={product.slug} mattress={product} />
        ))}
      </ul>
    </main>
  );
}
