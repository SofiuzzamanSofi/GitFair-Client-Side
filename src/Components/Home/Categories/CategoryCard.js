import React from 'react';
import { BsArrowRight, BsPlus, BsPlusSquare, IconName } from "react-icons/bs";

const CategoryCard = ({ fd }) => {
    const { id, title, para } = fd
    return (
        <div>



            <div className='card-div bg-white px-11 py-6 duration-500 '>
                <div className='border mb-2 border-black rounded-xl inline-block borded'>
                    <BsPlus className='text-4xl mx-auto my-auto font-extrabold'></BsPlus>
                </div>
                <h1 className='text-xl font-bold card-title'>{title}</h1>
                <p className='mt-3 mb-6'>{para}</p>
                <button className='btn text-white button duration-700'>Explore resources<BsArrowRight className='ml-2  text-xl'></BsArrowRight></button>
            </div>
        </div>
    );
};

export default CategoryCard;