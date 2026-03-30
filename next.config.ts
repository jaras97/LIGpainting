import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  // tu config de Next si tienes algo extra, aquí
};

export default withNextIntl(nextConfig);
