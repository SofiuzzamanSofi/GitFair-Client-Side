import React from 'react';
import CategoryCard from '../Home/Categories/CategoryCard';

const AllServices = () => {
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
        },
        {
            "id": 4,
            "title": "Get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        },
        {
            "id": 5,
            "title": "Get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        },
        {
            "id": 6,
            "title": "Get started With GitFair",
            "para": "Holisticly leverage existing user-centric action items without corporate initiatives."
        }
    ]
    return (
        <div className='lg:w-[1240px] m-auto pt-20 pb-10 small-display md:px-10 sm:px-10  '>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[136px] lg:px-12  pb-5'>
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

export default AllServices;