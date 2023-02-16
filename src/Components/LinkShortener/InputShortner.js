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
                className="h-14 w-80 md:w-96 pl-5 pr-5 rounded-lg focus:shadow focus:outline-none"
                placeholder="Please put your link"
                value={value}
                onChange={ e => setValue(e.target.value)}
                />
            <div className="flex justify-end pr-5 md:pr-0 mt-2">
                <button onClick={handleClick} className="h-10 w-20 text-white font-semibold rounded-lg bg-[#66C555] hover:bg-[#439834]">Short</button>
            </div>
        </>
    );
};

export default InputShortner;