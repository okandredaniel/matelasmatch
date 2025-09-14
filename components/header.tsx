'use client';

import { headerLinks } from '@/data/navigation';
import { site } from '@/data/site';
import type { NavLink } from '@/types/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href.startsWith('/') &&
    (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full glass-header">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white/80 px-3 py-2 rounded"
      >
        Aller au contenu
      </a>

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            prefetch={false}
            className="font-sans text-2xl font-bold text-accent"
          >
            {site.name}
          </Link>
        </div>

        <nav
          className="hidden md:flex items-center space-x-6"
          aria-label="Navigation principale"
        >
          {headerLinks.map((item: NavLink) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel={[item.rel, 'noopener', 'noreferrer']
                  .filter(Boolean)
                  .join(' ')}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden glass-button p-2 rounded-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                open ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card-enhanced border-t border-white/20 bg-white/70 backdrop-blur-md">
          <nav
            id="mobile-menu"
            className="flex flex-col p-4 space-y-2"
            aria-label="Menu mobile"
          >
            {headerLinks.map((item: NavLink) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel={[item.rel, 'noopener', 'noreferrer']
                    .filter(Boolean)
                    .join(' ')}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  className={`text-sm font-medium transition-colors py-2 px-4 rounded-lg hover:bg-white/10 ${
                    isActive(item.href)
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
