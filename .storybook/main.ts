const path = require('path');

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    'storybook-react-i18next',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, "../src"), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/shared/ui": path.resolve(__dirname, "../src/shared/ui"),
      "@/shared/constants": path.resolve(__dirname, "../src/shared/constants"),
      "@/pages/*": path.resolve(__dirname, "../src/pages"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/store/api": path.resolve(__dirname, "../src/store/api"),
    };

    config.resolve = {
      ...config.resolve,
      fallback: {
        ...(config.resolve || {}).fallback,
        fs: false,
        stream: false,
        os: false,
      },
    }

    return config;
  }
};
export default config;
