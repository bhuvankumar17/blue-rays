/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    unoptimized: false,
    qualities: [75, 85, 90, 100],
  },
}

module.exports = nextConfig
