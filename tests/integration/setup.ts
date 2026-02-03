import { execSync } from "node:child_process";
import process from "node:process";
import dotenv from "dotenv";
import { Client } from "pg";

dotenv.config();

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres:password@localhost:5432/collector_test";

export async function setup() {
  process.env.DATABASE_URL = connectionString;
  // execSync("npx prisma migrate deploy --config prisma/prisma.config.ts", {
  //   stdio: "ignore",
  //   env: { ...process.env, DATABASE_URL: connectionString },
  // });
}

export async function teardown() {
  const client = new Client({ connectionString });
  await client.connect();
  // await client.query(`DROP SCHEMA IF EXISTS "public" CASCADE`);
  await client.end();
}
