import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsDownload, BsShare,BsTrash} from "react-icons/bs";
import FilePicker from '../Categories/FilePicker';
import * as filestack from 'filestack-js';


const Preview = ({ files }) => {
    const { filename, mimetype, size, handle } = files;
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [link, setlink] = useState(`https://cdn.filestackcontent.com/${handle}`);

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
   
      
//handle copy link
    const copyLink = async () => {
        try {
            await navigator?.clipboard?.writeText(link);
            toast.success("Link Copied")
        }
        catch (error) {
            toast.error("Something went wrong, Couldn't copy the link")
            console.log(error);
        }
    }
//handle file remove


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
                <td><button onClick={copyLink}><BsShare/></button></td>
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
                {/* <td htmlFor="my-modal" className="btn"><BsTrash/></td> */}
                <td><button><BsTrash/></button></td>
                {/* <td><FilePicker
                    apikey="A4GovH9aYQxekmQn2uFOLz"
                    
                    onRemove={handleRemove}
                
                /></td> */}
            </tr>

        </tbody>


    );
};

export default Preview;