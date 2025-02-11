import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  distDir: "out",
  basePath: process.env.NODE_ENV === "production" ? "/llongme" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/llongme/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
