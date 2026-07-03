import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    // Add this line to allow quality={90} without Next.js warnings
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'rnrenterprise.co.in', 
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      }
    ],
  },
};

export default config;