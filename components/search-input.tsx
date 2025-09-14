'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
  'aria-label'?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = 'Rechercher…',
  className,
  ...a11y
}: Props) {
  return (
    <div className={`relative ${className || ''}`}>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4"
        aria-hidden="true"
      />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="glass-input pl-10"
        {...a11y}
      />
    </div>
  );
}
