import UserModel from '../models/userModel';
import connection from '../models/connection';
import User from '../interfaces/userInterface';
import { NotFoundError } from 'restify-errors';

class UserService {
    public model: UserModel;

    constructor() {
       this.model = new UserModel(connection);
    }

    public async getAll(): Promise<User[]> {
       const users = await this.model.getAll();
       return users;
    }

    public async getById(id: number): Promise<User> {
      const users = await this.model.getById(id);
      return users;
    }

    public async create(user: User): Promise<User> {
      const userCreated = await this.model.create(user);
      return userCreated;
    }

    public async update(id: number, user: User): Promise<User> {
      const userFound = await this.model.getById(id);
      if (!userFound) {
        throw new NotFoundError('User not found');
      }
      return await this.model.update(id, user);      
    }

    public async delete(id: number): Promise<void> {
      const userFound = await this.model.getById(id);
      if (!userFound) {
        throw new NotFoundError('User not found');
      }
      await this.model.delete(id);
    }
}

export default UserService;