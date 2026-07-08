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
  },
  compiler: {
    styledComponents: false
  }
};

module.exports = nextConfig;
