import React from 'react';
import Header from '../../Share/Header/Header';

const Hero = () => {
    return (
        <div className='bg-[url("/src/assets/hero-banner.png")] lg:bg-[url("/src/assets/hero-banner.png")] h-screen bg-cover bg-center'>
            <Header />
        </div>
    );
};

export default Hero;