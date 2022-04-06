import Router from 'express';
import AuthController from './AuthController.js';

const authRouter = new Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.get('/users', AuthController.getUsers);

export default authRouter;
