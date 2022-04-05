import TaskSchema from "../DbSchema/TaskSchema.js";

class TakService {
  async create(task) {
    const createdTask = await TaskSchema.create(task);
    return createdTask;
  }

  async getTasks() {
    const tasks = await TaskSchema.find();
    return tasks;
  }

  async getTaskById(id) {
    if (!id) throw new Error('No Id');

    const task = await TaskSchema.findById(id);
    return task;
  }

  async updateTask(task) {
    if (!task._id) throw new Error('No Id');

    const updatedTask = await TaskSchema.findByIdAndUpdate(task._id, task, { new: true });
    return updatedTask;
  }

  async deleteTask(id) {
    if (!id) throw new Error('No Id');

    const task = await TaskSchema.findByIdAndDelete(id);
    return task;
  }
}

export default new TakService();