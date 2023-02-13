import React from 'react';
import Blogleft from './Blogleft/Blogleft';
import Blogright from './Blogright/Blogright';

const Blog = () => {


    return (
        <div className='flex gap-2 lg:w-[1240px] mx-auto'>
            {/* <div className='hidden lg:block'>
                <Blogleft></Blogleft>
            </div> */}
            <div className='w-full'>
                <Blogright></Blogright>
            </div>

        </div>
    );
};

export default Blog;