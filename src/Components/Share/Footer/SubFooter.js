import React from 'react';

const SubFooter = () => {
    return (
        <div className='border-t-2 border-[#4D4D4D]'>
            <div className='lg:w-[1240px] m-auto p-10 text-center'>
                <p>Copyright © {new Date().getFullYear()}  - All rights reserved | SteadyDevs</p>
            </div>
        </div>
    );
};

export default SubFooter;