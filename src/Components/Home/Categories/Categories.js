import React from 'react';
import { FaFileCode } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Categories = () => {
    return (
        <div className='bg-[#000] text-white'>
            <div className='lg:w-[1240px] m-auto pt-32 small-display md:px-10 sm:px-10'>
                <div className='border-l-8 border-[#66C555] '>
                    <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4'>Gitfair Categories</h2>
                </div>
                <div className='grid mx-auto lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2  lg:max-w-screen lg:px-10'>
                    <div className='bg-white mt-16 border-radius'>
                        <span className='text-black text-3xl'>
                            <FaFileCode />
                        </span>
                        <p className='text-black text-2xl font-semibold mt-3'>Get started with GitLab</p>
                        <p className='text-black text-xl font-normal mt-3'>
                            Holisticly leverage existing user-centric action items without corporate initiatives.
                        </p>
                        <div className="navbar-end mt-11">
                            <Link className="btn border-none bg-[#66C555] uppercase lg:text-sm text-xs font-bold">Explore resources</Link>
                        </div>
                    </div>
                    <div className='bg-white mt-16 p-8 border-radius'>
                        <span className='text-black text-3xl'>
                            <FaFileCode />
                        </span>
                        <p className='text-black text-2xl font-semibold mt-3'>Get started with GitLab</p>
                        <p className='text-black text-xl font-normal mt-3'>
                            Holisticly leverage existing user-centric action items without corporate initiatives.
                        </p>
                        <div className="navbar-end mt-11">
                            <Link className="btn border-none bg-[#66C555] uppercase lg:text-sm text-xs font-bold">Explore resources</Link>
                        </div>
                    </div>
                    <div className='bg-white mt-16 p-8 border-radius'>
                        <span className='text-black text-3xl'>
                            <FaFileCode />
                        </span>
                        <p className='text-black text-2xl font-semibold mt-3'>Get started with GitLab</p>
                        <p className='text-black text-xl font-normal mt-3'>
                            Holisticly leverage existing user-centric action items without corporate initiatives.
                        </p>
                        <div className="navbar-end mt-11">
                            <Link className="btn border-none bg-[#66C555] uppercase lg:text-sm text-xs font-bold">Explore resources</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;