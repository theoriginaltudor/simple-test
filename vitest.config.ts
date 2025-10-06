import { defineConfig } from "vitest/config";
import { pluginList } from "./vite.config";

export default defineConfig({
  plugins: [...pluginList],
  test: {
    // This means we don't have to import `describe`,
    // `it`, and `expect` into every test file
    globals: true,
  },
});
