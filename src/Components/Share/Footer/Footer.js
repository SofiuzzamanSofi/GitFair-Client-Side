import React from 'react';
import MainFooter from './MainFooter';
import SubFooter from './SubFooter';

const Footer = () => {
    return (
        <div className='bg-[#111111]  text-white'>
            <div>
                <MainFooter />
                <SubFooter />
            </div>
        </div>
    );
};

export default Footer;