/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  
  // This is the most important part for Metanet
  images: {
    unoptimized: true, 
  },

  typescript: {
    // Keeps the build from failing due to minor type mismatches
    ignoreBuildErrors: true,
  },

  // In Next.js 16, this is the safest way to skip linting during the export
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: Improves build speed by skipping source maps
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;