import { defineConfig } from "tsup-preset-solid";

export default defineConfig(
  {
    entry: "src/index.ts",
    devEntry: true,
  },
  {
    dropConsole: true,
    cjs: true,
  }
);
