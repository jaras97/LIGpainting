'use client';

import { useTranslations } from 'next-intl';
import Reveal from '../motion/reveal';
import Section from '../Section';

export default function Work() {
  const t = useTranslations('work');

  return (
    <Section id='work' tone='a'>
      <div className='mx-auto max-w-6xl px-6'>
        <Reveal>
          <h2 className='text-3xl font-semibold text-[var(--brand-navy)]'>
            {t('title')}
          </h2>
          <p className='mt-3 max-w-2xl text-sm text-neutral-600'>
            {t('subtitle')}
          </p>
        </Reveal>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Reveal key={i}>
              <div className='group overflow-hidden rounded-3xl border border-[var(--brand-mist)] bg-white/60 shadow-sm backdrop-blur'>
                <div className='aspect-[4/3] bg-neutral-100'>
                  {/* placeholder shimmer */}
                  <div
                    className='h-full w-full'
                    style={{
                      background:
                        'linear-gradient(110deg, #f3f4f6 25%, #e5e7eb 35%, #f3f4f6 55%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.4s ease-in-out infinite',
                    }}
                  />
                </div>
                <div className='p-5'>
                  <div className='text-sm font-semibold text-neutral-900'>
                    Project #{i}
                  </div>
                  <div className='mt-1 text-xs text-neutral-600'>
                    Interior / Exterior • Prep + Finish
                  </div>

                  <div className='mt-4 flex gap-2 text-[11px] text-neutral-600'>
                    <span className='rounded-full border border-[var(--brand-mist)] bg-white/70 px-3 py-1'>
                      Before/After
                    </span>
                    <span className='rounded-full border border-[var(--brand-mist)] bg-white/70 px-3 py-1'>
                      Details
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Keyframes for shimmer (Tailwind v4 ok in globals.css too, but inline works) */}
        <style jsx global>{`
          @keyframes shimmer {
            0% {
              background-position: 100% 0;
            }
            100% {
              background-position: -100% 0;
            }
          }
        `}</style>
      </div>
    </Section>
  );
}
