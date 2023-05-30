/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const i18n = require('./next-i18next.config.ts');

const nextConfig = {
  webpack: (config, { isServer }) => {
    const newConfig = { ...config };

    if (!isServer) {
      newConfig.resolve.fallback = {
        fs: false,
      };
    }

    return newConfig;
  },
  reactStrictMode: false,
  i18n,

  images: {
    domains: ['via.placeholder.com'],
  },
};

module.exports = nextConfig;
