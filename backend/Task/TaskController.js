import TaskService from "./TaskService.js";

class TaskController {
  async create(req, res) {
    console.log(req.body);
    try {
      const task = await TaskService.create(req.body);
      res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getTasks(req, res) {
    try {
      const tasks = await TaskService.getTasks();
      return res.json(tasks);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getTaskById(req, res) {
    try {
      const task = await TaskService.getTaskById(req.params.id);
      return res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async updateTask(req, res) {
    try {
      const newTask = await TaskService.updateTask(req.body);
      return res.json(newTask);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteTask(req, res) {
    try {
      const task = await TaskService.deleteTask(req.params.id);
      return res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new TaskController();