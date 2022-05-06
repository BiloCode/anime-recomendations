import react from "@vitejs/plugin-react";

import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./src/app"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@config": resolve(__dirname, "./src/config"),
      "@router": resolve(__dirname, "./src/router"),
      "@context": resolve(__dirname, "./src/context"),
      "@components": resolve(__dirname, "./src/components"),
    },
  },
});
