import React, { useEffect } from 'react';
import './Style.css';
import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const EditorPart = () => {

    useEffect(() =>{
        async function init(){
            codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: { name: 'javascript', json: true },
                    theme: 'dracula',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                });
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