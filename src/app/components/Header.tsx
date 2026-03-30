'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitch from './language-switch';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className='sticky top-0 z-50 bg-white/75 backdrop-blur'>
      <div
        className='h-px w-full'
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--brand-mist), transparent)',
        }}
      />
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-3'>
        <a href='#top' className='flex items-center gap-3'>
          <Image
            src='/logo.svg'
            alt='LIG Painting'
            width={42}
            height={42}
            className='rounded-md'
            priority
          />
          <span className='text-sm font-semibold tracking-tight text-[var(--brand-navy)]'>
            LIG Painting
          </span>
        </a>

        <nav className='hidden items-center gap-6 text-sm text-neutral-700 md:flex'>
          <a href='#services' className='hover:text-[var(--brand-navy)]'>
            {t('services')}
          </a>
          <a href='#process' className='hover:text-[var(--brand-navy)]'>
            {t('process')}
          </a>
          <a href='#work' className='hover:text-[var(--brand-navy)]'>
            {t('work')}
          </a>
          <a href='#faq' className='hover:text-[var(--brand-navy)]'>
            {t('faq')}
          </a>
          <a href='#contact' className='hover:text-[var(--brand-navy)]'>
            {t('contact')}
          </a>
        </nav>

        <div className='flex items-center gap-3'>
          <LanguageSwitch />
          <a
            href='#contact'
            className='rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-medium text-white hover:opacity-90'
          >
            {t('quote')}
          </a>
        </div>
      </div>
    </header>
  );
}
