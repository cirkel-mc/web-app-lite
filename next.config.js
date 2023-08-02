/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.wearemania.net",
      "2.bp.blogspot.com",
      "i.pinimg.com",
      "www.lazone.id",
      "andreasagung.com",
      "i1.sndcdn.com",
      "id.yamaha.com",
      "www.mldspot.com",
      "orleeozora.com",
      "media.licdn.com",
    ],
  },
};

module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  ...nextConfig,
};
