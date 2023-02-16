import React from 'react';
import userimg from '../../../assets/resources/avatar2.png'

const CommentCard = ({ u }) => {
    const { comment,
        profilepic,
        userName,
        time
    } = u
    return (



        <div>
            <div className="chat chat-start relative">
                {
                    profilepic
                        ?
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={profilepic} alt='' />
                            </div>
                        </div>
                        :
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={userimg} alt='' />
                            </div>
                        </div>
                }

                {
                    comment?.length > 50
                        ?
                        <div className="chat-bubble shadow-xl text-black bg-gray-400 rounded-2xl min-h-[70px] text-xs lg:text-sm">
                            <span className='font-bold text-[14px]'> {userName}
                                <span className=''><p className='text-[10px] text-black '>{time}</p></span>
                            </span>
                            <br />
                            {comment}</div>
                        :
                        <div className="chat-bubble shadow-xl bg-gray-400 text-black  rounded-2xl min-h-[70px] text-[15px] lg:text-[20px]">
                            <span className='font-bold text-[14px]'> {userName}
                                <span className=''><p className='text-[10px] text-black'>{time}</p></span>
                            </span><br />
                            {comment}</div>
                }

            </div>


        </div>


    );
};

export default CommentCard;