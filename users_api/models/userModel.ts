import { Pool } from 'mysql2/promise';

interface User {
  id?: number;
  username: string;
  password: string;
}

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const [users] = await this.connection.execute(
      'SELECT * FROM users');
    return users as User[]; // type assertion
  }
}

export default UserModel;