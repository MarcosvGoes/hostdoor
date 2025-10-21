import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    domains: ["bzvlevhhqcibflnqonpo.supabase.co", "xrflnmwponufaadtyzsr.supabase.co"],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
           { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
};

export default nextConfig;
