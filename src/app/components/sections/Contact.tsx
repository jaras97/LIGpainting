'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';
import Reveal from '../motion/reveal';
import Section from '../Section';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <Section id='contact' tone='a'>
      <div className='mx-auto max-w-6xl px-6'>
        <Reveal>
          <h2 className='text-3xl font-semibold text-[var(--brand-navy)]'>
            {t('title')}
          </h2>
          <p className='mt-3 max-w-2xl text-sm text-neutral-600'>
            {t('subtitle')}
          </p>
        </Reveal>

        <div className='mt-10 grid gap-6 md:grid-cols-2'>
          <Reveal>
            <form
              className='rounded-3xl border border-[var(--brand-mist)] bg-white/70 p-6 shadow-sm backdrop-blur'
              onSubmit={(e) => {
                e.preventDefault();
                alert(t('formAlert'));
              }}
            >
              <div className='grid gap-4'>
                <input
                  placeholder={t('name')}
                  className='rounded-2xl border border-[var(--brand-mist)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[var(--brand-cyan)]'
                />
                <input
                  placeholder={t('email')}
                  className='rounded-2xl border border-[var(--brand-mist)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[var(--brand-cyan)]'
                />
                <input
                  placeholder={t('phone')}
                  className='rounded-2xl border border-[var(--brand-mist)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[var(--brand-cyan)]'
                />
                <textarea
                  placeholder={t('message')}
                  className='min-h-[130px] rounded-2xl border border-[var(--brand-mist)] bg-white/70 px-4 py-3 text-sm outline-none focus:border-[var(--brand-cyan)]'
                />

                <button className='rounded-full bg-[var(--brand-navy)] px-5 py-3 text-sm font-medium text-white hover:opacity-90'>
                  {t('send')}
                </button>

                <p className='text-[11px] text-neutral-500'>{t('consent')}</p>
              </div>
            </form>
          </Reveal>

          <Reveal>
            <div className='rounded-3xl border border-[var(--brand-mist)] bg-white/70 p-6 shadow-sm backdrop-blur'>
              <div className='text-sm font-semibold text-neutral-900'>
                {t('detailsTitle')}
              </div>

              <div className='mt-4 space-y-3 text-sm text-neutral-700'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-2xl border border-[var(--brand-mist)] bg-white/70 p-2'>
                    <Phone size={16} className='text-[var(--brand-navy)]' />
                  </div>
                  <a
                    className='underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--brand-cyan)]'
                    href='tel:+14013594971'
                  >
                    +1 (401) 359-4971
                  </a>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-2xl border border-[var(--brand-mist)] bg-white/70 p-2'>
                    <Mail size={16} className='text-[var(--brand-navy)]' />
                  </div>
                  <a
                    className='underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--brand-cyan)]'
                    href='mailto:hello@ligpainting.com'
                  >
                    hello@ligpainting.com
                  </a>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='rounded-2xl border border-[var(--brand-mist)] bg-white/70 p-2'>
                    <MapPin size={16} className='text-[var(--brand-navy)]' />
                  </div>
                  <div>{t('serviceArea')}</div>
                </div>
              </div>

              <div
                className='my-6 h-px w-full'
                style={{
                  background:
                    'linear-gradient(90deg, transparent, var(--brand-mist), transparent)',
                }}
              />

              <div className='flex flex-wrap gap-3'>
                <a
                  href='tel:+14013594971'
                  className='rounded-full border border-[var(--brand-mist)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--brand-navy)] hover:border-[var(--brand-cyan)]'
                >
                  {t('call')}
                </a>
                <a
                  href='#top'
                  className='rounded-full bg-[var(--brand-cyan)] px-4 py-2 text-sm font-medium text-white hover:opacity-90'
                >
                  {t('backToTop')}
                </a>
              </div>

              <p className='mt-4 text-[11px] text-neutral-500'>{t('tip')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
