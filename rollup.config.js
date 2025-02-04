import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
    exports: 'auto',
  },
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    terser(),
  ],
  external: (id) => id.includes('node_modules'),
};
