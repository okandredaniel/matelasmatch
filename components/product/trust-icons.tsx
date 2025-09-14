import { Award, Shield, Truck } from 'lucide-react';

export function TrustIcons() {
  return (
    <div className="grid grid-cols-3 gap-4 text-center mt-6">
      <div className="flex flex-col items-center gap-2">
        <Shield className="w-6 h-6 text-green-600" />
        <span className="text-xs text-slate-600">Garantie</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Truck className="w-6 h-6 text-blue-600" />
        <span className="text-xs text-slate-600">Livraison</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Award className="w-6 h-6 text-purple-600" />
        <span className="text-xs text-slate-600">Qualité</span>
      </div>
    </div>
  );
}
