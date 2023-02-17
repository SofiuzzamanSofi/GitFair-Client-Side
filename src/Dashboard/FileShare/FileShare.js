import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Preview from './Preview';

const FileShare = () => {

    const [file, setFile] = useState([])
    const {user} = useContext(AuthContext);

    // console.log(user?.uid)

    useEffect(() =>{
        fetch(`https://file-upload-server-gitfair.glitch.me/all-files/${user?.email}`)
        .then(res => res.json())
        .then(data => setFile(data))
    },[])

    return (
        <div>
            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className='text-4xl mb-7'>Your File Details</h1>
                
            </div>
           <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Type</th>
                            <th>Size</th>
                            <th>Share</th>
                            <th>Enable Download</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>            
            {
                file.map(files => <Preview
                key={files._id}
                files={files}
                ></Preview>)
            }
          
                </table>
            </div>
           
        </div>
    );
};

export default FileShare;