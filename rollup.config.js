import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import typescript from 'rollup-plugin-typescript';

export default ['es', 'umd'].map(format => {
  const UMD = format === 'umd';

  const output = {
    format,
    globals: { 'fuse.js': 'Fuse', 'format-fuse.js': 'format' },
    file: UMD ? pkg.main : pkg.module
  };

  if (UMD) {
    output.name = 'svelte-fuzzy';
  }

  return {
    input: pkg.svelte,
    output,
    external: Object.keys(pkg.dependencies),
    plugins: [svelte(), resolve(), commonjs(), typescript(), UMD && terser()]
  };
});
