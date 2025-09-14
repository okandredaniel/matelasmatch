'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

type Option = { value: string; label: string };

type Props = {
  mode?: 'form' | 'controlled';
  action?: string;
  method?: 'GET' | 'POST';
  names?: { search?: string; type?: string; comfort?: string };
  search?: string;
  onSearch?: (v: string) => void;
  typeValue?: string;
  onType?: (v: string) => void;
  comfortValue?: string;
  onComfort?: (v: string) => void;
  options: { types: Option[]; comforts: Option[] };
  placeholders?: {
    search?: string;
    type?: string;
    comfort?: string;
    submit?: string;
    reset?: string;
  };
  onReset?: () => void;
  className?: string;
};

export function FilterBar({
  mode = 'controlled',
  action,
  method = 'GET',
  names = { search: 'q', type: 'type', comfort: 'confort' },
  search = '',
  onSearch,
  typeValue = '',
  onType,
  comfortValue = '',
  onComfort,
  options,
  placeholders = {
    search: 'Rechercher…',
    type: 'Type de matelas',
    comfort: 'Niveau de confort',
    submit: 'Filtrer',
    reset: 'Réinitialiser',
  },
  onReset,
  className,
}: Props) {
  const isForm = mode === 'form' && !!action;

  const [q, setQ] = useState(search);
  const [t, setT] = useState(typeValue);
  const [c, setC] = useState(comfortValue);

  useEffect(() => setQ(search), [search]);
  useEffect(() => setT(typeValue), [typeValue]);
  useEffect(() => setC(comfortValue), [comfortValue]);

  const content = (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
      <div className="relative group md:col-span-4">
        <label htmlFor="filters-q" className="sr-only">
          {placeholders.search}
        </label>
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400 w-5 h-5 group-hover:text-indigo-300 transition-colors" />
        <Input
          id="filters-q"
          name={isForm ? names.search : undefined}
          type="search"
          value={q}
          onChange={(e) =>
            isForm ? setQ(e.target.value) : onSearch?.(e.target.value)
          }
          placeholder={placeholders.search}
          autoComplete="off"
          className="pl-12 h-14 bg-white/20 border-white/30 backdrop-blur-xl rounded-2xl text-slate-700 placeholder:text-slate-500 focus:bg-white/30 focus:border-indigo-300/50 transition-all duration-300 shadow-lg hover:shadow-xl"
        />
      </div>

      <div className="relative group md:col-span-2">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center z-10">
          <span className="w-2 h-2 bg-white rounded-sm" />
        </span>
        <Select
          value={t}
          onValueChange={(v) => (isForm ? setT(v) : onType?.(v))}
        >
          <SelectTrigger
            aria-label={placeholders.type}
            className="pl-12 h-14 bg-white/20 border-white/30 backdrop-blur-xl rounded-2xl text-slate-700 focus:bg-white/30 focus:border-indigo-300/50 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:bg-white/25"
          >
            <SelectValue placeholder={placeholders.type} />
          </SelectTrigger>
          <SelectContent className="bg-white/95 backdrop-blur-2xl border-white/50 rounded-2xl shadow-2xl">
            {options.types.map((o) => (
              <SelectItem
                key={o.value}
                value={o.value}
                className="rounded-xl hover:bg-indigo-50/80"
              >
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="relative group md:col-span-2">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center z-10">
          <span className="w-2 h-2 bg-white rounded-full" />
        </span>
        <Select
          value={c}
          onValueChange={(v) => (isForm ? setC(v) : onComfort?.(v))}
        >
          <SelectTrigger
            aria-label={placeholders.comfort}
            className="pl-12 h-14 bg-white/20 border-white/30 backdrop-blur-xl rounded-2xl text-slate-700 focus:bg-white/30 focus:border-indigo-300/50 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:bg-white/25"
          >
            <SelectValue placeholder={placeholders.comfort} />
          </SelectTrigger>
          <SelectContent className="bg-white/95 backdrop-blur-2xl border-white/50 rounded-2xl shadow-2xl">
            {options.comforts.map((o) => (
              <SelectItem
                key={o.value}
                value={o.value}
                className="rounded-xl hover:bg-emerald-50/80"
              >
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isForm ? (
        <Button
          type="submit"
          className="h-14 md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xl border border-indigo-500 rounded-2xl transition-all duration-300 hover:shadow-indigo-500/25"
        >
          <span className="flex items-center space-x-3">
            <span className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center">
              <Filter className="w-3 h-3" />
            </span>
            <span className="font-medium">{placeholders.submit}</span>
          </span>
        </Button>
      ) : (
        <Button onClick={onReset} className="h-14 md:col-span-2 glass-button">
          <Filter className="w-4 h-4 mr-2" />
          {placeholders.reset}
        </Button>
      )}
    </div>
  );

  if (isForm) {
    return (
      <form
        action={action}
        method={method}
        className={`glass-search-advanced rounded-3xl p-8 max-w-4xl mx-auto mb-8 ${
          className ?? ''
        }`}
        role="search"
        aria-label="Recherche de matelas"
      >
        <input type="hidden" name={names.type} value={t} />
        <input type="hidden" name={names.comfort} value={c} />
        {content}
      </form>
    );
  }

  return (
    <div className={`glass-search-advanced rounded-3xl p-8 ${className ?? ''}`}>
      {content}
    </div>
  );
}
