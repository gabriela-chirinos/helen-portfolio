import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/helen-portfolio",
  images: { unoptimized: true },
};

export default nextConfig;
