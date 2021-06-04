import { q } from "../../utils/db";

describe("Update users from Users table", () => {
  it("Should create Users table where the user_handle is a primary key", async () => {
    const QUERY = `
create table Users (
  ...
);`;

    await q(QUERY);
  });

  it("Should throw when try to insert two users with the same user_handle", async () => {
    // create the table
    await q(`
create table Users (
  ...
);`);

    // insert the first user
    await q(
      `insert into Users values ('2018-06-06', 'a0eebc99-9c0b-42f8-bb6d-6bb9bd380a11', 'clark', 'tyler');`
    );

    // inserting the second user should throw
    expect(() =>
      q(
        `insert into Users values ('2018-06-06', 'a0eebc99-9c0b-42f8-bb6d-6bb9bd380a11', 'clark', 'tyler');`
      )
    ).rejects.toThrow();
  });

  it("Should create Users table where create_date, user_handle and first_name are not nullable columns", async () => {
    const QUERY = `
create table Users (
  ...
);`;

    await q(QUERY);
  });

  it.each([
    ["null", "uuid_generate_v4()", "'Jones'", "'Katie'"],
    ["'2018-06-06'", "null", "'Jones'", "'Katie'"],
    ["'2018-06-06'", "uuid_generate_v4()", "'Jones'", "null"]
  ])(
    "Should throw when try to insert a new user with null as create_date %p",
    async (createDate, userHandle, lastName, firstName) => {
      // create the table
      await q(`
create table Users (
  ...
);`);

      expect(() =>
        q(
          `insert into Users (${createDate}, ${userHandle}, ${lastName}, ${firstName});`
        )
      ).rejects.toThrow();
    }
  );

  it("Should create Users table where user_handle is not null and unique", async () => {
    const QUERY = `
create table Users (
  ...
);`;

    await q(QUERY);
  });

  it("Should create Users table where user_handle is not null and is the table primary key", async () => {
    const QUERY = `
create table Users (
  ...
);`;

    await q(QUERY);
  });

  it("Should create Purchases table with column user_handle which is a foreign key and references the user_handle column from Users table", async () => {
    const QUERY = `
create table Users (
  ...
);`;

    await q(QUERY);
  });
});
