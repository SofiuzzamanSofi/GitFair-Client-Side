import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Share/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    else if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace />
    };
};

export default PrivateRoute;