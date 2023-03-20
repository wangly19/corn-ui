import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import * as path from "path";
import copy from "rollup-plugin-copy";

const externals = [
  "react",
  "react-dom",
  "@tarojs/components",
  "@tarojs/runtime",
  "@tarojs/taro",
  "@tarojs/react",
];

// @ts-ignore
const aliasUrl = import.meta.url;

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
    copy({
      targets: [{ src: "src/styles/*", dest: "dist/styles" }],
      hook: "writeBundle",
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", aliasUrl)) },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.tsx"),
      name: "CornUI",
      formats: ["es", "umd"],
      fileName: (format, entry) => `${entry}.${format}.js`,
    },
    rollupOptions: {
      external: externals,
    },
  },
});
