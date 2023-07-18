const { withExpo } = require("@expo/next-adapter");

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "expo",
    "@_ricecooker/lary",
    // Add more React Native / Expo packages here...
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;
