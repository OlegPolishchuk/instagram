/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  webpack: (config, { isServer }) => {
    const newConfig = { ...config };

    if (!isServer) {
      newConfig.resolve.fallback = {
        fs: false,
      };
    }

    // newConfig.module = {
    //   ...config.module,
    //   exprContextCritical: false,
    // };

    return newConfig;
  },
  reactStrictMode: false,
  i18n,
};

module.exports = nextConfig;
