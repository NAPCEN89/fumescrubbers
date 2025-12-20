/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This is mandatory for FTP
  images: {
    unoptimized: true,   // This is mandatory for static export
  },
  trailingSlash: true,
};

export default nextConfig;