import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';
import babel from "@rollup/plugin-babel";
import path from 'path';
import { fileURLToPath } from 'url';
import commonjs from '@rollup/plugin-commonjs';

import packageJson from "./package.json" assert { type: 'json' };


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRootDir = path.resolve(__dirname);

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: packageJson.module,
        format: 'cjs'
      },
      {
        file: packageJson.main,
        format: 'esm'
      }
    ],
    external: ['react', 'styled-components'],
    plugins: [
      commonjs(),
      terser(),
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
      resolve(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx']
      }),
      babel({
        exclude: "node_modules/**",
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        plugins: ['babel-plugin-styled-components']
      }),
      svgr({ exportType: 'named', jsxRuntime: 'classic' }),
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts()]
  }
]