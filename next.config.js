/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/case-studies/:slug',
        destination: '/case-studies/[slug]',
      },
    ];
  },
}

module.exports = nextConfig
