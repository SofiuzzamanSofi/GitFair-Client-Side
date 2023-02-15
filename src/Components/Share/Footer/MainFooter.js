import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";

const MainFooter = () => {
    return (
        <div className='grid mx-auto grid-cols-1 md:grid-cols-3 lg:w-[1240px] py-16 lg:px-0 md:px-11 sm:px-11 small-display small-d-p-top'>
            <div>
                <img src='https://i.ibb.co/XFmb29G/logo.png' alt='logo' />
                <p>GitFair is a powerful platform for developers, providing a range of features that make it easier for them to manage their projects and collaborate with others.</p>
            </div>
            <div className='lg:ml-36 md:ml-16 py-6 lg:py-0 md:py-0'>
                <h3 className='text-xl font-semibold mb-3 underline'>About</h3>
                <ul>
                    <li className='text-md hover:text-[#66C555]'><Link to='/dashboard'>Services</Link></li>
                    <li className='text-md hover:text-[#66C555]'><Link to='/about'>About Us</Link></li>
                    <li className='text-md hover:text-[#66C555]'><Link to='/contact'>Contact Us</Link></li>
                    <li className='text-md hover:text-[#66C555]'><Link to='/privacyandpolicy'>Privacy Policy</Link></li>
                    <li className='text-md hover:text-[#66C555]'><Link to='/termsandvondition'>Website Terms</Link></li>
                </ul>
            </div>
            <div className=''>
                <h3 className='text-xl font-semibold mb-5 underline'>Social</h3>
                <div className='mt-5 flex gap-6'>
                    <Link to='/bloglayout/blog'>
                        <BsFacebook />
                    </Link>
                    <Link to='/bloglayout/blog'>
                        <BsTwitter />
                    </Link>
                    <Link to='/bloglayout/blog'>
                        <BsLinkedin />
                    </Link>
                    <Link to='/bloglayout/blog'>
                        <BsYoutube />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainFooter;