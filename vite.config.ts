import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export const pluginList = [react(), tailwindcss()];

// https://vite.dev/config/
export default defineConfig({
  plugins: [...pluginList],
});
