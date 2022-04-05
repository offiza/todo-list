import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Task } from './Task.tsx';

interface TodoListProps {
  tasks: any;
  handleRemove: (id: string) => void;
  handleUpdate: (id: string) => void;
}

export const TodoList: FC<TodoListProps> = ({ tasks, handleRemove, handleUpdate }) => {
  return (
    <Box sx={{ width: 'max(50%, 900px)', padding: '16px', margin: 'auto', backgroundColor: '#fafafa' }}>
      {tasks && tasks.map(task => {
        return <Task key={task._id} task={task} handleRemove={handleRemove} handleUpdate={handleUpdate} />
      })}
    </Box>
  )
}