import express, { Request, Response, NextFunction } from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//config aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config das rotas
app.use(statusRoute);
app.use(usersRoute);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação na Porta 3000!')
});