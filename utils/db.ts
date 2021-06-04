import { Client } from "pg";
import * as fs from "fs";

export async function createClient() {
  const client = new Client();
  await client.connect();

  return client;
}

export async function q(query: string) {
  const client = await createClient();
  const result = await client.query(query);
  await client.end();

  return result;
}

export async function createUsersTable() {
  const queryString = fs
    .readFileSync("./queries/create-users-table.sql", { encoding: "utf-8" })
    .toString();

  await q(queryString);
}

export async function dropUsersTable() {
  const queryString = fs
    .readFileSync("./queries/delete-users-table.sql", { encoding: "utf-8" })
    .toString();

  await q(queryString);
}

export async function selectAllUsers() {
  const queryString = fs
    .readFileSync("./queries/select-all-users.sql", { encoding: "utf-8" })
    .toString();

  return q(queryString);
}

export async function configureUuidExtension() {
  await q(`create extension "uuid-ossp";`);
}
