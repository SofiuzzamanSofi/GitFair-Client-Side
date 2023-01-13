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
        <div className=' m-auto  mt-[256px]'>
            <div className='card category-head-div mb-16'>
                {/* <div className='lime inline-block '>|</div> <div className='inline'><h1 className='inline category'>GitFair Categories</h1></div> */}
                <div className='flex'>
                    <div className='bg-[#66C555] mr-[14px] text-[#66C555] w-[12px] h-[40px]'>
                        |
                    </div>
                    <h1 className='category'>GitFair Categories</h1>
                </div>
            </div>
            <div className=' grid sm:grid-cols-2 md:grid-cols-3  gap-24'>
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