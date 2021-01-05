import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import svelteReadme from "svelte-readme";
import pkg from "./package.json";

export default () => {
  if (!process.env.BUNDLE) {
    return svelteReadme({
      style: `
        .code-fence input {
          padding: 5px 12px;
          font-size: 14px;
          line-height: 20px;
          color: #24292e;
          vertical-align: middle;
          background-color: #fff;
          background-repeat: no-repeat;
          background-position: right 8px center;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          outline: none;
          box-shadow: inset 0 1px 0 rgba(225,228,232,0.2);
        }

        .code-fence input:focus {
          border-color: #0366d6;
          outline: none;
          box-shadow: 0 0 0 3px rgba(3,102,214,0.3);
        }

        .code-fence button {
          margin-top: 8px;
          margin-bottom: 16px;
        }
      `,
      plugins: [commonjs()],
    });
  }

  return ["es", "umd"].map((format) => {
    const UMD = format === "umd";

    return {
      input: pkg.svelte,
      output: {
        format,
        file: UMD ? pkg.main : pkg.module,
        name: UMD ? pkg.name : undefined,
      },
      plugins: [svelte(), resolve(), commonjs()],
    };
  });
};
