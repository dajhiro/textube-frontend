import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**', // picsum.photos의 모든 경로 허용
      },
    ],
  },
};

export default nextConfig;
