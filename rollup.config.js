import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './out-ts/index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  }
});
