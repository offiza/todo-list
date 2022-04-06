import { Box, Input } from '@mui/material';
import React, { FC } from 'react';

interface AuthContainerProps {
  username: string;
  setUsername: (event: any) => void;
  password: string;
  setPassword: (event: any) => void;
  handleSubmit: (event: any) => void;
}

export const AuthContainer: FC<AuthContainerProps> = ({ username, setUsername, password, setPassword, handleSubmit }) => {

  return (
    <Box sx={{ margin: 'auto', textAlign: 'center' }}>
      <form method='post' onSubmit={(event) => handleSubmit(event)}>
        <Box sx={style.input}>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='name' style={{ fontSize: '20px' }} fullWidth />
        </Box>
        <Box sx={style.input}>
          <Input value={password} multiline={true} onChange={(e) => setPassword(e.target.value)} placeholder='password' style={{ fontSize: '20px' }} fullWidth />
        </Box>
        <Box sx={{
          textAlign: 'center', margin: '20px auto 10px auto', maxWidth: '400px'}}>
          <input type="submit" value="Create" style={{ textAlign: 'center', fontSize: '20px', padding: '4px 30px', width: '100%' }} />
        </Box>
      </form>
    </Box>
  )
}

const style: any = {
  input: {
    margin: '10px auto',
    maxWidth: '400px'
  }
}
