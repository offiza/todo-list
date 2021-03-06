import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AddTask } from '../AddTask/AddTask.tsx';
import useTasks from '../hooks/useTasks.ts';
import { TodoList } from '../TodoList/TodoList.tsx';

export const HomePage = () => {
  const { tasks, removeTask, getTasks, updateTask, createTask, error } = useTasks();
  console.log(error);
  return (
    <Box>
      <Box sx={{margin: 'auto', textAlign: 'center', padding: '40px'}}>
        <Typography sx={{fontSize: '24px'}}>{error}</Typography>
      </Box>
      <TodoList tasks={tasks} handleRemove={removeTask} handleUpdate={updateTask} />
      <AddTask handleCreate={createTask} />
    </Box>
  )
}