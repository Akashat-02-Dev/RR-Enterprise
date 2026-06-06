import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https" as "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https" as "https",
        hostname: "firebasestorage.googleapis.com",
      }
    ],
  },
};

export default nextConfig;