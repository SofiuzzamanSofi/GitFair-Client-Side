import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ChatOnline = () => {

    const { user, premiumUser, loading } = useContext(AuthContext)


    useEffect(() => {
        if (user && premiumUser) {
            // console.log(premiumUser, user);
            window.onload = () => {
                window.$zoho = window.$zoho || {};
                window.$zoho.salesiq = window.$zoho.salesiq || {
                    widgetcode: process.env.REACT_APP_URL_ZOHO_SQ,
                    values: {},
                    ready: function () { }
                };

                let d = document;
                let s = d.createElement("script");
                s.type = "text/javascript";
                s.id = "zsiqscript";
                s.defer = true;
                s.src = "https://salesiq.zoho.com/widget";
                let t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(s, t);
            }
        }
    }, [user, premiumUser, loading]);



    if (user && premiumUser) {
        return <div id="zsiqchat" className='print:hidden' />;
    } else {
        return <div className='print:hidden' />;
    }
};

export default ChatOnline;
