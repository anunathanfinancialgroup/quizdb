// ============================================================
//  vite.config.js — Vite Configuration Template
//  Place this file in your PROJECT ROOT on GitHub.
//  Works for: React, Vue, Svelte, and vanilla Vite projects.
//  Docs: https://vitejs.dev/config/
// ============================================================

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';      // ← swap for vue() or svelte() if needed
import path from 'path';

// ── CHOOSE YOUR FRAMEWORK PLUGIN ──────────────────────────────
// React:   import react from '@vitejs/plugin-react'
// Vue:     import vue from '@vitejs/plugin-vue'
// Svelte:  import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ mode }) => {

  // Load .env files based on current mode (development / production)
  // Gives you access to env vars inside this config file.
  const env = loadEnv(mode, process.cwd(), '');

  return {

    // ── PLUGINS ────────────────────────────────────────────────
    plugins: [
      react(),    // Replace with vue() or svelte() for other frameworks
    ],

    // ── BASE PATH ──────────────────────────────────────────────
    // CRITICAL FOR VERCEL: If your app is deployed to a sub-path
    // (e.g. https://mysite.com/app), set this to '/app/'.
    // For root deployment (most common), keep it as '/'.
    // This controls the base URL for all assets and routing.
    base: '/',
    // base: '/my-sub-path/',   // ← use this for GitHub Pages project sites

    // ── BUILD OUTPUT ───────────────────────────────────────────
    build: {
      // Output directory — must match "outputDirectory" in vercel.json
      outDir: 'dist',

      // Clear the output directory before each build
      emptyOutDir: true,

      // Generate source maps for production debugging
      // 'hidden': maps exist but aren't linked in browser devtools
      // true: maps linked (exposes your source code)
      // false: no maps (smaller bundle, less debuggable)
      sourcemap: false,

      // Chunk size warning threshold in KB
      chunkSizeWarningLimit: 1000,

      // Advanced Rollup options (bundler under the hood)
      rollupOptions: {
        output: {
          // Manual chunking: split large libraries into separate files
          // This improves caching — users re-download only changed chunks.
          manualChunks: {
            // 'vendor': ['react', 'react-dom'],
            // 'router': ['react-router-dom'],
            // 'ui':     ['@mui/material'],
          },
        },
      },
    },

    // ── DEV SERVER ─────────────────────────────────────────────
    server: {
      port: 3000,
      open: true,   // auto-open browser on `vite dev`

      // ── PROXY ─────────────────────────────────────────────
      // In development, proxy /api calls to your backend
      // so you don't hit CORS errors locally.
      proxy: {
        // '/api': {
        //   target: 'http://localhost:8000',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, ''),
        // },
      },
    },

    // ── PREVIEW SERVER ─────────────────────────────────────────
    // Used by `vite preview` to locally test the production build.
    preview: {
      port: 4173,
    },

    // ── PATH ALIASES ───────────────────────────────────────────
    // Define shortcuts so you can write:
    //   import Button from '@/components/Button'
    // instead of:
    //   import Button from '../../components/Button'
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // '@components': path.resolve(__dirname, './src/components'),
        // '@hooks':      path.resolve(__dirname, './src/hooks'),
        // '@utils':      path.resolve(__dirname, './src/utils'),
        // '@assets':     path.resolve(__dirname, './src/assets'),
      },
    },

    // ── ENVIRONMENT VARIABLES ──────────────────────────────────
    // Vite only exposes env vars prefixed with VITE_ to the client.
    // Access them in your code as: import.meta.env.VITE_API_URL
    // You can define compile-time replacements here too:
    define: {
      // '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    },

    // ── CSS OPTIONS ────────────────────────────────────────────
    css: {
      // If using CSS Modules, configure naming convention
      modules: {
        // localsConvention: 'camelCase',
      },
      // If using SCSS/LESS, inject global variables
      // preprocessorOptions: {
      //   scss: {
      //     additionalData: `@import "@/styles/variables.scss";`,
      //   },
      // },
    },

    // ── OPTIMIZATIONS ──────────────────────────────────────────
    optimizeDeps: {
      // Pre-bundle these packages for faster dev startup
      // include: ['react', 'react-dom', 'react-router-dom'],

      // Exclude packages that shouldn't be pre-bundled (e.g. ESM-only)
      // exclude: ['some-esm-package'],
    },

    // ── TEST (Vitest) ──────────────────────────────────────────
    // If you use Vitest instead of Jest, configure it here.
    // test: {
    //   globals: true,
    //   environment: 'jsdom',
    //   setupFiles: './src/setupTests.js',
    // },

  };
});
