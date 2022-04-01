import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import AlertBox from '../alert/AlertBox';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <AlertBox />
            <Outlet />
        </div>
    )
}

export default Layout;
