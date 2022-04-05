import React, { FC } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
interface TaskProps {
  task: any;
}

export const Task: FC<TaskProps> = ({ task }) => {
  return (
    <Box sx={{ border: '1px solid gray', borderRadius: '6px', width: '70%', display: 'flex', alignItems: 'center', padding: '6px', mb: '10px', justifyContent: 'space-between' }}>
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
      <Box sx={{}}>
        <IconButton>
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}