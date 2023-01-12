import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer/Footer';
import Header from '../Components/Share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;