import Router from 'express';
import TaskController from './TaskController.js';
import { authMiddleware } from "../middleware/authMiddleWare.js";

const taskRouter = new Router();

taskRouter.post('/tasks', authMiddleware, TaskController.create);
taskRouter.get('/tasks', authMiddleware, TaskController.getTasks);
taskRouter.get('/tasks/:id', authMiddleware, TaskController.getTaskById);
taskRouter.put('/tasks', authMiddleware, TaskController.updateTask);
taskRouter.delete('/tasks/:id', authMiddleware, TaskController.deleteTask);

export default taskRouter;
