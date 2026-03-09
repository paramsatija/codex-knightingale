import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    BROWSERSLIST_IGNORE_OLD_DATA: "1",
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "1"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  }
};

export default nextConfig;
