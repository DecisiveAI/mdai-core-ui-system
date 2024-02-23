import { defineConfig } from "vite";
import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const demoConfig = {
  plugins: [svelte()],
  base: "./",
  build: {
    outDir: "demo",
  },
};

const libConfig = {
  plugins: [svelte()],
  build: {
    // TODO: Figure out why SVGs for the demo site are copied over
    lib: {
      entry: [
        resolve(__dirname, "./index.ts"),
        resolve(__dirname, "./styles/mdai-base.css"),
        resolve(__dirname, "./styles/mdai-theme-console.css"),
        resolve(__dirname, "./styles/mdai-theme-website.css"),
      ],
      name: "MyDecisiveCoreUI",
      fileName: "mdai-core-ui",
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react"],
      output: {
        preserveModules: false,
        globals: {
          react: "React",
        },
      },
    },
  },
};

export default defineConfig(({ mode }) => {
  if (mode === "demo") {
    return demoConfig;
  }
  return libConfig;
});
