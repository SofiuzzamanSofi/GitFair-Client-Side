import './Blogleft.css'
import React from 'react';
import { useContext } from 'react';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Blogleft = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='lg:block sm:hidden w-[300px] stick' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500">
            <div className="hero min-h-screen" style={{ backgroundImage: `URL('https://img.freepik.com/premium-photo/four-wooden-blocks-with-letters-blog-bright-surface-gray-table-business-concept_384017-3526.jpg?w=2000')` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Hey there! We are SteadyDevs</h1>
                        <p className="mb-5">Here is our Blogs</p>
                        <div className='mt-[70px]'>

                            <div className='mt-5 flex gap-6'>
                                <Link to='/'>
                                    <BsFacebook />
                                </Link>
                                <Link to='/'>
                                    <BsTwitter />
                                </Link>
                                <Link to='/'>
                                    <BsLinkedin />
                                </Link>
                                <Link to='/'>
                                    <BsYoutube />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogleft;