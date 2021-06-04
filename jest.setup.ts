import * as dotenv from "dotenv";
dotenv.config();

import { dropPurchasesTable, dropUsersTable } from "./utils/db";

afterEach(async () => {
  await dropUsersTable();
  await dropPurchasesTable();
});
