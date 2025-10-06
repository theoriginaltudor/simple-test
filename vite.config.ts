import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export const pluginList = [react()];

// https://vite.dev/config/
export default defineConfig({
  plugins: [...pluginList],
});
