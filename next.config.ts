/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this line to transpile the necessary MUI packages
  transpilePackages: ['@mui/material', '@mui/icons-material'],
};

module.exports = nextConfig;