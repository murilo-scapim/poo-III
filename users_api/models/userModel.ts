import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async create(user: User): Promise<User> {
    const { username, password } = user;
    const [{insertId}] = await this.connection
        .execute<ResultSetHeader>(`INSERT INTO users(username, password) VALUES (?, ?)`, [username, password]);
    
    return { id: insertId, ...user } // spread
  }
}

export default UserModel;