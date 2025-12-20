/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Keep this for static build
  // Remove images.unoptimized — we don't need it anymore

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Add these for the optimizer
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',  // We'll create this next
  },
};

module.exports = nextConfig;