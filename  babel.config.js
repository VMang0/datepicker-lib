export default {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@styled': './src/styled',
          '@redux': './src/redux',
          '@routes': './src/routes',
          '@services': './src/services',
          '@api': './src/api',
          '@type': './src/type',
        },
      },
    ],
  ],
};
