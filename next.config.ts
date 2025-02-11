import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
