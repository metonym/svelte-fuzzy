import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript';

const IS_PROD = !process.env.ROLLUP_WATCH;
const OUT_DIR = 'dist';

export default {
  input: 'src/client/index.ts',
  output: {
    sourcemap: !IS_PROD,
    format: 'iife',
    name: 'app',
    file: [OUT_DIR, 'bundle.js'].join('/')
  },
  plugins: [
    copy({ targets: [{ src: 'src/client/public/*', dest: OUT_DIR }] }),
    svelte({
      dev: !IS_PROD,
      css: css => {
        css.write([OUT_DIR, 'bundle.css'].join('/'), !IS_PROD);
      }
    }),
    resolve(),
    commonjs(),
    typescript(),
    IS_PROD && terser(),
    !IS_PROD && serve({ contentBase: [OUT_DIR], port: 5000 }),
    !IS_PROD && livereload({ watch: OUT_DIR })
  ]
};
