import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // Creates an alias for the src folder
    },
  },
  plugins: [react()],
});
