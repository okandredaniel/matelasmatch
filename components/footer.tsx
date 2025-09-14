import { address, affiliateDisclosure, contactEmail } from '@/data/legal';
import { footerSections } from '@/data/navigation';
import { organizationSchema } from '@/data/organization';
import { site } from '@/data/site';
import Link from 'next/link';
import Script from 'next/script';

export function Footer() {
  const year = new Date().getFullYear();
  const contactSection = footerSections.find(
    (s) => s.title.toLowerCase() === 'contact'
  );
  const sections = footerSections.filter(
    (s) => s.title.toLowerCase() !== 'contact'
  );
  const legalLinks =
    contactSection?.links?.filter((l) => l.href.startsWith('/')) ?? [];

  return (
    <footer role="contentinfo" className="bg-slate-100">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 lg:gap-x-12">
          <div className="md:col-span-5 lg:col-span-4">
            <Link
              href="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-accent rounded"
              prefetch={false}
            >
              <span className="font-sans text-xl font-bold text-accent">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-700">
              Le comparateur de matelas pensé pour les dormeurs exigeants.
              Sélection indépendante, tests rigoureux et recommandations claires
              pour acheter en toute confiance sur Amazon.
            </p>
            <p className="mt-3 text-xs text-slate-600">{affiliateDisclosure}</p>
          </div>

          <div className="md:col-span-4 lg:col-span-5">
            <div className="grid gap-y-6 gap-x-8 [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))]">
              {sections.map((col) => {
                const headingId = col.title.replace(/\s+/g, '-').toLowerCase();
                return (
                  <nav key={col.title} aria-labelledby={headingId}>
                    <h4
                      id={headingId}
                      className="font-semibold text-foreground mb-3"
                    >
                      {col.title}
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {col.links.map((l) => {
                        const rel = l.external
                          ? [l.rel, 'noopener', 'noreferrer']
                              .filter(Boolean)
                              .join(' ')
                          : l.rel;
                        return (
                          <li key={l.href}>
                            {l.external ? (
                              <a
                                href={l.href}
                                target="_blank"
                                rel={rel}
                                className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                              >
                                {l.label}
                              </a>
                            ) : (
                              <Link
                                href={l.href}
                                className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                                prefetch={false}
                              >
                                {l.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            {legalLinks.length > 0 && (
              <>
                <h4 className="font-semibold text-foreground mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {legalLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                        prefetch={false}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h4 className="font-semibold text-foreground mt-8 mb-3">
              À propos
            </h4>
            <address className="not-italic text-sm text-slate-700">
              <span className="block">📍 {address}</span>
              <a
                href={`mailto:${contactEmail}`}
                className="block hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded mt-2"
              >
                ✉️ {contactEmail}
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 text-center text-sm text-slate-700">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
        </div>

        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </div>
    </footer>
  );
}
