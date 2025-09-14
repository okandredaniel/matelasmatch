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
    <footer className='glass-header py-12 px-4' role='contentinfo'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <Link
              href='/'
              className='inline-block focus:outline-none focus:ring-2 focus:ring-accent rounded'
              prefetch={false}
            >
              <span className='font-sans text-xl font-bold text-accent'>
                {site.name}
              </span>
            </Link>
            <p className='mt-4 text-sm text-slate-600'>
              Le comparateur de matelas pensé pour les dormeurs exigeants.
              Sélection indépendante, tests rigoureux et recommandations claires
              pour acheter en toute confiance sur Amazon.
            </p>
            <p className='mt-3 text-xs text-slate-500'>{affiliateDisclosure}</p>
          </div>

          {sections.map((col) => {
            const headingId = col.title.replace(/\s+/g, '-').toLowerCase();
            return (
              <nav key={col.title} aria-labelledby={headingId}>
                <h4
                  id={headingId}
                  className='font-semibold text-foreground mb-4'
                >
                  {col.title}
                </h4>
                <ul className='space-y-2 text-sm text-slate-600'>
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
                            target='_blank'
                            rel={rel}
                            className='hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded'
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link
                            href={l.href}
                            className='hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded'
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

          <div>
            {legalLinks.length > 0 && (
              <>
                <h4 className='font-semibold text-foreground mb-4'>
                  Contact
                </h4>
                <ul className='space-y-2 text-sm text-slate-600'>
                  {legalLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className='hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded'
                        prefetch={false}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h4 className='font-semibold text-foreground mt-8 mb-4'>À propos</h4>
            <address className='not-italic text-sm text-slate-600'>
              <span className='block'>📍 {address}</span>
              <a
                href={`mailto:${contactEmail}`}
                className='block hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded mt-2'
              >
                ✉️ {contactEmail}
              </a>
            </address>
          </div>
        </div>

        <div className='border-t border-white/20 mt-8 pt-8 text-center text-sm text-slate-600'>
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
        </div>

        <Script
          id='organization-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </div>
    </footer>
  );
}
