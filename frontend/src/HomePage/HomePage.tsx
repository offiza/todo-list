import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useTasks from '../hooks/useTasks.ts';
import { TodoList } from '../TodoList/TodoList.tsx';

export const HomePage = () => {
  const { tasks, removeTask, getTasks, updateTask } = useTasks();

  return (
    <TodoList tasks={tasks} handleRemove={removeTask} handleUpdate={updateTask}/>
  )
}