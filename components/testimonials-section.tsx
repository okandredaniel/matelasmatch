'use client';

import { testimonials } from '@/data/testimonials';
import { Testimonial } from '@/types/testimonial';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setPerView(mq.matches ? 2 : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, (testimonials as Testimonial[]).length - perView),
    [perView]
  );
  const step = perView;

  const next = useCallback(
    () => setCurrent((p) => (p + step > maxIndex ? 0 : p + step)),
    [step, maxIndex]
  );
  const prev = useCallback(
    () => setCurrent((p) => (p - step < 0 ? maxIndex : p - step)),
    [step, maxIndex]
  );
  const goTo = useCallback((i: number) => setCurrent(i), []);

  const pageCount = useMemo(
    () => Math.ceil((testimonials as Testimonial[]).length / perView),
    [perView]
  );
  const percent = useMemo(() => (100 / perView) * current, [perView, current]);

  return (
    <section
      id="testimonials"
      className="py-20 px-4"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez les témoignages de clients satisfaits qui ont trouvé leur
            matelas idéal grâce à notre comparateur.
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Témoignages"
          aria-live="polite"
        >
          <div className="p-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${percent}%)` }}
            >
              {(testimonials as Testimonial[]).map((t) => (
                <div key={t.id} className="w-full md:w-1/2 flex-shrink-0 px-2">
                  <figure className="glass-card-enhanced rounded-2xl p-6 h-full border border-white/20">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-6">
                        <div className="flex space-x-1 mr-4" aria-hidden="true">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < t.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span
                          className="text-base font-medium text-slate-600"
                          aria-label={`${t.rating} sur 5`}
                        >
                          {t.rating}/5
                        </span>
                      </div>

                      <blockquote className="text-base text-slate-700 mb-6 leading-relaxed">
                        “{t.text}”
                      </blockquote>

                      <figcaption className="flex items-center justify-center">
                        <span
                          className={`w-12 h-12 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3`}
                          aria-hidden="true"
                        >
                          {t.initials}
                        </span>
                        <span className="text-left">
                          <span className="font-semibold text-foreground text-base block">
                            {t.name}
                          </span>
                          <span className="text-slate-500 text-sm block">
                            {t.location}
                          </span>
                        </span>
                      </figcaption>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-accent/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Témoignages précédents"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-accent/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Témoignages suivants"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>

          <div
            className="flex justify-center mt-8 space-x-2"
            role="tablist"
            aria-label="Pagination des témoignages"
          >
            {Array.from({ length: pageCount }).map((_, index) => {
              const target = index * perView;
              const selected = current >= target && current < target + perView;
              return (
                <button
                  key={index}
                  onClick={() => goTo(target)}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="testimonials-track"
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selected
                      ? 'bg-indigo-500 scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1 mr-4" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.8/5</span>
            </div>
            <p className="text-lg text-slate-600 mb-2">
              Note moyenne basée sur plus de 2 500 avis clients
            </p>
            <p className="text-sm text-slate-500">
              98 % de nos utilisateurs recommandent notre service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
