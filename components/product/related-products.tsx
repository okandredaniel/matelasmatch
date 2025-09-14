import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mattresses } from '@/data/mattresses';
import { generateSlug } from '@/lib/product';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function RelatedProducts({
  currentId,
  type,
}: {
  currentId: number;
  type: string;
}) {
  const items = mattresses
    .filter((m) => m.id !== currentId && m.type === type)
    .slice(0, 3);
  if (!items.length) return null;
  return (
    <Card className="glass-card border-0 mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Produits similaires</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((r) => (
            <Link
              key={r.id}
              href={`/matelas/${generateSlug(r.name)}`}
              className="group"
              prefetch={false}
            >
              <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={r.image || '/placeholder.svg'}
                    alt={r.name}
                    width={480}
                    height={320}
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {r.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-accent">{r.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{r.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
