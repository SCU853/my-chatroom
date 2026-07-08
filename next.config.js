js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeCss: false
  }
};

module.exports = nextConfig;
