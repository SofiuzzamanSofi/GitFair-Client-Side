import axios from "axios";
import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/cookieCreate/jwt?email=${user?.email}`, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    setToken(true);
                })
        }
    }, [user]);
    return [token]
};

export default useToken;