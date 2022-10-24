
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  insertUser(arg0: { id: string; name: string; nickname: string; email: string; password: string; }) {
    throw new Error("Method not implemented.");
  }
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async getAll() {
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
    .select();
    return result;
  }
}
