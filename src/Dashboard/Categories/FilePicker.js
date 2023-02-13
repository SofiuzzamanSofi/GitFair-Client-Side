import { PickerOverlay } from 'filestack-react';
import React from 'react';
import { toast } from 'react-hot-toast';
import './FilePicker.css'

const FilePicker = ({ setShowPicker }) => {
    return (
        <div className='mr-5'>
            <PickerOverlay
                apikey="A4GovH9aYQxekmQn2uFOLz" onUploadDone={(res) => {
                    setShowPicker(false);
                    let myFiles = [res.filesUploaded[0]]
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
                                toast.success('New media has been added Successfully');
                            }
                        })
                }}
            ></PickerOverlay>
        </div>
    );
};

export default FilePicker;