/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      }
      ,
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'http',
        hostname: process.env.API_HOSTNAME
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ]
  }
};

module.exports = nextConfig;
