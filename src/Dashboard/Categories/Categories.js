import React, { useState } from 'react';
import { AiFillCode, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaFolderPlus, FaCcMastercard } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { TbScreenShare } from "react-icons/tb";
import { Link } from 'react-router-dom';
import FilePicker from './FilePicker';


const Categories = () => {

    const [showPicker, setShowPicker] = useState(false)

    return (
        <>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10'>
                {/* Search AI */}
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/searchai'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiOutlineQuestionCircle />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Search AI</h2>
                                <p>Ask your question to AI</p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* File Upload */}
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <div className='hover:bg-[#66c555] rounded-2xl'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <FaFolderPlus />
                            </div>
                            <button className='lg:pl-3'>
                                <h1 className='card-title' onClick={() => setShowPicker(!showPicker)}>Upload Here</h1>
                                {
                                    showPicker && <FilePicker setShowPicker={setShowPicker} />
                                }
                                <p>Upload files and share</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10 '>
                {/* Code Compiler */}
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/compiler'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiFillCode />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Code Compiler</h2>
                                <p>Run code and preview</p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* URL Shortener */}
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/dashboard/linkshortener'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <BsLink />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">URL Shortener</h2>
                                <p>Shorten your long link</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10'>
                {/* Premium Services */}
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/dashboard/premiumfeature'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <FaCcMastercard />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Premium Services</h2>
                                <p>Make your payment </p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Live Sharing */}
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/dashboard/liveSharing'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <TbScreenShare />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Live Sharing</h2>
                                <p>Share code with others</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Categories;