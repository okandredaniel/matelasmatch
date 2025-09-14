import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata, Viewport } from 'next';
import { Playfair_Display } from 'next/font/google';
import type React from 'react';
import { Suspense } from 'react';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.matelasmatch.fr'),
  title: {
    default: 'MatelasMatch – Comparateur de matelas',
    template: '%s | MatelasMatch',
  },
  description:
    'Comparez les meilleurs matelas vendus en France et trouvez le modèle idéal selon votre confort, votre budget et vos préférences.',
  keywords: [
    'matelas',
    'comparateur matelas',
    'meilleurs matelas',
    'mousse mémoire',
    'latex',
    'hybride',
    'ressorts',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.matelasmatch.fr/',
    siteName: 'MatelasMatch',
    title: 'MatelasMatch – Comparateur de matelas',
    description:
      'Trouvez le matelas parfait grâce à des comparatifs clairs et des guides d’achat.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MatelasMatch – Comparateur de matelas',
    description:
      'Trouvez le matelas parfait grâce à des comparatifs clairs et des guides d’achat.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
};

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" dir="ltr">
      <body
        className={[
          'antialiased',
          'font-sans',
          GeistSans.variable,
          GeistMono.variable,
          playfairDisplay.variable,
        ].join(' ')}
      >
        <Suspense fallback={null}>
          <main id="main" className="min-h-dvh">
            {children}
          </main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
