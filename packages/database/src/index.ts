import { assertValue } from "@workspace/utils";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./db/schema";
import { env } from "./env";

const databaseUrl = assertValue(env.DATABASE_URL, "DATABASE_URL is not set");

export const db = drizzle(databaseUrl, { schema });

export * from "drizzle-orm";
