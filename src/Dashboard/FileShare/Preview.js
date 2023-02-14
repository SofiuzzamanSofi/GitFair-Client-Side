import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";

const Preview = ({ files }) => {
    const { filename,  mimetype, size, handle } = files;
    const [downloadUrl, setDownloadUrl] = useState(null);

    const handleDownload = async () => {
        try {
            const response = await fetch(
                `https://cdn.filestackcontent.com/${handle}`,
                { method: 'GET' }
            );
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
        } catch (error) {
            console.error(error);
        }
    };


    return (
       
            <tbody className=''>
                <tr className=''>
                    <td>
                        <div className="flex items-center space-x-3">

                            <div>
                                <div className="font-bold">{filename}</div>
                                {/* <div className="text-sm opacity-50">United States</div> */}
                            </div>
                        </div>
                    </td>
                    <td>

                        <br />
                        <span className="badge badge-ghost badge-sm">{mimetype}</span>
                    </td>
                    <td>{size}B</td>
                    <th>

                        <div className='flex justify-between'>
                            <button onClick={handleDownload}>Download <br /></button>
                            {downloadUrl && (
                                <a href={downloadUrl} download={filename}>
                                    <BsDownload />
                                </a>
                            )}
                        </div>
                       
                    </th>
                </tr>

            </tbody>
            
        
    );
};

export default Preview;