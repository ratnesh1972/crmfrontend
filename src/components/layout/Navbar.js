import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import authContext from '../../context/auth/authContext';

const Navbar = () => {

    const auth = useContext(authContext);
    const { logout } = auth;
    const { state } = auth;

    return (
        <Box>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ marginRight: "16px" }}>
                        CRM
                    </Typography>
                    <Box sx={{ display: "flex", flexGrow: 1 }}>
                        <Link to="/leads"><Button sx={{ color: "#fff" }} >Leads</Button></Link>
                        <Link to="/contacts"><Button sx={{ color: "#fff" }}>contacts</Button></Link>
                        <Link to="/services"><Button sx={{ color: "#fff" }}>Services</Button></Link>
                    </Box>

                    {state.isLoggedIn ?
                        (<Box>
                            <Button variant="text" sx={{ color: "white", textDecorationLine: "none" }} onClick={logout}>Logout</Button>
                        </Box>)
                        :
                        (<Box>
                            <Link to="/login"><Button variant="text" sx={{ color: "white", textDecorationLine: "none" }}>Login</Button></Link>
                            <Link to="/register"><Button variant="text" sx={{ color: "white", textDecoration: "none" }}>Register</Button></Link>
                        </Box>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;
