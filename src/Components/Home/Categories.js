import React from 'react';
import './Categories.css'
import CategoryCard from './CategoryCard';

const Categories = () => {


    const fakedata = [
        {
            "id": 1,
            "title": "get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        },
        {
            "id": 2,
            "title": "get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        },
        {
            "id": 3,
            "title": "get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        }
    ]


    return (
        <div>
            <div className='head-div'>
                <div className='lime inline-block pt-3'>|</div> <div className='inline'><h1 className='inline category'>GitFair Categories</h1></div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-24 mx-8'>
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