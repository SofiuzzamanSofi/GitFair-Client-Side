import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='lg:w-[1440px] m-auto'>
            <div className="navbar bg-base-100 pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-white active:bg-black text-xl'><NavLink to='/'>Home</NavLink></li>
                            <li className='text-white text-xl'><NavLink to='/about'>About</NavLink></li>
                            <li className='text-white text-xl'><NavLink to='/contact'>Contact Us</NavLink></li>
                            <li className='text-white text-xl'><NavLink to='/blog'>Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src='https://i.ibb.co/XFmb29G/logo.png' alt='logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white active:bg-black text-xl'><NavLink to='/'>Home</NavLink></li>
                        <li className='text-white text-xl'><NavLink to='/about'>About</NavLink></li>
                        <li className='text-white text-xl'><NavLink to='/contact'>Contact Us</NavLink></li>
                        <li className='text-white text-xl'><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-[#66C555] uppercase text-[20px]">Login</Link>
                    <Link className="btn ml-4 bg-[#66C555] uppercase text-[20px]">SIGN UP</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;