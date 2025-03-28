import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io"
      }
    ]
  },
  //  // "@ts-expect-error
  //  experimental: {
  //   appDir: true, // `src/app` を有効にする
  // },
};

export default nextConfig;
