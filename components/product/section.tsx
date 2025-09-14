import { cn } from '@/lib/utils';
import * as React from 'react';

type Props = {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  title,
  subtitle,
  actions,
  className,
  children,
}: Props) {
  return (
    <section className={cn('px-4 md:px-0 py-4', className)}>
      {title ? (
        <header className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-slate-600 mt-1">{subtitle}</p>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}
