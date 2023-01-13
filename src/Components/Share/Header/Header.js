import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='lg:w-[1440px] m-auto'>
            <div className="navbar bg-base-100 pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white font-bold text-3xl lg:hidden">
                            <AiOutlineMenu />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52">
                            <NavBar />
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src='https://i.ibb.co/XFmb29G/logo.png' alt='logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavBar />
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn bg-[#66C555] uppercase text-sm]">Login</Link>
                    <Link className="btn lg:ml-4 md:ml-4 bg-[#66C555] uppercase text-sm">SIGN UP</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
