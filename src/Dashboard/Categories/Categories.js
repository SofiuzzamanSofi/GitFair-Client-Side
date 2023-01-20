import React from 'react';
import { AiFillBug, AiFillCode, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaFolderPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Categories = () => {
    return (
        <>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10'>
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiOutlineQuestionCircle />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Get The Q and A</h2>
                                <p>1 Click a lot of answers</p>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <FaFolderPlus />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">File Create & Share</h2>
                                <p>Very easy and Fast</p>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10 '>
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiFillCode />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">File Create & Share</h2>
                                <p>Very easy & Free</p>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiFillBug />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Coming Soon</h2>
                                <p>Development Ongoing</p>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10'>
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiFillBug />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Coming Soon</h2>
                                <p>Development Ongoing</p>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiFillBug />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Coming Soon</h2>
                                <p>Development Ongoing</p>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Categories;