'use client';

type Option = { value: string; label: string };

type Props = {
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  id?: string;
  'aria-label'?: string;
};

export function FilterSelect({
  value,
  onChange,
  options,
  placeholder = 'Sélectionner',
  className,
  id,
  ...a11y
}: Props) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`glass-select w-full ${className || ''}`}
      {...a11y}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.label}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
