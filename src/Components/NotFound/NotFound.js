import React from 'react';
import error from '../../assets/404-error.gif';
import Header from '../Share/Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>

            {/* Image is center: grid place-content-center(horizontally) place-items-center(vertically) */}
            <div className='grid place-content-center place-items-center text-center'>
                {/* Add an gif file */}
                <img className='w-4/5 md:w-4/5 lg:w-2/3 mt-20 md:mt-0' src={error} alt="error" />
                <h1 className='text-green-500 text-4xl md:text-5xl lg:text-5xl'>404... Not Found!</h1>
                <p className='text-green-500 text-xl md:text-2xl'>: : The server can not find the requested resource</p>
            </div>
        </div>
    );
};

export default NotFound;