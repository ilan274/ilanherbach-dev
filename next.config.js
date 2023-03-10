/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: process.env.DB_URI,
  },
};

module.exports = nextConfig;

const withImages = require('next-images');
module.exports = withImages();
