import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer/Footer';
import Header from '../Components/Share/Header/Header';

const BlogLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <div className='hidden'>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default BlogLayout;