/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90], // Add this line to allow quality={90} in Hero.tsx
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;