const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: { loader: 'url-loader' },
    });

    return config;
  },
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['drive.google.com'],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};
