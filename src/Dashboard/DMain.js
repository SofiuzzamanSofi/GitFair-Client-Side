import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ViewBlogs from '../Components/Blog/Blogright/ViewBlogs/ViewBlogs';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const DMain = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='lg:w-[1240px] mx-auto bg-white rounded-xl lg:p-4 gap-2'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:p-5">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <>
                        <Outlet />
                    </>
                </div>
                <div className="drawer-side rounded-xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-black text-white">
                        <div>
                            <div className='flex flex-col items-center border-b-2 pb-6'>
                                {user?.email ?
                                    <img className='w-1/2 rounded-full' src={user?.photoURL} alt='img' />
                                    :
                                    <img className='w-1/2' src='https://i.ibb.co/hCcNyVm/3135715.png' alt='img' />
                                }
                                <div className='mt-5 flex flex-col items-center'>
                                    {user?.email ?
                                        <p>{user?.displayName}</p>
                                        :
                                        <p>NaN</p>
                                    }
                                    {user?.email ?
                                        <p className='hidden'>
                                            <span>Email: </span>
                                            {user?.email}
                                        </p>
                                        :
                                        <p>NaN</p>
                                    }
                                </div>
                            </div>
                            <div className='mt-5 mb-10'>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to={`/dashboard/profile/${user?.email}`}>My Profile</Link></li>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='/dashboard'>Services</Link></li>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='/dashboard/fileshare'>My Files</Link></li>
                                <li htmlFor="my-modal-5" className='hover:bg-[#66c555] rounded-xl'><label htmlFor="my-modal-5" ><span>Add a Blog</span></label></li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
            <ViewBlogs></ViewBlogs>
        </div>
    );
};

export default DMain;