import React, { useState } from 'react';
import { AiFillBug, AiFillCode, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaFolderPlus } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { FcAudioFile } from "react-icons/fc";
import { Link } from 'react-router-dom';
import FilePicker from './FilePicker';


const Categories = () => {

    const [showPicker, setShowPicker] = useState(false)

    return (
        <>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10'>
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/searchai'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiOutlineQuestionCircle />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Search AI</h2>
                                <p>1 Click a of answers</p>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <div className='hover:bg-[#66c555] rounded-2xl'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <FaFolderPlus />
                            </div>
                            <button className='lg:pl-3'>
                                <h1 className='card-title' onClick={() => setShowPicker(!showPicker)}> Upload Here !</h1>
                                {
                                    showPicker && <FilePicker setShowPicker={setShowPicker}/>
                                }
                                <p>Very easy and Fast</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex flex-row lg:gap-14 items-center justify-center mt-10 '>
                <div className="card card-side bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/compiler'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <AiFillCode />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Code Compiler</h2>
                                <p>Very easy & Free</p>

                            </div>
                        </div>
                    </Link>
                </div>
                <div className="card card-side lg:mt-0 mt-5 bg-black text-white rounded-2xl">
                    <Link className='hover:bg-[#66c555] rounded-2xl' to='/linkshortener'>
                        <div className="card-body flex flex-row px-5 py-4 ">
                            <div className='text-5xl'>
                                <BsLink />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Link shortener</h2>
                                <p>Very easy & Free</p>

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
                                <FcAudioFile />
                            </div>
                            <div className='lg:pl-3'>
                                <h2 className="card-title">Video to Audio</h2>
                                <p>Easy & Free Convert</p>

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
                                <h2 className="card-title">Live Sharing</h2>
                                <p>Live Code Sharing</p>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Categories;