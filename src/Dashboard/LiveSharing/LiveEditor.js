import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import ACTIONS, { DISCONNECTED } from './Actions';
import Client from './Client';
import EditorPart from './EditorPart';
import './Style.css';
import { initSocket } from './../../socket';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

const LiveEditor = () => {

    const socketRef = useRef(null);
    const codeRef = useRef(null);
    const location = useLocation();
    const { roomId } = useParams();
    const reactNavigate = useNavigate();
    const [clients, setClients] = useState([
        // { socketId: 1, userName: "Ruhul Amin" },
        // { socketId: 2, userName: "Sofi Taimul" },
        // { socketId: 2, userName: "Sofi Taimul" },
        // { socketId: 2, userName: "Sofi Taimul" },
    ]);


    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket();
            socketRef.current.on("connect_error", (error) => handleErrors(error));
            socketRef.current.on("connect_failed", (error) => handleErrors(error));

            function handleErrors(e) {
                console.log("socket error", e);
                toast.error("Socket connection failed, try again later")
                reactNavigate("/liveSharing");
            }


            // new joined client send to backend ---
            socketRef.current.emit(ACTIONS.JOIN, {
                roomId,
                userName: location?.state?.userName
            });

            // listening for joined event notifications --
            socketRef.current.on(ACTIONS.JOINED, ({ clients, userName, socketId }) => {
                if (userName !== location.state?.userName) {
                    toast.success(`${userName} joined the room`);
                    // console.log("userNNNN:", userName);
                }
                setClients(clients);
                // SYNC other written code when any user joined ---
                socketRef.current.emit(ACTIONS.SYNC_CODE, {
                    code: codeRef.current,
                    socketId,
                })
            });

            // listening for DISCONNECTED ---
            socketRef.current.on(ACTIONS.DISCONNECTED, ({ userName, socketId }) => {
                toast.error(`${userName} left the room`);

                // set user/clients without(minus) disconnected users ---
                // disconnect user  কে বাদ দিয়ে বাকি গুলারে নিলাম ---
                setClients((previous) => {
                    return previous.filter(
                        client => client.socketId !== socketId
                    )
                })
            })
        };
        init();

        // unSubscribe function / when we left this will execute/ this will not happen memory leak ---
        return () => {
            socketRef?.current?.off(ACTIONS.JOINED);
            socketRef?.current?.disconnect();
            socketRef?.current?.off(ACTIONS.DISCONNECTED);
        }
    }, [])


    const copyRoomId = async () => {
        try {
            await navigator?.clipboard?.writeText(roomId);
            toast.success("Room Id has been copied to your clipboard.")
        }
        catch (error) {
            toast.error("Something went wrong, Couldn't copy the room id.")
            console.log(error);
        }
    }
    const leaveRoome = async () => {
        reactNavigate("/liveSharing");
    }


    if (!location?.state) {
        return <Navigate to="/liveSharing" />
    }


    return (
        <div>
            <div className="navbar place-content-end bg-black">
                <button className='btn btn-success rounded-xl mx-5 text-white uppercase'
                    onClick={copyRoomId}
                >
                    Copy ID
                </button>
                <button className='btn btn-error rounded-xl text-white uppercase'
                    onClick={leaveRoome}
                >
                    Leave Room
                </button>
            </div>
            <div className='flex'>
                <div className='w-11/12 bg-[#282A36] editor'>

                    {/* this is code editor textarea -------------- */}
                    <EditorPart
                        socketRef={socketRef}
                        roomId={roomId}
                        onCodeChange={(code) => {
                            codeRef.current = code;
                        }}
                    />
                </div>
                <div className='text-black text-center'>
                    <div className=''>
                        <h3 className='people font-bold'>Connected People</h3>

                        {/* clients avatar show -----  */}
                        <div className='flex items-center justify-center flex-wrap gap-4 py-4 max-w-[160px]'>
                            {clients && clients?.map((client, index) => (
                                <Client key={index} client={client} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveEditor;