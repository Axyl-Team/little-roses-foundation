import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import redirects from "./redirects.js";

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.__NEXT_PRIVATE_ORIGIN || "http://localhost:3000";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item);

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(":", "") as "http" | "https",
        };
      }),
      // Google favicon service
      {
        protocol: "https",
        hostname: "**.gstatic.com",
      },
      // Google Cloud services
      {
        protocol: "https",
        hostname: "**.cloud.google.com",
      },
      // Common external image sources
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  redirects,
};

export default withPayload(withNextIntl(nextConfig), {
  devBundleServerPackages: false,
});
