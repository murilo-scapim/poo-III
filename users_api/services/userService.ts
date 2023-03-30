import UserModel from '../models/userModel';
import connection from '../models/connection';
import User from '../interfaces/userInterface';

class UserService {
    public model: UserModel;

    constructor() {
       this.model = new UserModel(connection);
    }

    public async getAll(): Promise<User[]> {
       const users = await this.model.getAll();
       return users;
    }
}

export default UserService;