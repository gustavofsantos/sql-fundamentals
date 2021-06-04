import { q, createUsersTable } from "../../utils/db";

describe("Insert data into Users table", () => {
  beforeEach(async () => {
    await createUsersTable();
  });

  it("Should create Tyler Clark user", async () => {
    const QUERY = `
insert into Users (
  ...
) values (
  ...
);`;

    const result = await q(QUERY);
    expect(result.rowCount).toBe(1);
  });

  it("Should create Tyler Clark user using short syntax", async () => {
    const QUERY = `
insert into Users values (
  ...
);`;
    await q(QUERY);

    const result = await q("select * from Users;");
    expect(result.rowCount).toBe(1);
  });
});
