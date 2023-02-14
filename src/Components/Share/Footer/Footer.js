import React from 'react';
import MainFooter from './MainFooter';
import SubFooter from './SubFooter';
import stars from "../../../assets/features/bg-stars.png";

const Footer = () => {
    return (
        <div className='bg-[#111111]  text-white'>
            <div
                style={{
                    background: `url(${stars})`,
                    backgroundSize: 'cover'
                }}
            >
                <MainFooter />
                <SubFooter />
            </div>
        </div>

    );
};

export default Footer;