import React from 'react';
import firstimg from './images/firstimg.png'
import bg2 from './images/bg2.png'

const SubDetail3 = () => {
    return (
        <div className='mt-[138px]'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative'>
                        <img src={bg2} className="w-[470px] rounded-lg  shadow-2xl" alt='' />
                        <img src={firstimg} className='w-[480px]  absolute top-[90px]' alt="" />
                    </div>

                    <div className='lg:ml-[124px] lg:w-[800px]'>
                        <h1 className="text-[32px] font-semibold">Attribute commits with collaborators easily</h1>
                        <p className="py-6 lg:text-[20px] lg:font-bold">Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and see the co-authors on github.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubDetail3;