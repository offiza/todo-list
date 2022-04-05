import Router from 'express';
import TaskController from './TaskController.js';

const router = new Router();

router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getTasks);
router.get('/tasks/:id', TaskController.getTaskById);
router.put('/tasks', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

export default router;
