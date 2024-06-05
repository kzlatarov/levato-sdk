import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
import typescript from '@rollup/plugin-typescript';
const baseConfig = createBasicConfig();

export default merge(baseConfig, [
  {
    input: './src/index.ts',
    output: {
      dir: './dist',
      format: 'esm'
    },
    plugins: [typescript()]
  },
  {
    input: './src/sdk/LevatoSdk.ts',
    output: {
      dir: './dist/sdk',
      format: 'esm'
    },
    plugins: [typescript({ declaration: false, outDir: './dist/sdk' })]
  },
  {
    input: './src/.graphclient/index.ts',
    output: {
      dir: './dist/.graphclient',
      format: 'esm'
    },
    plugins: [typescript({ declaration: false, outDir: './dist/.graphclient' })]
  }
]);
