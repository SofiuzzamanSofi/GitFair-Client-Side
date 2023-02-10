import React, { useState } from 'react';

const InputShortner = ({ setInputValue }) => {
    const [value, setValue] = useState("");
    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }
    return (
        <>
            <input
                type="text"
                className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                placeholder="Please put your link" 
                value={value}
                onChange={ e => setValue(e.target.value)}
                />
            <div className="absolute top-2 right-2">
                <button onClick={handleClick} className="h-10 w-20 text-white rounded-lg bg-[#66C555] hover:bg-[#439834]">Short</button>
            </div>
        </>
    );
};

export default InputShortner;