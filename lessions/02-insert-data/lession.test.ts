import { q, createUsersTable } from "../../utils/db";

describe("Insert data into Users table", () => {
  beforeEach(async () => {
    await createUsersTable();
  });

  it("Should create Tyler Clark user", async () => {
    const QUERY = `
insert into Users (
  create_date,
  user_handle,
  last_name,
  first_name
) values (
  '2018-06-06',
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'clark',
  'tyler'
);`;

    const result = await q(QUERY);
    expect(result.rowCount).toBe(1);
  });

  it("Should create Tyler Clark user using short syntax", async () => {
    const QUERY = `
insert into Users values (
  '2018-06-06',
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'clark',
  'tyler'
);`;
    await q(QUERY);

    const result = await q("select * from Users;");
    expect(result.rowCount).toBe(1);
  });
});
