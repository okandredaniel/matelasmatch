type Props = {
  thicknessCm?: number;
  warrantyYears?: number;
  trialNights?: number;
  materials?: string[];
  certifications?: string[];
  sizes?: string[];
  countryOfOrigin?: string;
  edgeSupport?: string;
  motionIsolation?: string;
  cooling?: string;
  bestFor?: string[];
  weightSupportKg?: number;
};

export function SpecsTable(props: Props) {
  const rows: { k: string; v?: string }[] = [
    {
      k: 'Épaisseur',
      v: props.thicknessCm ? `${props.thicknessCm} cm` : undefined,
    },
    {
      k: 'Garantie',
      v: props.warrantyYears ? `${props.warrantyYears} ans` : undefined,
    },
    {
      k: "Nuits d'essai",
      v: props.trialNights ? `${props.trialNights}` : undefined,
    },
    { k: 'Matériaux', v: props.materials?.join(', ') },
    { k: 'Certifications', v: props.certifications?.join(', ') },
    { k: 'Tailles', v: props.sizes?.join(', ') },
    { k: 'Origine', v: props.countryOfOrigin },
    { k: 'Soutien des bords', v: props.edgeSupport },
    { k: 'Isolation des mouvements', v: props.motionIsolation },
    { k: 'Refroidissement', v: props.cooling },
    { k: 'Idéal pour', v: props.bestFor?.join(', ') },
    {
      k: 'Poids supporté',
      v: props.weightSupportKg ? `${props.weightSupportKg} kg` : undefined,
    },
  ].filter((r) => r.v);

  if (!rows.length) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-3">
        Fiche technique
      </h3>
      <dl className="grid md:grid-cols-2 gap-x-8 gap-y-3">
        {rows.map((r, i) => (
          <div key={`spec-${i}`} className="grid grid-cols-3 items-start">
            <dt className="col-span-1 text-sm font-medium text-slate-600">
              {r.k}
            </dt>
            <dd className="col-span-2 text-sm text-slate-900">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
