export const AMAZON_CTA_CLASS =
  'inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white shadow-2xl backdrop-blur-xl transition duration-300 hover:from-accent/90 hover:to-accent/90 hover:shadow-indigo-500/25';

export function buildDataAttrs(dataset?: Record<string, string>) {
  const attrs: Record<string, string> = {};
  if (!dataset) return attrs;
  for (const [k, v] of Object.entries(dataset)) attrs[`data-${k}`] = String(v);
  return attrs;
}
