import { PickerOverlay } from 'filestack-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './FilePicker.css'

const FilePicker = ({ setShowPicker }) => {
    
    const {user} = useContext(AuthContext);

    return (
        <div className='mr-5'>
            <PickerOverlay
                apikey="A4GovH9aYQxekmQn2uFOLz"
                
                pickerOptions={{
                    accept: [".js",".json",".html"]
                }}
                
                onUploadDone={(res) => {
                    setShowPicker(false);
                    // const myFiles = [res.filesUploaded[0]]
                    
                    const myFiles = {
                        email: user?.email,
                        uid: user?.uid,
                        filename: res.filesUploaded[0].filename,
                        mimetype: res.filesUploaded[0].mimetype,
                        originalPath: res.filesUploaded[0].originalPath,
                        url: res.filesUploaded[0].url,
                        size: res.filesUploaded[0].size,
                        handle: res.filesUploaded[0].handle,
                        mimetype: res.filesUploaded[0].mimetype
                    }
                    // console.log(myFiles);
                    fetch('https://file-upload-server-gitfair.glitch.me/files', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(myFiles)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('File Uploaded Successfully');
                            }else{
                                toast.error('Database upload failed');
                            }
                        })
                }}
            ></PickerOverlay>
        </div>
    );
};

export default FilePicker;