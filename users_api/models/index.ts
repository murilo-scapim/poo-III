import UserModel from './userModel';
import connection from './connection';

const model = new UserModel(connection);

model.getAll().then((users) => {
    console.log(users);
});