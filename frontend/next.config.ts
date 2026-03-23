import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "motion"],
    // @ts-ignore - 'turbo' is a valid experimental property in this version of Next.js
    turbo: {
      root: path.join(__dirname, ".."), // Explicitly set root to the monorepo root or current frontend root
    },
  },
};

export default nextConfig;
