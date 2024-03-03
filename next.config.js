/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    app: true,
  },

  webpack: (config) => {
    config.externals = [...config.externals, 'bcrypt'];
    return config;
  },
};

module.exports = nextConfig;
