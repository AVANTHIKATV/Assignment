import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar>
      <Toolbar>
        <Typography variant="h5">ProductSphere</Typography> &nbsp; &nbsp; &nbsp;
        <Link to='/dash'>
            <Button variant='contained'>Home</Button> 
        </Link>&nbsp; &nbsp; &nbsp;
        <Link to='/add'>
            <Button variant='contained'>Add Product</Button> 
        </Link>&nbsp; &nbsp; &nbsp;
      </Toolbar>
    </AppBar>
    <br /><br /><br />
    </div>
  );
};

export default Navbar;
