/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Forces Next.js to create the 'out' folder
  images: {
    unoptimized: true,   // Required for static FTP hosting
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevents small linting errors from stopping the build
  },
  typescript: {
    ignoreBuildErrors: true,  // Prevents type errors from stopping the build
  },
};

export default nextConfig;