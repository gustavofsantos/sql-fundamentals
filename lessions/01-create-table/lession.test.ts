import { q } from "../../utils/db";

describe("Create Users table", () => {
  it("Shoud create Users table", async () => {
    const QUERY = `
create table Users (
  create_date   date,
  user_handle   uuid,
  first_name    text,
  last_name     text
);`;

    await q(QUERY);
  });
});
