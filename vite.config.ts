import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Adip_Ranjan_Das-Porfolio/",
  resolve: { alias: { "@": path.resolve(import.meta.dirname, ".") } },
  server: { hmr: process.env.DISABLE_HMR !== "true" },
});
