import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkResult = ({ inputValue }) => {
    const [shortenLink, setShortenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);


    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
            setShortenLink(res.data.result.full_short_link)
        }
        catch (error) {

        } finally {

        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData();
        }
    }, [inputValue]);

    console.log(shortenLink);

    return (
        <>
            {shortenLink && (
                <div className='text-black flex ml-10'>
                    <div className='p-2'>
                        {shortenLink}
                    </div>
                    <CopyToClipboard
                        text={shortenLink}
                        onCopy={() => setCopied(true)}
                    >
                        <div className='border border-[#66C555] rounded-md h-10 w-20 pt-1 mr-5 hover:bg-[#66C555] hover:text-white font-semibold'>
                            <button className={copied ? "copied" : ""}>Copy</button>
                        </div>
                    </CopyToClipboard>
                </div>
            )}
        </>

    );
};

export default LinkResult;