import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow loading images from Songstats (logos) and Spotify CDN (album/track art)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'songstats.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'svgl.app',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
