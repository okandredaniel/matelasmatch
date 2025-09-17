import { FilterBar } from '@/components/filter-bar';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MattressCard } from '@/components/mattress-card';
import { PageHero } from '@/components/page-hero';
import { ResultsCount } from '@/components/results-count';
import { getAllMattresses } from '@/lib/mattresses';

export default async function ComparateurPage({
  searchParams,
}: {
  searchParams: { q?: string; type?: string; confort?: string };
}) {
  const q = (searchParams.q || '').trim().toLowerCase();
  const typeValue = searchParams.type || '';
  const comfortValue = searchParams.confort || '';

  const mattresses = await getAllMattresses();

  const filtered = mattresses.filter((m: any) => {
    const itemType = m.type || '';
    const itemComfort = m.firmness ?? m.comfort ?? '';
    const matchesSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      itemType.toLowerCase().includes(q) ||
      String(itemComfort).toLowerCase().includes(q);
    const matchesType = !typeValue || itemType === typeValue;
    const matchesComfort =
      !comfortValue || String(itemComfort) === comfortValue;
    return matchesSearch && matchesType && matchesComfort;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 relative">
      <Header />
      <PageHero
        title="Comparateur de matelas"
        subtitle="Comparez les meilleurs matelas et trouvez celui qui vous convient parfaitement."
      />
      <section className="py-8 px-4 relative z-10">
        <div className="container mx-auto">
          <FilterBar />
          <ResultsCount
            count={filtered.length}
            singular="matelas"
            className="mb-6"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m: any) => (
              <MattressCard key={m.id} mattress={m} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
