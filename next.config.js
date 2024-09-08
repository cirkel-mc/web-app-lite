const path = require('path');
const { withPWA } = require('./workbox.config');

module.exports = withPWA({
  experimental: {
    appDir: true,
    missingSuspenseWithCSRBailout: false,
    serverActions: {
      allowedOrigins: ['localhost', '*.cirkel.id'],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },
  webpack(config) {
    const registerJs = path.join(path.dirname(require.resolve("next-pwa")), "register.js");
    const entry = config.entry;

    config.entry = () =>
        entry().then((entries) => {
            // Automatically registers the SW and enables certain `next-pwa` features in 
            // App Router (https://github.com/shadowwalker/next-pwa/pull/427)
            if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
                if (Array.isArray(entries["main-app"])) {
                    entries["main-app"].unshift(registerJs);
                } else if (typeof entries["main-app"] === "string") {
                    entries["main-app"] = [registerJs, entries["main-app"]];
                }
            }
            return entries;
        });

    return config;
  },
});
