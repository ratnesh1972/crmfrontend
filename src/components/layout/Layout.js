import React from 'react';
import { Outlet } from 'react-router-dom';

//UI Imports
import AlertBox from '../alert/AlertBox';
import Navbar from './Navbar';
import Container from '@mui/material/Container';


const Layout = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <AlertBox />
                <Outlet />
            </Container>
        </div>
    )
}

export default Layout;
