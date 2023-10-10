/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      // TODO swap this out for logo from contentful
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        // hostname: 'assets.example.com',
        port: '',
        // pathname: '/account123/**',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
