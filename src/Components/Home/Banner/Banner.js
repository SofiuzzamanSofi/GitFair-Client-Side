import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Banner = () => {
    // Context
    const { user } = useContext(AuthContext);

    return (
        <div className='bg-[url("/src/assets/bg-banner.png")] lg:bg-[url("/src/assets/bg-banner.png")] pb-[83px] bg-cover bg-center -mt-[107px]'>
            <div className='lg:w-[1240px] m-auto pt-[200px]'>
                <div className='lg:p-0 md:p-20 sm:p-10 small-display'>
                    <div className='lg:w-4/5'>
                        <h1 className='text-3xl lg:text-6xl md:text-4xl pb-10 md:text-[60px] text-white font-bold'>Let’s Build With GitFair</h1>
                        <p className='text-white text-md lg:text-lg'>GitFair is a code-saving and sharing platform for developers, allowing them to store, share, and collaborate on their code with others. With a range of services such as code editor, file upload & share, live code sharing, and search AI.
                            <br />
                            <br />
                            GitFair offers an all-in-one solution for developers to manage their projects.</p>
                        <div className="navbar-end mt-11">
                            {
                                user?.uid ?
                                    <Link to="/dashboard" className="btn bg-[#66C555] uppercase lg:text-sm text-xs text-white font-bold rounded-lg">Get Started for Free</Link>
                                    :
                                    <Link to="/register" className="btn bg-[#66C555] uppercase lg:text-sm text-xs text-white font-bold rounded-lg">Get Started for Free</Link>
                            }
                            {
                                user?.uid ?
                                    <Link to='/compiler' className="btn bg-[#66C555] uppercase lg:text-sm text-xs text-white font-bold rounded-lg mx-5 mt-2 lg:mt-0 md:mt-0">Code Editor</Link>
                                    :
                                    <Link to="/login" className="btn bg-[#66C555] uppercase lg:text-sm text-xs text-white font-bold rounded-lg mx-5 mt-2 lg:mt-0 md:mt-0">Code Editor</Link>
                            }
                        </div>
                    </div>
                    <div className='bg-[#fefefe47] p-9 rounded-xl mt-24 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 mx-auto'>
                        <h3 className='text-2xl font-bold text-white '>Trusted By:</h3>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                        <div>
                            <img src='https://i.ibb.co/t4T4kk3/stripe-1.png' alt='c-logo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;