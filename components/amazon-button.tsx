import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

type Props = { href: string };

export function AmazonButton({ href }: Props) {
  return (
    <Button variant="affiliate" size="xl" block asChild>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        aria-label="Voir sur Amazon (ouvre un nouvel onglet)"
        title="Voir sur Amazon"
      >
        <span className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex size-5 items-center justify-center rounded-lg bg-white/20"
          >
            <ExternalLink className="size-3" />
          </span>
          <span className="font-semibold">Voir sur Amazon</span>
        </span>
      </a>
    </Button>
  );
}
