import React, { useEffect, useRef } from 'react';
import EditorPart from './EditorPart';
// import ACTIONS from '../../Actions';
import './Style.css';
import { initSocket } from './../../socket';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

const LiveEditor = () => {

    const socketRef = useRef(null);
    // const codeRef = useRef(null);
    // const location = useLocation();
    // const { roomId } = useParams();
    // const reactNavigator = useNavigate();
    // const [clients, setClients] = useState([]);

    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket();
            // socketRef.current.on('connect_error', (err) => handleErrors(err));
            // socketRef.current.on('connect_failed', (err) => handleErrors(err));

            // function handleErrors(e) {
            //     console.log('socket error', e);
            //     toast.error('Socket connection failed, try again later.');
            //     reactNavigator('/dashboard/dashboard/liveSharing');
            // }

            // socketRef.current.emit(ACTIONS.JOIN,{
            //     roomId,
            //     userName: location.state?.userName,
            // });

             // Listening for joined event
        };
        init();
    }, [])

    return (
        <div>
            <div className="navbar  place-content-end bg-black">
                <button className='btn btn-success uppercase rounded-xl mx-5'>Copy ID</button>
                <button className='btn btn-error rounded-xl text-white uppercase'>Leave Room</button>
            </div>
            <div className='flex'>
                <div className='w-3/4 bg-[#282A36] editor'><EditorPart/></div>
                <div className='text-black'>
                    <div>
                        <h3 className='people'>Connected People</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveEditor;