export default {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@redux': './src/redux',
          '@routes': './src/routes',
          '@services': './src/services',
          '@hocs': './src/hocs',
          '@type': './src/type',
        },
      },
    ],
  ],
};
