import express from 'express';
import UserController from './controllers/userController';

const app: express.Application = express();
app.use(express.json());

const PORT = 3000;

const userController = new UserController();

// rotas
app.get('/users', userController.getAll);
app.post('/users', userController.create);

app.listen(PORT, () => {
    console.log(`Servidor inciado na porta ${PORT}`);
});