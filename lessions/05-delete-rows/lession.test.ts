import { q, createUsersTable, selectAllUsers } from "../../utils/db";
import {
  insertUserDebbieJones,
  insertUserTylerClark
} from "../../utils/test-utils";

describe("Update users from Users table", () => {
  beforeEach(async () => {
    await createUsersTable();
    await insertUserTylerClark();
    await insertUserDebbieJones();
  });

  it("Should delete all rows from Users table", async () => {
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rowCount).toBe(2);
  });

  it("Should delete only the Tyler Clark user row", async () => {
    const QUERY = `...`;

    const result = await q(QUERY);
    expect(result.rowCount).toBe(1);
  });

  it('Should use "truncate" to delete all rows from Users table', async () => {
    const QUERY = `...`;

    await q(QUERY);
    const { rows } = await selectAllUsers();
    expect(rows).toHaveLength(0);
  });

  it('Should "drop" Users table', async () => {
    const QUERY = `...`;

    await q(QUERY);

    expect(selectAllUsers).rejects.toThrow();
  });
});
