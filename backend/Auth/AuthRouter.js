import Router from 'express';
import AuthController from './AuthController.js';
import { check } from 'express-validator';

const authRouter = new Router();

authRouter.post('/register', [
  check('username', 'Username is required').notEmpty(),
  check('password', 'Password length must be from 6 to 12').isLength({ min: 6, max: 12 })
], AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.get('/users', AuthController.getUsers);

export default authRouter;
