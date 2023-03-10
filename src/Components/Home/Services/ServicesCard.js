import React, { useContext } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ServicesCard = ({ Service }) => {
    // Context
    const { user } = useContext(AuthContext);

    const { title, details } = Service;

    return (
        <div data-aos="fade-left">
            <div className='card-div border-black mx-auto group hover:bg-[#66C555] duration-700 bg-white px-11 py-6'>
                <div className='border mb-2 group-hover:border-white border-black rounded-xl inline-block borded'>
                    <GrServices className='text-3xl group-hover:text-white text-black mx-auto pt-2'></GrServices>
                </div>
                <h1 className='text-xl group-hover:text-white text-black font-bold card-title'>{title}</h1>
                <p className='mt-3 mb-6 text-black group-hover:text-white'>{details}</p>

                <button className="btn text-white group-hover:bg-white group-hover:text-[#66C555] bg-[#66C555] rounded-lg border-none uppercase">
                    {
                        user?.uid ?
                            <Link to="/dashboard">
                                <div className='flex'>
                                    Explore More
                                    <BsArrowRight className='ml-2 text-md' />
                                </div>
                            </Link>
                            :
                            <Link to="/login">
                                <div className='flex'>
                                    Explore More
                                    <BsArrowRight className='ml-2 text-md' />
                                </div>
                            </Link>
                    }
                </button>
            </div>
        </div>
    );
};
export default ServicesCard;