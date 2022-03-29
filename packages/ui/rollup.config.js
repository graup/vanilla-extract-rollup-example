import json from '@rollup/plugin-json';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import path from 'path';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import depsExternal from 'rollup-plugin-node-externals';
import ts from 'typescript';

const loadCompilerOptions = tsconfig => {
  if (!tsconfig) return {};
  const configFile = ts.readConfigFile(tsconfig, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(configFile.config, ts.sys, './');
  return options;
};

const compilerOptions = loadCompilerOptions('tsconfig.json');

const plugins = [vanillaExtractPlugin(), depsExternal(), esbuild(), json()];

export default [
  {
    input: 'src/index.ts',
    plugins,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames({ name }) {
          return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        },
        assetFileNames({ name }) {
          // Apply preserveModulesRoot to asset names
          return name.replace(/^src\//, '');
        },
        exports: 'named',
      },
    ],
  },
  // Declaration files
  {
    input: 'src/index.ts',
    plugins: [
      ...plugins,
      dts({
        compilerOptions: {
          ...compilerOptions,
          baseUrl: path.resolve(compilerOptions.baseUrl || '.'),
          declaration: true,
          noEmit: false,
          emitDeclarationOnly: true,
          noEmitOnError: true,
          target: ts.ScriptTarget.ESNext,
        },
      }),
    ],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  },
];
