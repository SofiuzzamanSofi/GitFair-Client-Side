import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import ACTIONS from './Actions';
import Client from './Client';
import EditorPart from './EditorPart';
import './Style.css';
import { initSocket } from './../../socket';
import { BiSend } from "react-icons/bi";
import Avatar from 'react-avatar';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

const LiveEditor = () => {


    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
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
                reactNavigate("/dashboard/liveSharing");
            }


            // new joined client send to backend ---
            socketRef.current.emit(ACTIONS.JOIN, {
                roomId,
                userName: location?.state?.userName
            });

            socketRef.current.on('message', (data) => {
                setMessages((messages) => [
                    ...messages,
                    { user: data.user, message: data.message }]);
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
    }, []);

    const handleSendMessage = (event) => {
        event.preventDefault();
        // const message = messageInputRef.current.value;
        socketRef.current.emit('message', { message: messageInput, user: location?.state?.userName });
        setMessageInput('');
    };


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
        reactNavigate("/dashboard/liveSharing");
    }


    if (!location?.state) {
        return <Navigate to="/dashboard/liveSharing" />
    }


    return (
        <div>
            <div className="navbar bg-black">
                <div>
                    <h3 className='people font-bold mx-2'>Connected</h3>
                    {/* clients avatar show -----  */}
                    <div className='flex gap-2'>
                        {clients && clients?.map((client, index) => (
                            <Client key={index} client={client} />
                        ))}
                    </div>
                </div>

            </div>
            <div className='flex'>
                <div className='lg:w-9/12 w-4/6 bg-[#282A36] editor'>

                    {/* this is code editor textarea -------------- */}
                    <EditorPart
                        socketRef={socketRef}
                        roomId={roomId}
                        onCodeChange={(code) => {
                            codeRef.current = code;
                        }}
                    />
                </div>
                <div className='text-black border lg:w-2/6'>
                    <div className='mb-2 flex justify-between bg-[#cbd5e1] p-2'>
                        <button className='btn btn-success rounded text-white uppercase btn-xs text-[10px]'
                            onClick={copyRoomId}
                        >
                            Copy ID
                        </button>
                        <button className='btn btn-error rounded text-white uppercase btn-xs text-[10px]'
                            onClick={leaveRoome}
                        >
                            Leave Room
                        </button>
                    </div>
                    <div className=''>
                        <div className='chat chat-start lg:h-[58vh] h-[54vh] sm:h-[43vh] overflow-auto block'>
                            {messages.map((message, index) => (
                                <div className='text-[14px] chat-bubble mb-1 rounded-xl' key={index}>
                                    <strong className='lg:text-[12px] text-[10px]'><Avatar name={message.user} round="14px" size="30" />{message.user}: </strong>{message.message}
                                </div>
                            ))}
                        </div>
                        <div >
                            <form className='flex' onSubmit={handleSendMessage}>
                                <input className="w-full input input-bordered input-sm bg-white input-success"
                                    type="text"
                                    value={messageInput}
                                    onChange={(event) => setMessageInput(event.target.value)}
                                    placeholder="Type Message here"
                                />
                                <button className='text-2xl' type="submit"><BiSend /></button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveEditor;