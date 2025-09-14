import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles | MatelasMatch',
  description: 'Guides, conseils et analyses pour choisir votre matelas.',
  alternates: { canonical: absoluteUrl('/articles') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/articles'),
    title: 'Articles | MatelasMatch',
    description: 'Guides, conseils et analyses pour choisir votre matelas.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Articles MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles | MatelasMatch',
    description: 'Guides, conseils et analyses pour choisir votre matelas.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
