import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**', // picsum.photos의 모든 경로 허용
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', // Google 프로필 이미지
      },
      {
        // 유튜브 썸네일 이미지
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
      {
        // 구글 사용자 프로필 이미지 (Hiroaki Suzuki, 권승현 님의 프로필 사진)
        protocol: "http", // 데이터에 http로 되어 있어 http를 허용하거나, 둘 다 대응하려면 설정을 분리해야 합니다.
        hostname: "googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/:path*`,
      },
    ];
  },
};

export default nextConfig;
