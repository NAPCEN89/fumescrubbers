/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- ADD THIS LINE
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;