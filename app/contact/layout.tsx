import { absoluteUrl } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | MatelasMatch',
  description:
    'Écrivez-nous pour des conseils personnalisés et des questions sur les produits.',
  alternates: { canonical: absoluteUrl('/contact') },
  openGraph: {
    type: 'website',
    url: absoluteUrl('/contact'),
    title: 'Contact | MatelasMatch',
    description:
      'Écrivez-nous pour des conseils personnalisés et des questions sur les produits.',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Contact MatelasMatch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | MatelasMatch',
    description:
      'Écrivez-nous pour des conseils personnalisés et des questions sur les produits.',
    images: [absoluteUrl('/og-image.png')],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
