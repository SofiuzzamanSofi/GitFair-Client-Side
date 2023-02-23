import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuidV4 } from 'uuid';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LiveSharing = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [userName, setuserName] = useState(user?.displayName);
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        // console.log(id)
        setRoomId(id);
        toast.success('New Room ID Generated');
    };

    const joinRoom = () => {
        if (!roomId || !userName) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/dashboard/liveSharing/${roomId}`, {
            state: {
                userName,
                roomId,
            },
        });
    };


    return (
        <div className='grid place-items-center h-screen'>
            <div className="card card-compact sm:w-2/3 bg-base-100 shadow-xl rounded-xl py-12">
                <figure><img src="https://i.ibb.co/XFmb29G/logo.png" alt="logo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Share your Room ID with others to join together</h2>
                    <h2 className="text-[#fca5a5]">If Joining failed, then try again later after 1/2 minutes</h2>
                    <div className='sm:flex'>
                        <input type="text" onChange={(e) => setRoomId(e.target.value)} value={roomId} placeholder="Room ID" className="input w-full bg-white text-black" />
                        <button onClick={createNewRoom} className="btn btn-outline btn-warning uppercase">Generate New ID</button>
                    </div>
                    <div className="card-actions justify-Start">
                        <button onClick={joinRoom} className="btn btn-primary bg-[#66C555] text-white rounded-xl uppercase">Join Room</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveSharing;