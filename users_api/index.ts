import express from 'express';
import UserController from './controllers/userController';

const app: express.Application = express();

const PORT = 3000;

const userController = new UserController();

app.get('/users', userController.getAll);

app.listen(PORT, () => {
    console.log(`Servidor inciado na porta ${PORT}`);
});