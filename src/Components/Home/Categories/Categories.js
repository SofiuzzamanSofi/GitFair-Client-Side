import React from 'react';
import './Categories.css'
import CategoryCard from '../Categories/CategoryCard';

const Categories = () => {


    const fakedata = [
        {
            "id": 1,
            "title": "Get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        },
        {
            "id": 2,
            "title": "Get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        },
        {
            "id": 3,
            "title": "Get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        }
    ]


    return (
        <div className='lg:w-[1240px] m-auto pt-56 small-display md:px-10 sm:px-10  '>
            <div className='card category-head-div mb-16'>
                {/* <div className='lime inline-block '>|</div> <div className='inline'><h1 className='inline category'>GitFair Categories</h1></div> */}
                <div className='border-l-8 border-[#66C555]'>
                    <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4 text-white'>GitFare Categories</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[136px] px-12  pb-5 '>
                {
                    fakedata.map(fd => <CategoryCard
                        key={fd.id}
                        fd={fd}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;