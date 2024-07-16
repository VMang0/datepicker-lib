import path from 'path';
import { fileURLToPath } from 'url';

import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import { dts } from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRootDir = path.resolve(__dirname);

export default [
  {
    external: ['react', 'react-dom', 'styled-components'],
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      svgr({ exportType: 'named', jsxRuntime: 'classic' }),
      resolve(),
      terser(),
      external(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx'],
      }),
      alias({
        entries: [
          { find: '@components', replacement: path.resolve(projectRootDir, 'src/components') },
          { find: '@pages', replacement: path.resolve(projectRootDir, 'src/pages') },
          { find: '@assets', replacement: path.resolve(projectRootDir, 'src/assets') },
          { find: '@constants', replacement: path.resolve(projectRootDir, 'src/constants') },
          { find: '@hooks', replacement: path.resolve(projectRootDir, 'src/hooks') },
          { find: '@utils', replacement: path.resolve(projectRootDir, 'src/utils') },
          { find: '@styled', replacement: path.resolve(projectRootDir, 'src/styled') },
          { find: '@redux', replacement: path.resolve(projectRootDir, 'src/redux') },
          { find: '@routes', replacement: path.resolve(projectRootDir, 'src/routes') },
          { find: '@services', replacement: path.resolve(projectRootDir, 'src/services') },
          { find: '@api', replacement: path.resolve(projectRootDir, 'src/api') },
          { find: '@type', replacement: path.resolve(projectRootDir, 'src/type') },
        ],
      }),
    ],
  },
  {
    external: ['styled-components', 'react', 'react-dom'],
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'cjs',
      },
    ],
    plugins: [
      resolve(),
      external(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx'],
      }),
      dts(),
      alias({
        entries: [
          { find: '@components', replacement: path.resolve(projectRootDir, 'src/components') },
          { find: '@pages', replacement: path.resolve(projectRootDir, 'src/pages') },
          { find: '@assets', replacement: path.resolve(projectRootDir, 'src/assets') },
          { find: '@constants', replacement: path.resolve(projectRootDir, 'src/constants') },
          { find: '@hooks', replacement: path.resolve(projectRootDir, 'src/hooks') },
          { find: '@utils', replacement: path.resolve(projectRootDir, 'src/utils') },
          { find: '@styled', replacement: path.resolve(projectRootDir, 'src/styled') },
          { find: '@redux', replacement: path.resolve(projectRootDir, 'src/redux') },
          { find: '@routes', replacement: path.resolve(projectRootDir, 'src/routes') },
          { find: '@services', replacement: path.resolve(projectRootDir, 'src/services') },
          { find: '@api', replacement: path.resolve(projectRootDir, 'src/api') },
          { find: '@type', replacement: path.resolve(projectRootDir, 'src/type') },
        ],
      }),
    ],
  },
];
