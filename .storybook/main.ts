const path = require('path');

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, "../src"), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/shared/ui": path.resolve(__dirname, "../src/shared/ui"),
      "@/components": path.resolve(__dirname, "../src/components"),
    };

    return config;
  }
};
export default config;
