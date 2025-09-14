import { Card, CardContent } from '@/components/ui/card';
import type { Mattress } from '@/types/mattress';
import {
  BadgeCheck,
  Gauge,
  Globe2,
  Layers,
  ListChecks,
  Moon,
  Ruler,
  ShieldCheck,
  Tag,
  Thermometer,
  Waves,
} from 'lucide-react';

type Props = Partial<Mattress>;

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
      {children}
    </span>
  );
}

function Line({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value?: React.ReactNode;
}) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0)
  ) {
    return null;
  }
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 shrink-0 rounded-lg bg-slate-100 p-1.5 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-slate-900 dark:text-slate-100">
          {typeof value === 'string' ? <span>{value}</span> : value}
        </div>
      </div>
    </div>
  );
}

export function SpecsTable(props: Props) {
  const {
    thicknessCm,
    warrantyYears,
    trialNights,
    materials,
    certifications,
    sizes,
    countryOfOrigin,
    edgeSupport,
    motionIsolation,
    cooling,
    weightSupportKg,
    bestFor,
  } = props;

  const hasAny =
    thicknessCm ||
    warrantyYears ||
    trialNights ||
    (materials && materials.length) ||
    (certifications && certifications.length) ||
    (sizes && sizes.length) ||
    countryOfOrigin ||
    edgeSupport ||
    motionIsolation ||
    cooling ||
    weightSupportKg ||
    (bestFor && bestFor.length);

  if (!hasAny) return null;

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <CardContent className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <Line
            icon={Ruler}
            label="Épaisseur"
            value={thicknessCm ? `${thicknessCm} cm` : undefined}
          />
          <Line
            icon={ShieldCheck}
            label="Garantie"
            value={warrantyYears ? `${warrantyYears} ans` : undefined}
          />
          <Line
            icon={Moon}
            label="Nuits d’essai"
            value={trialNights ? `${trialNights} nuits` : undefined}
          />
          <Line icon={Gauge} label="Soutien des bords" value={edgeSupport} />
          <Line
            icon={Waves}
            label="Isolation des mouvements"
            value={motionIsolation}
          />
          <Line
            icon={Thermometer}
            label="Régulation thermique"
            value={cooling}
          />
          <Line
            icon={Layers}
            label="Matériaux"
            value={
              Array.isArray(materials) && materials.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {materials.map((m) => (
                    <Chip key={m}>{m}</Chip>
                  ))}
                </div>
              ) : undefined
            }
          />
          <Line
            icon={BadgeCheck}
            label="Certifications"
            value={
              Array.isArray(certifications) && certifications.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <Chip key={c}>{c}</Chip>
                  ))}
                </div>
              ) : undefined
            }
          />
          <Line
            icon={Tag}
            label="Tailles"
            value={
              Array.isArray(sizes) && sizes.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              ) : undefined
            }
          />
          <Line icon={Globe2} label="Origine" value={countryOfOrigin} />
          <Line
            icon={Gauge}
            label="Charge max."
            value={weightSupportKg ? `${weightSupportKg} kg` : undefined}
          />
          <Line
            icon={ListChecks}
            label="Idéal pour"
            value={
              Array.isArray(bestFor) && bestFor.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {bestFor.map((b) => (
                    <Chip key={b}>{b}</Chip>
                  ))}
                </div>
              ) : undefined
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}
