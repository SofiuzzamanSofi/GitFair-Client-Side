import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer/Footer';
import Header from '../Components/Share/Header/Header';

const BlogLayout = () => {
    return (
        <div className='bg-gray-100'>
            <div className='bg-black'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default BlogLayout;