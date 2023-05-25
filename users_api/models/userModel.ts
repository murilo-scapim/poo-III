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

  public async getById(id: number): Promise<User> {
    const [result] = await this.connection.execute('SELECT * FROM users WHERE id = ?;', [id]);
    const [user] = result as User[];
    return user;
  }

  public async create(user: User): Promise<User> {
    const { username, password } = user;
    const [{insertId}] = await this.connection
        .execute<ResultSetHeader>(`INSERT INTO users(username, password) VALUES (?, ?)`, [username, password]);
    
    return { id: insertId, ...user } // spread
  }

  public async update(id: number, user: User): Promise<User> {
    const { username, password } = user;
    await this.connection.execute('UPDATE users SET username=?, password=? WHERE id = ?',
      [username, password, id]);
    return { id, ...user };
  }

  public async delete(id: number): Promise<void> {
    await this.connection.execute('DELETE FROM users WHERE id = ?',[id]);
  }
}

export default UserModel;