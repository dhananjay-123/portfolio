import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"
export default defineConfig({
 plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  base: "/", // OK for Vercel / Netlify / custom domain

  build: {
    target: "es2018",

    cssCodeSplit: true,
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          framer: ["framer-motion"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },

  esbuild: {
    drop: ["console", "debugger"], // removes blocking console calls
  },
});
