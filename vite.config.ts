import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),

    // Bundle analyzer (only in analyze mode)
    ...(process.env.ANALYZE
      ? [
          visualizer({
            filename: "build/stats.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
            template: "treemap",
          }) as any,
        ]
      : []),
  ],

  // Development server configuration
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: true,
    },
  },

  // Build configuration
  build: {
    outDir: "build",
    sourcemap: false,
    minify: "esbuild",
    target: "es2015",
    cssMinify: true,

    // Rollup options
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal caching
        manualChunks: {
          // Core React libraries
          vendor: ["react", "react-dom"],

          // Router
          router: ["react-router-dom"],

          // Material UI (large library)
          mui: [
            "@mui/material",
            "@mui/system",
            "@emotion/react",
            "@emotion/styled",
          ],

          // MUI Icons
          "mui-icons": ["@mui/icons-material"],

          // MUI Lab
          "mui-lab": ["@mui/lab"],

          // Animation library
          motion: ["framer-motion"],

          // Fonts
          fonts: ["@fontsource/open-sauce-one", "@fontsource/open-sauce-sans"],
        },

        // Asset naming
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") || [];
          const extType = info[info.length - 1];

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || "")) {
            return `assets/images/[name].[hash][extname]`;
          }

          if (/woff2?|eot|ttf|otf/i.test(extType || "")) {
            return `assets/fonts/[name].[hash][extname]`;
          }

          return `assets/[name].[hash][extname]`;
        },

        chunkFileNames: "assets/js/[name].[hash].js",
        entryFileNames: "assets/js/[name].[hash].js",
      },
    },

    // Build performance
    reportCompressedSize: false,
    chunkSizeWarningLimit: 600,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@mui/material",
      "@mui/icons-material",
      "@emotion/react",
      "@emotion/styled",
      "framer-motion",
    ],
    exclude: ["@testing-library/react"],
  },

  // CSS configuration
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: "camelCase",
    },
  },

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },

  // Environment variables
  envPrefix: "VITE_",

  // Preview server (for production builds)
  preview: {
    port: 3001,
    open: true,
  },

  // Path resolution
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

  // Esbuild configuration
  esbuild: {
    // Remove console.log in production
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
  },

  // Worker configuration
  worker: {
    format: "es",
  },
});
