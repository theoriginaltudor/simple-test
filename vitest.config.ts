import { defineConfig } from "vitest/config";
import { pluginList } from "./vite.config";

export default defineConfig({
  plugins: [...pluginList],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/vitest-setup.ts",
    include: [
      "src/components/**/*.{test,spec}.{tsx,ts}",
      "src/*.{test,spec}.{tsx,ts}",
    ],
  },
});
