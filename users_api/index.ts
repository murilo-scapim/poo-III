import express from 'express';
import cors from 'cors';
import UserController from './controllers/userController';

const app: express.Application = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

const userController = new UserController();

// rotas
app.get('/users', userController.getAll);
app.get('/users/:id', userController.getById);
app.post('/users', userController.create);
app.put('/users/:id', userController.update);
app.delete('/users/:id', userController.delete);

app.listen(PORT, () => {
    console.log(`Servidor inciado na porta ${PORT}`);
});