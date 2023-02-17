import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../Components/Share/Loading/Loading';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
    const userInfo = useLoaderData();
    console.log(userInfo);
    const { name, email, premiumUser } = userInfo;

    // loader
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="card card-side rounded-2xl  bg-gradient-to-r from-slate-200 to-blue-100 py-10 mt-12 shadow-xl">
            <div>
                <div className="card-body text-slate-800">
                    <h1 className='card-title text-3xl font-bold '>My Profile</h1>
                    <div className='text-slate-600 py-6'>
                        <p>Name:
                            <span className='pl-14 md:pl-20'>{name}</span>
                        </p>
                        <p className='py-1'>Email:
                            <span className='pl-14 md:pl-20'> {email}</span>
                        </p>
                        <p>Membership:
                            <span className='pl-2 md:pl-8'>
                                {
                                    premiumUser ?
                                        "Premium" : "Free"
                                }
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;