import "dotenv/config";
import { assertValue } from "@workspace/utils";
import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

const databaseUrl = assertValue(
  env.DATABASE_URL,
  "DATABASE_URL environment variable is required"
);

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
  verbose: true,
  strict: true,
});
