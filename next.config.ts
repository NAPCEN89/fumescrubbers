/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // We'll fix images manually below
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;