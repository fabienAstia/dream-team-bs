import terser from "@rollup/plugin-terser";

export default [
  {
    input: "./src/js/main.js",
    output: {
      file: "dist/dream-team-bs.umd.js",
      format: "umd",
      name: "dream-team-bs",
      esModule: false,
      sourcemap: false,
      globals: {
        "@popperjs/core": "Popper",
      },
    },
    external: ["@popperjs/core"]
  },
  {
    input: "./dist/dream-team-bs.umd.js",
    output: {
      file: "dist/dream-team-bs.umd.min.js",
      format: "umd",
      name: "dream-team-bs",
      esModule: false,
      sourcemap: true,
      globals: {
        "@popperjs/core": "Popper",
      },
    },
    external: ["@popperjs/core"],
    plugins: [terser({ compress: { drop_console: true, module: true } })],
  },
];
