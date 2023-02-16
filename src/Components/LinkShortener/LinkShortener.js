import React, { useState } from 'react';
import BgAnimation from './BgAnimation';
import InputShortner from './InputShortner';
import LinkResult from './LinkResult';

const LinkShortener = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        // <div className='lg:w-[1240px] m-auto '>
        <div className='lg:w-[1240px] m-auto rounded-2xl bg-slate-100 py-24 mt-6'>
            <div className="lg:mt-10 text-center">
                <h1 className='text-4xl lg:text-5xl font-black text-slate-800'>Shorten Your URL</h1>
                <div className="container py-16 md:py-20 lg:py-24 flex justify-center items-center">
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
            <BgAnimation />
        </div>
        // </div>
    );
};

export default LinkShortener;