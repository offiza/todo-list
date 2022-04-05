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

  return {
    getTasks,
    tasks
  }
}