import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

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
