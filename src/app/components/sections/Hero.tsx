'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  const chips = t.raw('chips') as string[];
  const features = t.raw('features') as { t: string; d: string }[];
  const stats = t.raw('stats') as { k: string; v: string }[];

  return (
    <section id='top' className='relative overflow-hidden'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(900px 520px at 12% 10%, color-mix(in oklab, var(--brand-cyan) 18%, transparent), transparent 60%),' +
            'radial-gradient(900px 520px at 88% 18%, color-mix(in oklab, var(--brand-navy) 14%, transparent), transparent 60%),' +
            'linear-gradient(180deg, #ffffff, #fbfbfc)',
        }}
      />

      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 opacity-[0.06]'
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--brand-navy) 1px, transparent 1px), linear-gradient(to bottom, var(--brand-navy) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className='relative mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-20'>
        <div className='grid items-center gap-10 md:grid-cols-2'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className='inline-flex items-center gap-2 rounded-full border border-[var(--brand-mist)] bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur'
            >
              <span className='h-2 w-2 rounded-full bg-[var(--brand-cyan)]' />
              {t('badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className='mt-6 text-4xl font-semibold tracking-tight text-[var(--brand-navy)] md:text-6xl'
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className='mt-4 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg'
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className='mt-8 flex flex-wrap gap-3'
            >
              <a
                href='#contact'
                className='rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90'
              >
                {t('primary')}
              </a>

              <a
                href='tel:+14013594971'
                className='rounded-full border border-[var(--brand-mist)] bg-white/60 px-5 py-3 text-sm font-medium text-[var(--brand-navy)] backdrop-blur hover:border-[var(--brand-cyan)]'
              >
                {t('secondary')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className='mt-8 flex flex-wrap gap-2 text-xs text-neutral-600'
            >
              {chips.map((chip) => (
                <span
                  key={chip}
                  className='rounded-full border border-[var(--brand-mist)] bg-white/60 px-3 py-1 backdrop-blur'
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className='relative'
          >
            <div className='rounded-3xl border border-[var(--brand-mist)] bg-white/70 p-6 shadow-sm backdrop-blur'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <div className='text-sm font-semibold text-[var(--brand-navy)]'>
                    {t('panel.title')}
                  </div>
                  <div className='mt-1 text-xs text-neutral-600'>
                    {t('panel.subtitle')}
                  </div>
                </div>

                <div className='rounded-2xl border border-[var(--brand-mist)] bg-white/70 px-3 py-2 text-xs text-neutral-700'>
                  <span className='font-semibold text-[var(--brand-navy)]'>
                    {t('panel.replyTime')}
                  </span>{' '}
                  {t('panel.replyLabel')}
                </div>
              </div>

              <div
                className='my-5 h-px w-full'
                style={{
                  background:
                    'linear-gradient(90deg, transparent, var(--brand-mist), transparent)',
                }}
              />

              <div className='grid gap-3'>
                {features.map((item) => (
                  <div key={item.t} className='flex gap-3'>
                    <div className='mt-0.5 rounded-full border border-[var(--brand-mist)] bg-white/70 p-1'>
                      <Check size={14} className='text-[var(--brand-cyan)]' />
                    </div>
                    <div>
                      <div className='text-sm font-medium text-neutral-900'>
                        {item.t}
                      </div>
                      <div className='text-xs leading-relaxed text-neutral-600'>
                        {item.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-6 grid grid-cols-3 gap-3'>
                {stats.map((s) => (
                  <div
                    key={s.k}
                    className='rounded-2xl border border-[var(--brand-mist)] bg-white/60 p-3 text-center'
                  >
                    <div className='text-sm font-semibold text-[var(--brand-navy)]'>
                      {s.k}
                    </div>
                    <div className='mt-1 text-[11px] text-neutral-600'>
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-4 text-[11px] text-neutral-500'>
                {t('panel.note')}
              </div>
            </div>

            <div
              aria-hidden
              className='pointer-events-none absolute -inset-6 -z-10 rounded-[32px]'
              style={{
                background:
                  'radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--brand-cyan) 22%, transparent), transparent 60%)',
              }}
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
