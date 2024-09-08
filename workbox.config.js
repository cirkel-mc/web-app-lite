const isDev = process.env.ENVIRONMENT === 'DEVELOPMENT';

module.exports = {
  withPWA: require('next-pwa')({
    disable: isDev,
    // dest: 'public',
    // distDir: 'build',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    // skipWaiting: true,
    buildExcludes: ['/robots.txt', /\/images\/.*$/, 'app-build-manifest.json'],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'google-fonts-stylesheets',
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 200,
          },
        },
      },
      {
        urlPattern: /.(png|jpg|jpeg|webp|svg|woff|woff2)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'assets',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
            maxEntries: 200,
          },
        },
      },
      {
        urlPattern: /.(js|css)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'js-css',
        },
      },
    ],
  }),
};