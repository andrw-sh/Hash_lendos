/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd ? { output: 'export' } : {}),
  images: {
    unoptimized: true
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Prevent flaky filesystem cache issues on some environments.
      config.cache = false;
    }
    return config;
  }
};

module.exports = nextConfig;
