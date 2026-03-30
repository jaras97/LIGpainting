'use client';

import { useTranslations } from 'next-intl';
import Reveal from '../motion/reveal';
import Section from '../Section';

type Step = { t: string; d: string };

export default function Process() {
  const t = useTranslations('process');

  const steps = t.raw('steps') as Step[];
  const meta = t.raw('meta') as string[];

  return (
    <Section id='process' tone='b'>
      <div className='mx-auto max-w-6xl px-6'>
        <Reveal>
          <h2 className='text-3xl font-semibold text-[var(--brand-navy)]'>
            {t('title')}
          </h2>
          <p className='mt-3 max-w-2xl text-sm text-neutral-600'>
            {t('subtitle')}
          </p>
        </Reveal>

        <div className='mt-10 grid gap-4 md:grid-cols-2'>
          {steps.map((s, i) => (
            <Reveal key={s.t}>
              <div className='rounded-3xl border border-[var(--brand-mist)] bg-white/70 p-6 shadow-sm backdrop-blur'>
                <div className='flex items-start gap-4'>
                  <div className='mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-navy)] text-xs font-semibold text-white'>
                    {i + 1}
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-center justify-between gap-3'>
                      <h3 className='text-sm font-semibold text-neutral-900'>
                        {s.t}
                      </h3>
                      <span className='h-2 w-2 rounded-full bg-[var(--brand-cyan)]' />
                    </div>

                    <p className='mt-2 text-sm leading-relaxed text-neutral-600'>
                      {s.d}
                    </p>

                    <div
                      className='mt-5 h-px w-full'
                      style={{
                        background:
                          'linear-gradient(90deg, transparent, var(--brand-mist), transparent)',
                      }}
                    />

                    <p className='mt-4 text-[11px] text-neutral-500'>
                      {meta.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
