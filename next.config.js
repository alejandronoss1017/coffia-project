/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  Images: {
    loader: 'akamai',
    path: '/'
  }
};

module.exports = nextConfig;
