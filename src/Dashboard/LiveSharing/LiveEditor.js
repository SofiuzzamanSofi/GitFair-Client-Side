import React from 'react';
import EditorPart from './EditorPart';
import './Style.css';

const LiveEditor = () => {
    return (
        <div>
            <div className="navbar  place-content-end bg-black">
                <button className='btn btn-success uppercase rounded-xl mx-5'>Copy ID</button>
                <button className='btn btn-error rounded-xl text-white uppercase'>Leave Room</button>
            </div>
            <div className='flex'>
                <div className='w-3/4 bg-[#282A36] editor'><EditorPart/></div>
                <div className='text-black'>
                    <div>
                        <h3 className='people'>Connected People</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveEditor;