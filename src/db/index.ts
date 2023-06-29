import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
export const databaseConnectionString = `postgres://postgres:adminadmin@${process.env.DATABASE_URL}:${process.env.DATABASE_PORT}/db`;

const queryClient = postgres(databaseConnectionString);

export const db: PostgresJsDatabase = drizzle(queryClient);
