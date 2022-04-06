import Router from 'express';
import TaskController from './TaskController.js';

const taskRouter = new Router();

taskRouter.post('/tasks', TaskController.create);
taskRouter.get('/tasks', TaskController.getTasks);
taskRouter.get('/tasks/:id', TaskController.getTaskById);
taskRouter.put('/tasks', TaskController.updateTask);
taskRouter.delete('/tasks/:id', TaskController.deleteTask);

export default taskRouter;
