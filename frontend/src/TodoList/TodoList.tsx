import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Task } from './Task.tsx';

interface TodoListProps {
  tasks: any;
}

export const TodoList: FC<TodoListProps> = ({ tasks }) => {
  return (
    <Box sx={{ width: 'max(50%, 900px)', border: '1px solid gray', padding: '16px', margin: 'auto', mt: '150px' }}>
      {tasks && tasks.map(task => {
        return <Task task={task} />
      })}
    </Box>
  )
}