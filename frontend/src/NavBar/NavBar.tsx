import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '10px' }}>
        <Link to="/home" style={{ textDecoration: 'none', color: '#fff', width: '200px', textAlign: 'center' }}>
          <Typography variant="h6" color="inherit" component="div">
            Tasks
          </Typography>
        </Link>
        <Typography variant="h6" color="inherit" component="div" sx={{ width: '200px', textAlign: 'center' }}>
          Todo List By Offiza
        </Typography>
        <Link to="/auth" style={{ textDecoration: 'none', color: '#fff', width: '200px', textAlign: 'center' }}>
          <Typography variant="h6" color="inherit" component="div">
            Login/register
          </Typography>
        </Link>
      </Box>
    </AppBar>
  )
}