// ============================================================
//  next.config.js — Next.js Configuration Template
//  Place this file in your PROJECT ROOT on GitHub.
//  Docs: https://nextjs.org/docs/app/api-reference/next-config-js
// ============================================================

/** @type {import('next').NextConfig} */
const nextConfig = {

  // ── REACT STRICT MODE ─────────────────────────────────────────
  // Highlights potential problems in development.
  // Does NOT affect production. Keep this true.
  reactStrictMode: true,

  // ── BASE PATH ─────────────────────────────────────────────────
  // Only set this if your app is NOT served from the domain root.
  // e.g. https://mysite.com/app  →  basePath: '/app'
  // If you set this, ALL internal links and fetch('/api/...') calls
  // must include the basePath prefix — this is a common 404 cause!
  // basePath: '/app',

  // ── ASSET PREFIX ─────────────────────────────────────────────
  // Use if your static assets are served from a CDN or different domain.
  // Usually left blank when deploying to Vercel.
  // assetPrefix: 'https://cdn.mysite.com',

  // ── TRAILING SLASH ────────────────────────────────────────────
  // false (default): /about   → canonical URL
  // true:            /about/  → canonical URL
  // Vercel handles redirects automatically based on this setting.
  trailingSlash: false,

  // ── OUTPUT MODE ───────────────────────────────────────────────
  // "standalone" → bundles only what's needed (great for Docker)
  // "export"     → full static HTML export (no server-side features)
  // Omit this line for standard Vercel deployment (recommended).
  // output: 'standalone',
  // output: 'export',   // ← use this for a pure static site

  // ── ENVIRONMENT VARIABLES ─────────────────────────────────────
  // Expose build-time env vars to the browser.
  // IMPORTANT: prefix with NEXT_PUBLIC_ for client-side access.
  // Secrets that are server-only → set in Vercel Dashboard only,
  // never expose them with NEXT_PUBLIC_.
  env: {
    // NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  },

  // ── IMAGE OPTIMIZATION ────────────────────────────────────────
  // Configure allowed external image domains for next/image.
  // Add any hostname you load images from (e.g. S3, Cloudinary, CMS).
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   pathname: '/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'res.cloudinary.com',
      // },
    ],
    // Disable image optimization for fully static exports
    // unoptimized: true,
  },

  // ── REDIRECTS ─────────────────────────────────────────────────
  // Server-side redirects. Runs before routing.
  // Use permanent: true for 308, false for 307.
  async redirects() {
    return [
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
      // Wildcard example: redirect entire old section
      // {
      //   source: '/blog/:slug',
      //   destination: '/posts/:slug',
      //   permanent: true,
      // },
    ];
  },

  // ── REWRITES ──────────────────────────────────────────────────
  // Proxy requests without changing the URL visible to the user.
  // Great for hiding your backend URL or avoiding CORS.
  async rewrites() {
    return [
      // Proxy /api/external/* → your real backend
      // {
      //   source: '/api/external/:path*',
      //   destination: 'https://api.mybackend.com/:path*',
      // },
    ];
  },

  // ── HEADERS ───────────────────────────────────────────────────
  // Add custom HTTP response headers.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options',        value: 'DENY' },
          { key: 'X-XSS-Protection',       value: '1; mode=block' },
        ],
      },
    ];
  },

  // ── WEBPACK CUSTOMIZATION ─────────────────────────────────────
  // Extend or modify the Webpack config.
  // Only needed for custom loaders, aliases, or polyfills.
  // webpack(config, { isServer }) {
  //   // Example: add a path alias
  //   config.resolve.alias['@components'] = path.join(__dirname, 'components');
  //   return config;
  // },

  // ── EXPERIMENTAL (App Router features) ───────────────────────
  // Uncomment features you're actively using.
  experimental: {
    // serverActions: true,           // Server Actions (stable in Next 14+)
    // typedRoutes: true,             // Type-safe Link hrefs
    // instrumentationHook: true,     // Observability hook
  },

  // ── TYPESCRIPT / ESLINT ───────────────────────────────────────
  // During builds, these normally fail on errors.
  // Set ignoreBuildErrors / ignoreDuringBuilds only temporarily
  // while fixing issues — never commit these as true long-term.
  typescript: {
    ignoreBuildErrors: false, // ← set true only as a temporary escape hatch
  },
  eslint: {
    ignoreDuringBuilds: false, // ← same — fix your lint errors instead
  },

  // ── LOGGING ───────────────────────────────────────────────────
  // Control server-side fetch logging in development.
  logging: {
    fetches: {
      fullUrl: true, // shows full URLs in terminal during dev
    },
  },
};

module.exports = nextConfig;
