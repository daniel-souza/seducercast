/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['cdn.sanity.io', 'via.placeholder.com'],
  }
}

module.exports = nextConfig
