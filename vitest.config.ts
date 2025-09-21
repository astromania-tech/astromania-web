/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  test: {
    // Test environment
    environment: "jsdom",

    // Global test configuration
    globals: true,

    // Setup files
    setupFiles: ["./src/test/setup.ts"],

    // Coverage configuration
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/test/",
        "**/*.d.ts",
        "build/",
        "dist/",
        "**/*.config.*",
        "public/",
        "src/index.tsx",
        "src/reportWebVitals.ts",
      ],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    },

    // Test include/exclude patterns
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],

    // Test timeout
    testTimeout: 10000,

    // Mock configuration
    server: {
      deps: {
        inline: ["@testing-library/user-event"],
      },
    },

    // Watch configuration
    watch: true,

    // Reporter configuration - use reporters instead of reporter
    reporters: ["verbose"],
  },

  // Path resolution (same as main vite config)
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@theme": resolve(__dirname, "src/theme"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
});
