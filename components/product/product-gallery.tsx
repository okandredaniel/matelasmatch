import Image from 'next/image';

type Props = {
  images: string[];
  fallback: string;
  title: string;
  badge?: string;
};

export function ProductGallery({ images, fallback, title, badge }: Props) {
  const src = images.length ? images[0] : fallback;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200">
        <Image
          src={src}
          alt={title}
          width={1200}
          height={800}
          className="h-[420px] w-full object-cover"
          priority
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        ) : null}
      </div>
    </div>
  );
}
