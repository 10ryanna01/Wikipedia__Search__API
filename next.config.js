/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, 
  distDir: 'dist',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

