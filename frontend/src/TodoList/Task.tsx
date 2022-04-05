import React, { FC } from 'react';
import { Box, Button, Card, IconButton, Typography, Checkbox } from '@mui/material';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
interface TaskProps {
  task: any;
  handleRemove: (id: string) => void;
  handleUpdate: (id: string) => void;
}

export const Task: FC<TaskProps> = ({ task, handleRemove, handleUpdate }) => {
  return (
    <Card sx={{
      width: '70%',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      margin: '10px auto',
      justifyContent: 'space-between',
      backgroundColor: !task.completed ? '#fff' : '#bbb'
    }}>
      <Box >
        <Box>
          <Typography sx={{ fontSize: '18px' }}>
            {task.title}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            {task.description}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Checkbox
          color="success"
          checked={task.completed}
          onClick={() => handleUpdate({...task, completed: !task.completed})} />
        <IconButton onClick={() => handleRemove(task._id)}>
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Card>
  )
}