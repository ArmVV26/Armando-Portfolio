import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import process from "process";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    "process.env.VITE_APP_NAME": JSON.stringify(process.env.VITE_APP_NAME),
  },
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    manifest: true,
  },
});
