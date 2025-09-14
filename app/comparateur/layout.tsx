import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparateur de matelas | MatelasMatch',
  description:
    'Filtrez par type, fermeté, budget et plus pour trouver votre matelas idéal.',
  alternates: { canonical: absoluteUrl('/comparateur') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/comparateur'),
    title: 'Comparateur de matelas | MatelasMatch',
    description:
      'Filtrez par type, fermeté, budget et plus pour trouver votre matelas idéal.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Comparateur MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comparateur de matelas | MatelasMatch',
    description:
      'Filtrez par type, fermeté, budget et plus pour trouver votre matelas idéal.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
