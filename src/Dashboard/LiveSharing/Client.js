import React from 'react'
import Avatar from 'react-avatar';

function Client({ client }) {
    return (
        <div className='flex justify-center lg:items-center flex-col'>
            <Avatar name={client?.userName} round="14px" size="30" />
            <span className='font-semibold text-xs'>{client?.userName}</span>
        </div>
    )
}

export default Client