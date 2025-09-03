import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: '../../noiryouxi.github.io/src',
  output: 'export',
  reactStrictMode: true,  // 리액트 엄격 모드 활성화
  trailingSlash: true,  // 마지막에 슬래시 추가 설정
};

export default nextConfig;