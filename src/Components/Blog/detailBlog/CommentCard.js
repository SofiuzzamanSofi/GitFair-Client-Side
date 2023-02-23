import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import userimg from '../../../assets/resources/avatar2.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const CommentCard = ({ u, refetch }) => {
    const { user } = useContext(AuthContext)
    const { comment,
        profilepic,
        _id,
        userName,
        time,
        email
    } = u


    const handleDeleteComment = () => {
        alert('Are you sure you want to delete this comment?')
        if (user?.email === email) {
            axios.delete(`http://localhost:5000/comments/${_id}`)
                .then(data => {
                    console.log("like deleted success:", data?.data);
                    // cll refetch to update ontime ----
                    toast.success('comment deleted succssfully')
                    refetch();
                })
                .catch(error => console.log("error from comment add axios catch:", error));
        }
        else {
            toast.error('Sorry sir! You cannot delete others comment.')
        }


    }
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
                        <div className="chat-bubble relative group px-5 shadow-xl text-black bg-gray-400 rounded-2xl min-h-[70px] text-xs lg:text-sm">
                            {/* delete comment button  */}
                            <button onClick={handleDeleteComment} className='absolute right-1 hidden group-hover:inline top-1 '><span className=''>X</span></button>

                            <span className='font-bold text-[14px]'> {userName}
                                <span className=''><p className='text-[10px] text-black '>{time}</p></span>
                            </span>
                            <br />
                            {comment}</div>
                        :
                        <div className="chat-bubble relative px-5 group shadow-xl bg-gray-400 text-black  rounded-2xl min-h-[70px] text-[15px] lg:text-[20px]">
                            {/* delete comment button  */}
                            <button onClick={handleDeleteComment} className='absolute hidden group-hover:inline right-1 top-1'><span className=''>X</span></button>

                            <span className='font-bold text-[14px]'> {userName}
                                <span className=''><p className='text-[10px] text-black'>{time}</p></span>
                            </span>

                            <br />
                            {comment}  </div>
                }

            </div>


        </div>


    );
};

export default CommentCard;