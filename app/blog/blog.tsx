import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | MatelasMatch',
  description:
    "Guides d'achat, comparatifs et conseils pour choisir le bon matelas en France.",
  alternates: { canonical: absoluteUrl('/blog') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/blog'),
    title: 'Blog | MatelasMatch',
    description:
      "Guides d'achat, comparatifs et conseils pour le choix de votre matelas.",
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Blog MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | MatelasMatch',
    description:
      "Guides d'achat, comparatifs et conseils pour le choix de votre matelas.",
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
