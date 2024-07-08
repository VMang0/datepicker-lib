import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import alias from '@rollup/plugin-alias';
import path from 'path';

import packageJson from "./package.json" assert { type: 'json' };

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
    external: ['react'],
    plugins: [
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
      nodeResolve({
        browser: true,
        extensions: ['.js', '.ts', '.json'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx']
      }),
      postcss({
        extract: 'index.css',
        modules: true,
        use: ['sass'],
        minimize: true
      }),
      url(),
      svgr({ icon: true }),
      terser()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts()]
  }
]