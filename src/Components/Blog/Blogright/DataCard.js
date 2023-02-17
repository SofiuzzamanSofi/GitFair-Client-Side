import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userimg from '../../../assets/resources/avatar2.png'
import { FaRegCommentAlt } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai"
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const DataCard = ({ data, refetch }) => {
    const { user } = useContext(AuthContext)
    const [comment, setComment] = useState([])
    const [likes, setLikes] = useState([])
    const { image, post, userName, _id, profilepic, time, title } = data

    refetch()
    // get comment amount 
    const url = `https://file-upload-server-gitfair.glitch.me/comment/${_id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    // get likes amount 
    const link = `https://file-upload-server-gitfair.glitch.me/likes/${_id}`
    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(data => setLikes(data))
    }, [])





    return (

        <div className="card lg:min-h-[600px] relative max-w-md lg:w-[400px] mx-auto bg-white shadow-xl rounded-2xl hover:rounded-2xl hover:shadow-black duration-500">

            <Link to={`/bloglayout/detailblog/${_id}`}>
                <div className="card rounded-2xl lg:h-[600px] bg-white shadow-xl">

                    <figure><img src={image} className='md:h-[350px] lg:h-[350px] md:w-[400px] w-fill lg:w-full' alt="Album" /></figure>
                    <div className="card-body ">
                        <div className='flex items-center mb-4'>
                            <div className="avatar">
                                <div className="w-9 mt-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {
                                        profilepic ?
                                            <img src={profilepic} alt='profilepicutre' />
                                            :
                                            <img src={userimg} alt='alternative profile pic'></img>
                                    }

                                </div>
                            </div>
                            <div className='ml-2 h-9'>
                                <h3 className='ml-4 text-left text-black font-bold'>{userName}</h3>
                                <h1 className='text-black text-left'>{time}</h1>
                            </div>

                        </div>
                        <hr />
                        <div className='min-h-[100px]'>
                            {
                                title?.length > 20
                                    ?
                                    <h1 className='text-xl font-bold text-black'>{title.slice(0, 20) + '...'}</h1>
                                    :
                                    <h1 className='text-2xl font-bold text-black'>{title}</h1>
                            }
                            {post?.length > 100
                                ?
                                <p className='text-black'>{post.slice(0, 100) + '...'} <span className='font-bold'>See more</span></p>
                                :
                                <p className='text-black'>{post}</p>

                            }

                        </div>
                        <hr />



                        <div className='mt-3'>
                            <div className='flex justify-between gap-3 '>

                                <div className='flex items-center'>
                                    <div className=' rounded-full p-1 mr-1 bg-lime-600'>
                                        <AiTwotoneLike className='text-white'></AiTwotoneLike>
                                    </div>
                                    {
                                        likes[0]?.email === user?.email
                                            ?
                                            <h1 className='text-black text-xl font-semibold'> You and {likes.length - 1} other</h1>
                                            :
                                            <h1 className='text-black text-xl font-semibold'>{likes.length}</h1>
                                    }
                                </div>
                                <div className='flex'>
                                    <h1 className=' text-xl  text-black'>{comment.length} <FaRegCommentAlt className='inline'></FaRegCommentAlt> </h1>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </Link>
        </div>
    );
};

export default DataCard;