import React from 'react'
import Avatar from 'react-avatar';

function Client({ client }) {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Avatar name={client?.userName} round="14px" size="60" />
            <span className='font-semibold text-xs'>{client?.userName}</span>
        </div>
    )
}

export default Client