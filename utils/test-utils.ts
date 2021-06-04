import * as fs from "fs";
import { q } from "./db";

export async function insertUserTylerClark() {
  const query = fs
    .readFileSync("./queries/insert-user-tyler-clark.sql", {
      encoding: "utf-8"
    })
    .toString();

  await q(query);
}

export async function insertUserDebbieJones() {
  const query = fs
    .readFileSync("./queries/insert-user-debbie-jones.sql", {
      encoding: "utf-8"
    })
    .toString();

  await q(query);
}

export async function insertUsers() {
  await insertUserTylerClark();
  await insertUserDebbieJones();
}
