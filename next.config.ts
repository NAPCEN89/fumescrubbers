/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // <--- THIS IS THE FIX
  images: {
    unoptimized: true,   // Required for static FTP hosting
  },
  // Optional: ensures your links work correctly on FTP
  trailingSlash: true, 
};

export default nextConfig;