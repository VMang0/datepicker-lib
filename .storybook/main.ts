import type { StorybookConfig } from '@storybook/react-webpack5';

import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@theme': path.resolve(__dirname, '../src/theme'),
      '@redux': path.resolve(__dirname, '../src/redux'),
      '@routes': path.resolve(__dirname, '../src/routes'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@api': path.resolve(__dirname, '../src/api'),
      '@type': path.resolve(__dirname, '../src/type'),
    };
    config.resolve.modules = [...(config.resolve.modules || []), "./src"];
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        type: "javascript/auto",
        use: [{loader: '@svgr/webpack', options: {icon: true}}, 'url-loader'],
      },
    ];
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};

export default config;
