import * as dotenv from "dotenv";
dotenv.config();

import { dropUsersTable } from "./utils/db";

afterEach(async () => {
  await dropUsersTable();
});
