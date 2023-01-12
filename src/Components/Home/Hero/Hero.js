import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='bg-[url("/src/assets/bg-banner.png")] lg:bg-[url("/src/assets/bg-banner.png")] h-screen bg-cover bg-center -mt-[107px]'>
            <div className='lg:w-[1440px] m-auto pt-[200px]'>
                <div className='w-2/3'>
                    <h1 className='lg:text-[96px] text-white font-bold'>Let’s build from here</h1>
                    <p className='text-white text-lg'>Monotonectally grow extensible quality vectors without error-free resources. Distinctively incubate maintainable scenarios without backward-compatible ROI. Uniquely implement viral convergence and equity invested ROI. Competently fashion standardized.</p>
                    <div className="navbar-end mt-11">
                        <Link className="btn bg-[#66C555] uppercase text-[20px]">Get Started for Free</Link>
                    </div>
                </div>
            </div>
            <div className='bg-[#ffffff9a]'>
                hhh
            </div>
        </div>
    );
};

export default Hero;