import { q, createUsersTable } from "../../utils/db";
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

  it("Should update the column user_handle from all users using the uuid_generate_v4() function", async () => {
    const QUERY = `update Users set user_handle = uuid_generate_v4();`;

    const result = await q(QUERY);
    expect(result.rowCount).toBe(2);
  });

  it("Should update the column user_handle only of the Tyler Clark user", async () => {
    const QUERY = `update Users set user_handle = uuid_generate_v4() where first_name = 'tyler' and last_name = 'clark';`;

    const result = await q(QUERY);
    expect(result.rowCount).toBe(1);
  });
});
