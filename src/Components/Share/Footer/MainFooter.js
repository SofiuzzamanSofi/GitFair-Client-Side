import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";

const MainFooter = () => {
    return (
        <div className='grid lg:grid-cols-3 lg:w-[1440px] m-auto py-11 lg:px-0 md:px-11 sm:px-11 small-display small-d-p-top'>
            <div className='lg:w-4/5'>
                <img src='https://i.ibb.co/XFmb29G/logo.png' alt='logo' />
                <p>Interactively productize resource maximizing potentialities rather than functional potentialities. Collaboratively facilitate clicks-and-mortar interfaces via process-centric markets. Quickly promote world-class imperatives.</p>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-5'>Our Pages</h3>
                <ul>
                    <li className='text-lg hover:text-[#66C555]'><Link to='/'>About us</Link></li>
                    <li className='text-lg hover:text-[#66C555]'><Link to='/'>Contact Us</Link></li>
                    <li className='text-lg hover:text-[#66C555]'><Link to='/'>Privacy and policy</Link></li>
                    <li className='text-lg hover:text-[#66C555]'><Link to='/'>Terms and Condition</Link></li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-5'>Our Services</h3>
                <ul>
                    <li className='text-lg hover:text-[#66C555]'><Link to='/'>All Services</Link></li>
                    <li className='text-lg hover:text-[#66C555]'><Link to='/'>Reach us</Link></li>
                </ul>
                <div className='mt-5 flex gap-6'>
                    <Link to='/'>
                        <BsFacebook />
                    </Link>
                    <Link to='/'>
                        <BsTwitter />
                    </Link>
                    <Link to='/'>
                        <BsLinkedin />
                    </Link>
                    <Link to='/'>
                        <BsYoutube />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;