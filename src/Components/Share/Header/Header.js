import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { AiOutlineMenu } from 'react-icons/ai';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from "../../../assets/logo.png"
import axios from 'axios';
import userimg from '../../../assets/resources/avatar2.png'

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const Navigate = useNavigate()
    const handleLogout = () => {
        logout()
            .then(() => {
                Navigate('/login')
            })
            .catch(err => {
                console.log(err)

            })
    }
    return (
        <div className='lg:w-[1240px] m-auto'>
            <div className="navbar pt-5">
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
                        {/* <img src='https://i.ibb.co/XFmb29G/logo.png' alt='logo' /> */}
                        <img src={logo} alt='logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavBar />
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <Link onClick={handleLogout} to='' className="btn bg-[#66C555] uppercase text-sm] text-white rounded-lg">Logout</Link>
                            :
                            <Link to='/login' className="btn bg-[#66C555] uppercase text-sm] text-white rounded-lg">Login</Link>
                    }

                    {
                        user?.email ?
                            <div>
                                {
                                    user?.photoURL
                                        ?
                                        <div className="avatar">
                                            <div className="w-12 ml-2 rounded-full ring ring-white">
                                                <img src={user?.photoURL} alt='userimage' />
                                            </div>
                                        </div>
                                        :
                                        <div className="avatar">
                                            <div className="w-12 ml-2 rounded-full ring ring-white">
                                                <img src={userimg} alt='userimage' />
                                            </div>
                                        </div>
                                }
                            </div>
                            :
                            <Link to='/register' className="btn lg:ml-4 md:ml-4 bg-[#66C555] uppercase text-sm text-white rounded-lg">SIGN UP</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
