import React, { useState } from 'react';
import BgAnimation from './BgAnimation';
import InputShortner from './InputShortner';
import LinkResult from './LinkResult';

const LinkShortener = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className='lg:w-[1240px] m-auto'>
            <div className='lg:mt-10 lg:mb-28 text-center'>
                <h1 className='lg:text-8xl font-black text-white'>Free Link <span className='text-[#66C555]'>Shortener</span></h1>
                <div className=" bg-gray-200 rounded-lg mt-5">
                    <div className="container lg:p-60 flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute top-4 left-3">
                                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                            </div>
                            <InputShortner setInputValue={setInputValue} />
                            <div className='mt-5'>
                                <LinkResult inputValue={inputValue} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BgAnimation />
        </div>
    );
};

export default LinkShortener;