import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import summary from "rollup-plugin-summary"

export default defineConfig({
  input: "./src/nunjucks-template-parser.ts",
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
    terser({
      ecma: 2017,
      module: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
  output: {
    dir: "dist",
    sourcemap: true,
    entryFileNames: "[name].js",
  },
})
