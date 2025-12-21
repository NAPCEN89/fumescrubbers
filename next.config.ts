/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true,
  
  images: {
    // When using 'export', unoptimized MUST be true.
    // The other settings (formats, sizes) only apply if you are NOT using 'unoptimized',
    // but keeping them here won't crash the build as long as they are at this level.
    unoptimized: true, 
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  typescript: {
    // Corrected to ignoreBuildErrors
    ignoreBuildErrors: true,
  },

  eslint: {
    // Corrected to ignoreDuringBuilds
    ignoreDuringBuilds: true,
  },

  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;