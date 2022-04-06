import React, { useState } from "react";
import { Card, Box, Typography, Link } from '@mui/material';
import { AuthContainer } from "./AuthContainer.tsx";

export const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setUsername('');
    setPassword('');
  }

  return (
    <Card sx={{ width: '500px', margin: '150px auto', border: '1px solid gray' }}>
      <Box sx={{
        p: '20px', margin: 'auto', textAlign: 'center'
      }}>
        {!isRegister ?
          <Typography sx={styles.title}>
            Login
          </Typography>
          :
          <Typography sx={styles.title}>
            Register
          </Typography>
        }
      </Box>
      <AuthContainer username={username} password={password} setUsername={setUsername} setPassword={setPassword} handleSubmit={handleSubmit} />
      <Box>
        <Box sx={{textAlign: 'center', margin: '20px', cursor: 'grab'}}>
          {!isRegister ?
            <Link sx={{ textDecoration: 'none', color: '#000' }}
              onClick={(event) => {
                event.preventDefault();
                setIsRegister(true)
              }}>
              <Typography>
                Dont have an Account?
              </Typography>
            </Link>
            :
            <Link sx={{ textDecoration: 'none', color: '#000' }}
              onClick={(event) => {
                event.preventDefault();
                setIsRegister(false)
              }}>
              <Typography>
                Already have an Account?
              </Typography>
            </Link>
          }
        </Box>


      </Box>
    </Card>
  )
}

const styles: any = {
  title: {
    fontSize: '20px',
    fontWeight: '600'
  }
}