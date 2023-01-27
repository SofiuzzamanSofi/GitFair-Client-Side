import React, { useEffect, useRef } from 'react';
import './Style.css';
import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import ACTIONS from './Actions';

const EditorPart = ({ socketRef, roomId }) => {

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
                console.log(changes, ":ccccccccccchanges")
                const { origin } = changes;
                const code = instance.getValue();
                if (origin !== "setValue") {
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code: code,
                    })
                }
                console.log(code);
            });
            // editorRef.current.setValue("console.log(125)")
        }
        init();
    }, []);
    return (
        <div className=''>
            <textarea id="realtimeEditor"></textarea>
        </div>
    );
};

export default EditorPart;