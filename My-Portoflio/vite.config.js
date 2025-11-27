import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));
const rootNodeModules = resolve(root, "node_modules");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // force all imports of react/react-dom to use the project's node_modules copy
    alias: {
      react: resolve(rootNodeModules, "react"),
      "react-dom": resolve(rootNodeModules, "react-dom"),
      // your existing aliases
      "#components": resolve(root, "src/components"),
      "#constants": resolve(root, "src/constants"),
      "#store": resolve(root, "src/store"),
      "#hoc": resolve(root, "src/hoc"),
      "#windows": resolve(root, "src/windows"),
    },
    // help Vite avoid bundling duplicate React copies
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    // make sure Vite pre-bundles these to the same copy
    include: ["react", "react-dom"],
  },
});
