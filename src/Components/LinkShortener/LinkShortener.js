import React, { useState } from 'react';
import InputShortner from './InputShortner';
import LinkResult from './LinkResult';

const LinkShortener = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className='rounded-2xl bg-gradient-to-r from-slate-200 to-blue-100 py-24 mt-6 '>
            <div className="lg:mt-10 text-center">
                <h1 className='text-4xl lg:text-5xl font-black text-slate-800'>Shorten Your URL</h1>
                <div className="container py-16 md:py-20 lg:py-24 flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute top-4 left-3">
                            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                        <InputShortner setInputValue={setInputValue} />
                        <div className='mt-16'>
                            <LinkResult inputValue={inputValue} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkShortener;


<div className="px-8 pb-4">
    <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-7 py-6 md:py-6 text-lg lg:text-2xl rounded-2xl leading-none flex items-center divide-x divide-slate-800">
                <span className="flex items-center space-x-5">
                    <span className="pr-6 text-slate-100 font-semibold">GitFair Like As Globe For Developers</span>
                </span>
            </button>
        </div>
    </div>
</div>