// next.config.js
const nextConfig = {
  output: "export", // this is fine
  images: {
    unoptimized: true, // <-- disable built-in image optimization
  },
};

module.exports = nextConfig;
