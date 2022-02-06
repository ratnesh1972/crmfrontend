import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <Box>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        CRM
                    </Typography>
                    <Box sx={{ display: "flex", flexGrow: 1 }}>
                        <Button color="inherit">Leads</Button>
                        <Button color="inherit">Contacts</Button>
                        <Button color="inherit">Services</Button>
                    </Box>
                    <Box>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Register</Button>
                        <Button color="inherit">Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;
