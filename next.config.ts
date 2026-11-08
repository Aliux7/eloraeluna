import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent folder makes Next infer the wrong workspace
  // root (and then fail to resolve `tailwindcss`); pin it to this project.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // AVIF is typically 20–30% smaller than WebP; browsers without it get WebP.
    formats: ["image/avif", "image/webp"],
    // Default list tops out at 3840px; source images are capped at 2560px.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    // Static imports are content-hashed, so optimized copies can be cached long-term.
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Video file names carry a content hash (e.g. hero-1080-1a2b3c4d.mp4),
        // so a new video gets a new URL and these can be cached for a year.
        source: "/videos/:file*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
