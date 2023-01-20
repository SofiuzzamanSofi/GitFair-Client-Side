import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='bg-[url("/src/assets/bg-banner.png")] lg:bg-[url("/src/assets/bg-banner.png")] pb-[83px] bg-cover bg-center -mt-[107px]'>
            <div className='lg:w-[1240px] m-auto pt-[200px]'>
                <div className='lg:p-0 md:p-20 sm:p-10 small-display'>
                    <div className='lg:w-4/5'>
                        <h1 className='lg:text-8xl pb-10 md:text-[60px] sm:text-[35px] text-white font-bold'>Let’s build from here</h1>
                        <p className='text-white text-lg'>Monotonectally grow extensible quality vectors without error-free resources. Distinctively incubate maintainable scenarios without backward-compatible ROI. Uniquely implement viral convergence and equity invested ROI. Competently fashion standardized.</p>
                        <div className="navbar-end mt-11">
                            <Link className="btn bg-[#66C555] uppercase lg:text-sm text-xs text-white font-bold rounded-lg">Get Started for Free</Link>
                            <Link to='/compiler' className="btn bg-[#66C555] uppercase lg:text-sm text-xs text-white font-bold rounded-lg mx-5">Code Editor</Link>
                        </div>
                    </div>
                    <div className='bg-[#fefefe47] p-9 rounded-xl mt-24 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 mx-auto'>
                        <h3 className='text-2xl font-bold text-white '>Trusted By:</h3>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;