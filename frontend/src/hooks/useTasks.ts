import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useTasks() {
  const [tasks, setTasks] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    getTasks();
  }, [])

  const createTask = async (task: any) => {
    axios
      .post('http://localhost:5000/api/tasks', task)
      .catch((error) => { setError(error.message) })
      .finally(() => {
        getTasks()
      });
  };

  const getTasks = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    axios
      .get('http://localhost:5000/api/tasks', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => { setError(error.message) })
  };

  const removeTask = async (id: string) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .catch((error) => { setError(error.message) })
      .finally(() => {
        getTasks()
      });
  };

  const updateTask = async (task: any) => {
    axios
      .put(`http://localhost:5000/api/tasks`, task)
      .catch((error) => { setError(error.message) })
      .finally(() => {
        getTasks()
      });
  };

  return {
    getTasks,
    tasks,
    removeTask,
    updateTask,
    createTask
  }
}