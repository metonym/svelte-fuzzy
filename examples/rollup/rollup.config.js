import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';

const IS_PROD = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: !IS_PROD,
    format: 'iife',
    name: 'app',
    file: 'build/bundle.js'
  },
  plugins: [
    /**
     * Copies public folder into `build/`
     */
    copy({ targets: [{ src: 'public/*', dest: 'build' }] }),

    svelte({
      dev: !IS_PROD,
      css: css => {
        /**
         * Emits CSS to file
         * Disables CSS sourcemaps in production
         */
        css.write('build/bundle.css', !IS_PROD);
      }
    }),

    resolve(),
    commonjs(),

    /**
     * Livereloads app in development mode
     */
    !IS_PROD &&
      serve({
        contentBase: ['build'],
        port: 3000
      }),
    !IS_PROD && livereload({ watch: 'build' }),

    /**
     * Minifies JavaScript bundle in production
     */
    IS_PROD && terser()

    /**
     * See `postbuild.js` for PostHTML plugins executed after building for production
     */
  ]
};
