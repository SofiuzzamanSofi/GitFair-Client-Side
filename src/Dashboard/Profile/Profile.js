import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
    const userInfo = useLoaderData();
    const {email, name, premiumUser} = userInfo;
    return (
        <div>
            {name}
            {email}
            
        </div>
    );
};

export default Profile;