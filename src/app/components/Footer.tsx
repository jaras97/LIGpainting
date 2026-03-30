'use client';

import { useLocale } from 'next-intl';

export default function Footer() {
  const locale = useLocale();

  const links = [
    { href: '#services', label: locale === 'es' ? 'Servicios' : 'Services' },
    { href: '#process', label: locale === 'es' ? 'Proceso' : 'Process' },
    { href: '#work', label: locale === 'es' ? 'Trabajos' : 'Work' },
    { href: '#faq', label: locale === 'es' ? 'Preguntas' : 'FAQ' },
    { href: '#contact', label: locale === 'es' ? 'Contacto' : 'Contact' },
  ];

  return (
    <footer className='border-t border-[var(--brand-mist)] py-12'>
      <div className='mx-auto max-w-6xl px-6'>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <div className='text-sm font-semibold text-[var(--brand-navy)]'>
              LIG Painting
            </div>
            <p className='mt-3 max-w-sm text-sm text-neutral-600'>
              {locale === 'es'
                ? 'Pintura residencial y comercial con un acabado premium y un proceso confiable.'
                : 'Residential & commercial painting with a premium finish and a reliable process.'}
            </p>

            <div className='mt-5 flex flex-wrap gap-2 text-[11px] text-neutral-600'>
              {['Protect', 'Prep', 'Finish'].map((x) => (
                <span
                  key={x}
                  className='rounded-full border border-[var(--brand-mist)] bg-white/60 px-3 py-1'
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className='text-sm font-semibold text-neutral-900'>
              {locale === 'es' ? 'Navegación' : 'Navigation'}
            </div>
            <div className='mt-4 grid gap-2 text-sm text-neutral-700'>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className='hover:text-[var(--brand-navy)]'
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className='text-sm font-semibold text-neutral-900'>
              {locale === 'es' ? 'Contacto' : 'Contact'}
            </div>

            <div className='mt-4 space-y-2 text-sm text-neutral-700'>
              <div>
                <span className='text-neutral-500'>Phone:</span>{' '}
                <a
                  className='underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--brand-cyan)]'
                  href='tel:+14013594971'
                >
                  +1 (401) 359-4971
                </a>
              </div>
              <div>
                <span className='text-neutral-500'>Email:</span>{' '}
                <a
                  className='underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--brand-cyan)]'
                  href='mailto:hello@ligpainting.com'
                >
                  hello@ligpainting.com
                </a>
              </div>
              <div className='text-xs text-neutral-500'>
                {locale === 'es'
                  ? 'Área de servicio: agrega tu ciudad/condado.'
                  : 'Service area: add your city/county.'}
              </div>
            </div>

            <div className='mt-6 flex gap-3'>
              <a
                href='#contact'
                className='rounded-full bg-[var(--brand-navy)] px-4 py-2 text-sm font-medium text-white hover:opacity-90'
              >
                {locale === 'es' ? 'Cotizar' : 'Get a Quote'}
              </a>
              <a
                href='#top'
                className='rounded-full border border-[var(--brand-mist)] bg-white/60 px-4 py-2 text-sm font-medium text-[var(--brand-navy)] hover:border-[var(--brand-cyan)]'
              >
                {locale === 'es' ? 'Arriba' : 'Top'}
              </a>
            </div>
          </div>
        </div>

        <div
          className='my-10 h-px w-full'
          style={{
            background:
              'linear-gradient(90deg, transparent, var(--brand-mist), transparent)',
          }}
        />

        <div className='flex flex-col gap-2 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between'>
          <div>
            © {new Date().getFullYear()} LIG Painting. All rights reserved.
          </div>
          <div>
            {locale === 'es'
              ? 'Diseño minimal premium • Next.js + Tailwind'
              : 'Minimal premium design • Next.js + Tailwind'}
          </div>
        </div>
      </div>
    </footer>
  );
}
