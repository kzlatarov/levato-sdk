import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const baseConfig = createBasicConfig();

export default merge(baseConfig, [
  {
    input: './src/index.ts',
    output: {
      dir: './dist',
      format: 'commonjs'
    },
    plugins: [
      nodeResolve(),
      json(),
      commonjs(),
      typescript({ declaration: false })
    ]
  }
  // {
  //   input: './src/sdk/LevatoSdk.ts',
  //   output: {
  //     dir: './dist/sdk',
  //     format: 'commonjs'
  //   },
  //   plugins: [
  //     nodeResolve(),
  //     json(),
  //     commonjs(),
  //     typescript({ declaration: false, outDir: './dist/sdk' })
  //   ]
  // },
  // {
  //   input: './src/.graphclient/index.ts',
  //   output: {
  //     dir: './dist/.graphclient',
  //     format: 'commonjs'
  //   },
  //   plugins: [
  //     nodeResolve(),
  //     json(),
  //     commonjs(),
  //     typescript({ declaration: false, outDir: './dist/.graphclient' })
  //   ]
  // }
]);
