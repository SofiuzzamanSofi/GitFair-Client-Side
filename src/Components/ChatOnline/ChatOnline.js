import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ChatOnline = () => {

    const { user, premiumUser, loading } = useContext(AuthContext)


    useEffect(() => {
        if (user && premiumUser) {
            console.log(premiumUser, user);
            window.onload = () => {
                window.$zoho = window.$zoho || {};
                window.$zoho.salesiq = window.$zoho.salesiq || {
                    widgetcode: "700a8570cb17a06ac3035b6a3729d395cc5af768207a20a324e90e82b91c97ee1a2010ab7b6727677d37b27582c0e9c4",
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

    return <div id="zsiqchat" />;
};

export default ChatOnline;
