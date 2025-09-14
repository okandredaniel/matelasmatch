import Link from 'next/link';

type Props = { items: { href: string; label: string; current?: boolean }[] };

export function Breadcrumbs({ items }: Props) {
  return (
    <nav className="mb-8" aria-label="Fil d’Ariane">
      <ol className="flex items-center space-x-2 text-sm text-slate-600">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center">
            {it.current ? (
              <span className="text-slate-900 font-medium">{it.label}</span>
            ) : (
              <Link
                href={it.href}
                className="hover:text-accent transition-colors"
              >
                {it.label}
              </Link>
            )}
            {i < items.length - 1 ? (
              <span className="mx-2" aria-hidden="true">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
