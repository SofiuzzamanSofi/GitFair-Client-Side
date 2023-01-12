import React from 'react';
import { BsArrowRight, BsPlusSquare, IconName } from "react-icons/bs";

const CategoryCard = ({ fd }) => {
    const { id, title, para } = fd
    return (
        <div>
            <div className='card-div px-11 pt-6 card border-r-0'>
                <BsPlusSquare className='text-3xl mb-4'></BsPlusSquare>
                <h1 className='text-xl font-semibold card-title'>{title}</h1>
                <p className='mt-3 card-body'>{para}</p>
                <button className='btn border-none lime-color'><span className='text-white my-0'>Explore resources</span><BsArrowRight className='ml-3 text-xl'></BsArrowRight></button>
            </div>
        </div>
    );
};

export default CategoryCard;