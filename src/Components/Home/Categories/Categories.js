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
        <div className='w-[1440px] m-auto py-32'>
            <div className='category-head-div mb-16'>
                <div className='lime inline-block pt-3'>|</div> <div className='inline'><h1 className='inline category'>GitFair Categories</h1></div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 px-12 '>
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