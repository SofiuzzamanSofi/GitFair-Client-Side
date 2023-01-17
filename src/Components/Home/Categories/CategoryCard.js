import React from 'react';
import { BsArrowRight, BsPlus } from "react-icons/bs";

const CategoryCard = ({ fd }) => {
    const { id, title, para } = fd
    return (
        <div>


            <div className='card-div border-black mx-auto group hover:bg-[#66C555] bg-white px-11 py-6 duration-500 '>
                <div className='border mb-2 group-hover:border-white border-black rounded-xl inline-block borded'>
                    <BsPlus className='text-4xl group-hover:text-white text-black mx-auto my-auto font-extrabold'></BsPlus>
                </div>
                <h1 className='text-xl group-hover:text-white text-black font-bold card-title'>{title}</h1>
                <p className='mt-3 mb-6 text-black group-hover:text-white'>{para}</p>

                <button className="btn text-white group-hover:bg-white group-hover:text-black bg-[#66C555] rounded-lg border-none uppercase">Explore resources<BsArrowRight className='ml-2  text-xl'></BsArrowRight></button>

            </div>
        </div>
    );
};

export default CategoryCard;