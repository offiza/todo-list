import React, { useState, FC } from 'react';
import { Box, Card, IconButton, Typography, Input } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface AddTaskProps {
  handleCreate: (task: any) => void;
}

export const AddTask: FC<AddTaskProps> = ({ handleCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');

  const handleSendTask = (event: any) => {
    event.preventDefault();

    const task: { title: string, description: string, completed: boolean } = {
      title,
      description,
      completed: false,
    };

    handleCreate(task);

    setIsOpen(false);
  }

  return (
    <Box sx={{ position: 'fixed', zIndex: 3, bottom: '100px', right: '50px' }}>
      {!isOpen ?
        <IconButton sx={{ width: '64px', height: '64px' }} onClick={() => setIsOpen(!isOpen)}>
          <AddCircleOutlineIcon sx={{ width: '38px', height: '38px' }} />
        </IconButton>
        :
        <Card sx={{ border: '1px solid gray', p: '10px' }}>
          <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: '500' }}>
              Add Task
            </Typography>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
          <Box>
            <form method='post' onSubmit={(event) => handleSendTask(event)}>
              <Box sx={style.input}>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' style={{ fontSize: '20px' }} />
              </Box>
              <Box sx={style.input}>
                <Input value={description} multiline={true} onChange={(e) => setDescription(e.target.value)} placeholder='description' style={{ fontSize: '20px' }} />
              </Box>
              <Box sx={{ textAlign: 'center', margin: '20px 0 10px 0', }}>
                <input type="submit" value="Create" style={{ textAlign: 'center', fontSize: '20px', padding: '4px 30px' }} />
              </Box>
            </form>
          </Box>
        </Card>
      }
    </Box >
  )
}

const style: any = {
  input: {
    margin: '10px auto',
  }
}
