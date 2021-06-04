import { q, createUsersTable } from "../../utils/db";
import {
  insertUserDebbieJones,
  insertUserTylerClark
} from "../../utils/test-utils";

describe("Query users from Users table", () => {
  beforeEach(async () => {
    await createUsersTable();
    await insertUserTylerClark();
    await insertUserDebbieJones();
  });

  it("Should query all columns from Users table", async () => {
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rows).toMatchSnapshot();
  });

  it("Should query first_name and last_name columns from Users table", async () => {
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rows).toMatchSnapshot();
  });

  it("Should query first_name and last_name and give them FirstName and LastName alias", async () => {
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rows).toMatchSnapshot();
  });

  it("Should count all rows in the Users table", async () => {
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rows).toMatchSnapshot();
  });

  it("Should get all distinct users by the first_name column", async () => {
    await q(
      `insert into Users (first_name, last_name) values ('tyler', 'clark');`
    );
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rows).toMatchSnapshot();
  });

  it("Should count all distinct users by the last_name column", async () => {
    await q(
      `insert into Users (first_name, last_name) values ('tyler', 'clark');`
    );
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rows).toMatchSnapshot();
  });
});
