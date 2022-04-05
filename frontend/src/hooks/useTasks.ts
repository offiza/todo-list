import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useTasks() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = async () => {
    axios
      .get('http://localhost:5000/api/tasks')
      .then((response) => {
        setTasks(response.data);
      })
  }

  const removeTask = async (id: string) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .finally(() => {
        getTasks()
      });
  }

  const updateTask = async (task: any) => {
    axios
      .put(`http://localhost:5000/api/tasks`, task)
      .finally(() => {
        getTasks()
      });
  }

  return {
    getTasks,
    tasks,
    removeTask,
    updateTask
  }
}