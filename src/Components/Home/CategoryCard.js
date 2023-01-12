import React from 'react';
import { BsArrowRight, BsPlus, BsPlusSquare, IconName } from "react-icons/bs";

const CategoryCard = ({ fd }) => {
    const { id, title, para } = fd
    return (
        <div>



            <div className='card-div bg-white px-11 py-6 relative duration-500 '>
                <div className='border mb-4 absolute top-3 border-black rounded-xl inline-block borded'>
                    <BsPlus className='text-4xl font-bold'></BsPlus>
                </div>
                <h1 className='text-xl mt-9 font-semibold card-title'>{title}</h1>
                <p className='mt-3 mb-6'>{para}</p>
                <button className='btn bg-white text-black outlined  hover:text-white hover:border-none button'>Explore resources<BsArrowRight className='ml-2 text-xl'></BsArrowRight></button>
            </div>
        </div>
    );
};

export default CategoryCard;