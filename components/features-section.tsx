import { features } from '@/data/features';
import { Award, ExternalLink, Search, Star } from 'lucide-react';

const iconMap = {
  search: Search,
  'external-link': ExternalLink,
  award: Award,
  star: Star,
} as const;

export function FeaturesSection() {
  return (
    <section className='py-16 px-4'>
      <div className='container mx-auto'>
        <h2 className='sr-only'>Pourquoi choisir Matelasmatch</h2>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center'>
          {features.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <li
                key={f.id}
                className='glass-card-enhanced rounded-2xl md:rounded-3xl p-3 md:p-6 group transition-all duration-500'
              >
                <div className='flex flex-col md:flex-row items-center md:space-x-3 mb-2 md:mb-4'>
                  <div className='w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-slate-400/15 to-slate-300/15 rounded-lg md:rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 group-hover:scale-110 transition-transform duration-300 mb-2 md:mb-0'>
                    <Icon
                      className='w-4 h-4 md:w-5 md:h-5 text-foreground/70'
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className='font-medium text-foreground text-xs md:text-base text-center md:text-left'>
                    {f.title}
                  </h3>
                </div>
                <p className='text-xs md:text-sm text-slate-500 text-center md:text-left'>
                  {f.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
