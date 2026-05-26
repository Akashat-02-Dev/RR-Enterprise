import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        // The 'as const' or explicit type assertion is the magic fix 
        // that prevents the deployment build from crashing.
        protocol: "https" as "https", 
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;