import path from 'path';

const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default config;
