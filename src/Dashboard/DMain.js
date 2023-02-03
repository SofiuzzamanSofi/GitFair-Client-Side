import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const DMain = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='lg:w-[1240px] mx-auto bg-white rounded-xl p-4 gap-2'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-5">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <>
                        <Outlet />
                    </>
                </div>
                <div className="drawer-side rounded-xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-black text-white">
                        <div>
                            <div className='flex flex-col items-center border-b-2'>
                                {user?.email ?
                                    <img className='w-1/2 rounded-full' src={user?.photoURL} alt='imgae' /> :
                                    <img className='w-1/2' src='https://i.ibb.co/hCcNyVm/3135715.png' alt='imgae' />
                                }
                                <div className='mt-5 flex flex-col items-center'>
                                    {user?.email ?
                                        <p>{user?.displayName}</p> :
                                        <p>NaN</p>
                                    }
                                    {user?.email ?
                                        <p><span>Email: </span>{user?.email}</p> :
                                        <p>NaN</p>
                                    }


                                    <p className='bg-white rounded-lg text-black px-5 m-3'><span>User</span></p>
                                </div>
                            </div>
                            <div className='mt-5 mb-10'>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='dashboard/dashboard'>Dashboard</Link></li>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='dashboard/profile'>My Profile</Link></li>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='dashboard/fileshare'>Files Share</Link></li>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='dashboard/allfriends'>All friends</Link></li>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='dashboard/liveSharing'>Live Code Sharing</Link></li>
                                <li className='hover:bg-[#66c555] rounded-xl'><Link to='dashboard/premiumfeature'>Premium Feature</Link></li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DMain;