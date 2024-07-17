module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:storybook/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'simple-import-sort',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@assets', './src/assets'],
          ['@pages', './src/pages'],
          ['@constants', './src/constants'],
          ['@hooks', './src/hooks'],
          ['@utils', './src/utils'],
          ['@theme', './src/theme'],
          ['@redux', './src/redux'],
          ['@routes', './src/routes'],
          ['@services', './src/services'],
          ['@api', './src/api'],
          ['@type', './src/type'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin', 'external', 'internal',
          ['parent', 'sibling', 'index']
        ],
        'alphabetize': { "order": 'asc', 'caseInsensitive': true },
        'newlines-between': 'always',
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'lines-between-class-members': 'off',
    'no-unsafe-optional-chaining': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        'ts': 'never',
        'tsx': 'never',
        'js': 'never',
        'jsx': 'never',
        'json': 'always',
        'cjs': 'never',
      },
    ],
  },
};
