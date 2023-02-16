import React, { useEffect, useState } from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage';
import Editor from './Editor';
import './Compiler.css';
const Compiler = () => {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `)
        }, 250)

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (

        <div className='bg-white min-h-screen lg:w-[1240px] m-auto p-10 rounded-2xl'>
            <h1 className='text-black text-2xl mb-5 font-bold'>Test Your Code Here:</h1>
            <>
                <div className="pane top-pane">
                    <Editor
                        language='xml'
                        displayName='HTML'
                        value={html}
                        onChange={setHtml}
                    />

                    <Editor
                        language='css'
                        displayName='CSS'
                        value={css}
                        onChange={setCss}
                    />

                    <Editor
                        language='javascript'
                        displayName='JS'
                        value={js}
                        onChange={setJs}
                    />

                </div>
                <h1 className='editor-title mt-5'>OUTPUT</h1>

                <div className="pane border-x-2">
                    <iframe className=''
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                    />
                </div>

            </>
        </div>
    );
};

export default Compiler;