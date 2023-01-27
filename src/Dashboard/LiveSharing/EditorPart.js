import React, { useEffect, useRef } from 'react';
import './Style.css';
import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import ACTIONS from './Actions';

const EditorPart = ({ socketRef, roomId, onCodeChange }) => {

    const editorRef = useRef(null);

    useEffect(() => {
        async function init() {
            editorRef.current = codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: { name: 'javascript', json: true },
                    theme: 'dracula',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );

            // codemirror onchange listener --
            editorRef.current.on("change", (instance, changes) => {
                const { origin } = changes;
                // get code form code editor --- 
                const code = instance.getValue();
                // set code on codeRef because new user show on entry the room --- 
                onCodeChange(code);
                if (origin !== "setValue") {
                    // send code to the backend------ 
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code,
                    })
                }
            });

        }
        init();
    }, []);

    useEffect(() => {
        // get code from backend ------ 
        if (socketRef?.current) {
            socketRef?.current?.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                // console.log("codeId from 50 lines:", code)
                if (code !== null) {
                    // set backend code on my code editor -- 
                    editorRef?.current?.setValue(code);
                }
            })
        }

        // unSubsCribe functions --- 
        return () => {
            socketRef?.current?.off(ACTIONS.CODE_CHANGE)
        }


    }, [socketRef, socketRef?.current]);



    return <textarea id="realtimeEditor"></textarea>;
};

export default EditorPart;