import { resolve } from "path";
import { existsSync, readdirSync, lstatSync, rmdirSync, unlinkSync } from "fs";
import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";
import vue2Jsx from "@vitejs/plugin-vue2-jsx";
import dts from "vite-plugin-dts";

const env = process.env.ENV;
if (env !== "TEST") {
  emptyDir(resolve(__dirname, "dist"));
}

export default defineConfig({
  resolve: {
    // alias: [{ find: /^@\/(.+)/, replacement: resolve(__dirname, '$1') }]
    alias: {
      "@": resolve(__dirname),
      "@components": resolve(__dirname, "src/components"),
    },
  },
  build: {
    lib: {
      entry: [resolve(__dirname, "src/main.ts")],
      name: "test-vue-vite",
      formats: ["es"],
      // fileName: 'test'
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    env !== "TEST" &&
      dts({
        outputDir: ["dist"],
        // include: ['src/index.ts'],
        exclude: ["src/ignore"],
        // aliasesExclude: [/^@components/],
        staticImport: true,
        skipDiagnostics: false,
        rollupTypes: true,
        insertTypesEntry: true,
        tsConfigFilePath: resolve(__dirname, "./tsconfig.dts.json"),
      }),
    vue2(),
    vue2Jsx(),
  ],
});

function emptyDir(dir: string): void {
  if (!existsSync(dir)) {
    return;
  }

  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file);

    // baseline is Node 12 so can't use rmSync
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      rmdirSync(abs);
    } else {
      unlinkSync(abs);
    }
  }
}
