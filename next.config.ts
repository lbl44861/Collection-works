import type { NextConfig } from "next";

const isEdgeOneBuild = process.env.EDGEONE_BUILD === "1";

const nextConfig: NextConfig = isEdgeOneBuild
  ? {
      output: "export",
      images: {
        unoptimized: true,
      },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
