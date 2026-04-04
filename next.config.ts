import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Compression (automatic in Next.js 16)
  compress: true,

  // Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react', '@hugeicons/react'],
  },

  // Turbopack configuration for Next.js 16
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

export default nextConfig
