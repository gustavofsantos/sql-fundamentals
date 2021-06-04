import { q } from "../../utils/db";

describe("Create Users table", () => {
  it("Shoud create Users table", async () => {
    const QUERY = `
create table Users (
...
);`;

    await q(QUERY);
  });
});
