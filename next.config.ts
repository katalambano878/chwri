import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading Next.js dev resources when accessing the app via 127.0.0.1
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.0.169"],
  // Required for the Coolify / Docker production image
  output: "standalone",
  images: {
    // Serve images directly from public/; avoids optimizer 404s in production
    unoptimized: true,
  },
};

export default nextConfig;
