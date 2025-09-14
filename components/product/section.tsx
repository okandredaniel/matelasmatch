import { cn } from '@/lib/utils';

type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ title, subtitle, className, children }: Props) {
  return (
    <section className={cn('px-4 md:px-0 py-4', className)}>
      {title ? (
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            {title}
          </h2>
          {subtitle ? <p className="text-slate-600 mt-1">{subtitle}</p> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}
