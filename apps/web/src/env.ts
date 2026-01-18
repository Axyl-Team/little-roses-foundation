import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Database connection string
    DATABASE_URL: z
      .url()
      .describe(
        "PostgreSQL connection string (postgres://user:password@host:port/database)"
      ),
    // Used to encrypt JWT tokens
    PAYLOAD_SECRET: z
      .string()
      .min(1)
      .describe("Secret key for encrypting JWT tokens"),
    // Secret used to authenticate cron jobs
    CRON_SECRET: z
      .string()
      .min(1)
      .optional()
      .describe("Secret key for authenticating cron job requests"),
    // Used to validate preview requests
    PREVIEW_SECRET: z
      .string()
      .min(1)
      .optional()
      .describe("Secret key for validating preview requests"),
    // Vercel production URL (auto-set by Vercel)
    VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  },
  client: {
    // Used to configure CORS, format links and more. No trailing slash
    NEXT_PUBLIC_SERVER_URL: z
      .url()
      .optional()
      .describe(
        "Public server URL without trailing slash (e.g., http://localhost:3000)"
      ),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
});
