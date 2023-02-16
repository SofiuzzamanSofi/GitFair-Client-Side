import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import DataCard from './DataCard';


const Blogright = () => {
    const { user } = useContext(AuthContext)

    const url = 'https://gitfair-server-hopefyjamshed.vercel.app/upload'
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    refetch()


    return (

        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-[100px] group' >

                {
                    users.map(data => <DataCard
                        key={data._id}
                        data={data}
                        refetch={refetch}
                    ></DataCard>)
                }
            </div>

        </div>
    );
};

export default Blogright;