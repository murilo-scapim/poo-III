import { Pool } from 'mysql2/promise';
import User from '../interfaces/userInterface';

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