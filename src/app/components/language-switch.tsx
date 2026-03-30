'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

function stripLocale(pathname: string) {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

function toOtherLocalePath(pathname: string, other: 'en' | 'es') {
  const cleaned = stripLocale(pathname);
  return `/${other}${cleaned === '/' ? '' : cleaned}`;
}

export default function LanguageSwitch() {
  const locale = useLocale() as 'en' | 'es';
  const pathname = usePathname();
  const other = locale === 'en' ? 'es' : 'en';

  return (
    <Link
      href={toOtherLocalePath(pathname, other)}
      className='rounded-full border border-[var(--brand-mist)] px-3 py-1 text-xs text-neutral-700 hover:border-[var(--brand-cyan)]'
    >
      {other.toUpperCase()}
    </Link>
  );
}
