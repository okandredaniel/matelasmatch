type Props = {
  count: number;
  singular: string;
  plural?: string;
  className?: string;
};

export function ResultsCount({ count, singular, plural, className }: Props) {
  const word = count > 1 ? plural || `${singular}s` : singular;
  return (
    <p className={`text-slate-600 ${className || ''}`}>
      {count} {word} trouvé{count > 1 ? 's' : ''}
    </p>
  );
}
