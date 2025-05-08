import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/oripa/", // Set the base path
  plugins: [react()],
});
