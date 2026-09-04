import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      // inside next.config.ts -> images.remotePatterns
{
  protocol: "https",
  hostname: "SoftbeckMedicare.com",
},

{
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;