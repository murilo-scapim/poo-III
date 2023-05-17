import UserModel from './userModel';
import connection from './connection';

const model = new UserModel(connection);

model.getAll().then((users) => {
    console.log(users);
});

const user = {
    username: 'maria',
    password: 'password'
}

model.create(user);

model.getById(1).then((user) => {
    console.log(user);
});