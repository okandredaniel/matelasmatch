import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Guide d'achat | MatelasMatch",
  description:
    'Tout ce qu’il faut savoir pour choisir le bon matelas selon votre profil.',
  alternates: { canonical: absoluteUrl('/guide-achat') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/guide-achat'),
    title: "Guide d'achat | MatelasMatch",
    description:
      'Tout ce qu’il faut savoir pour choisir le bon matelas selon votre profil.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: "Guide d'achat MatelasMatch",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Guide d'achat | MatelasMatch",
    description:
      'Tout ce qu’il faut savoir pour choisir le bon matelas selon votre profil.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
