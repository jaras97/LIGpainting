'use client';

import { useTranslations } from 'next-intl';
import {
  Home,
  Building2,
  Paintbrush,
  PaintBucket,
  Wrench,
  Sparkles,
} from 'lucide-react';
import Reveal from '../motion/reveal';
import Section from '../Section';

const ICONS = [Paintbrush, PaintBucket, Home, Building2, Wrench, Sparkles];

export default function Services() {
  const t = useTranslations('services');

  const items = t.raw('items') as string[];
  const tags = t.raw('tags') as string[];

  return (
    <Section id='services' tone='a'>
      <div className='mx-auto max-w-6xl px-6'>
        <Reveal>
          <div className='flex items-end justify-between gap-6'>
            <div>
              <h2 className='text-3xl font-semibold text-[var(--brand-navy)]'>
                {t('title')}
              </h2>
              <p className='mt-3 max-w-2xl text-sm text-neutral-600'>
                {t('subtitle')}
              </p>
            </div>
          </div>
        </Reveal>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {items.map((label, idx) => {
            const Icon = ICONS[idx % ICONS.length];

            return (
              <Reveal key={label}>
                <div className='group rounded-3xl border border-[var(--brand-mist)] bg-white/70 p-6 shadow-sm backdrop-blur transition hover:border-[var(--brand-cyan)]'>
                  <div className='flex items-center gap-3'>
                    <div className='rounded-2xl border border-[var(--brand-mist)] bg-white/60 p-2'>
                      <Icon
                        size={18}
                        className='text-[var(--brand-navy)] group-hover:text-[var(--brand-cyan)]'
                      />
                    </div>
                    <div className='text-sm font-semibold text-neutral-900'>
                      {label}
                    </div>
                  </div>

                  <p className='mt-3 text-sm leading-relaxed text-neutral-600'>
                    {t('description')}
                  </p>

                  <div
                    className='mt-6 h-px w-full'
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, var(--brand-mist), transparent)',
                    }}
                  />

                  <div className='mt-4 flex flex-wrap gap-2 text-[11px] text-neutral-600'>
                    {tags.map((tag) => (
                      <span
                        key={`${label}-${tag}`}
                        className='rounded-full border border-[var(--brand-mist)] bg-white/60 px-3 py-1'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
