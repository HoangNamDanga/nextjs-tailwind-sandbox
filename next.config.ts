import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com', // Sửa lại đúng hostname này
        port: '',
        pathname: '/**', // Cho phép tất cả các đường dẫn ảnh từ domain này
      },
    ],
  },
};

export default nextConfig;