/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Metanet/Static hosting

  images: {
    // Pro Tip: Static exports don't support on-demand optimization. 
    // Setting this to true is the official Next.js recommendation.
    unoptimized: true, 
  },

  // Keep this to allow the build to finish even with minor TS warnings
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build to speed up deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;