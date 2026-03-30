'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import Reveal from '../motion/reveal';
import Section from '../Section';

type Item = { q: string; a: string };

export default function FAQ() {
  const t = useTranslations('faq');

  const items = t.raw('items') as Item[];

  return (
    <Section id='faq' tone='b'>
      <div className='mx-auto max-w-6xl px-6'>
        <Reveal>
          <h2 className='text-3xl font-semibold text-[var(--brand-navy)]'>
            {t('title')}
          </h2>
          <p className='mt-3 max-w-2xl text-sm text-neutral-600'>
            {t('subtitle')}
          </p>
        </Reveal>

        <div className='mt-10 space-y-3'>
          {items.map((it) => (
            <Reveal key={it.q}>
              <details className='group rounded-3xl border border-[var(--brand-mist)] bg-white/70 p-6 shadow-sm backdrop-blur'>
                <summary className='flex cursor-pointer list-none items-center justify-between gap-4'>
                  <span className='text-sm font-semibold text-neutral-900'>
                    {it.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className='text-neutral-500 transition group-open:rotate-180'
                  />
                </summary>

                <p className='mt-3 text-sm leading-relaxed text-neutral-600'>
                  {it.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
