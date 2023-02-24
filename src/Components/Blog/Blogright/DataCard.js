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
    const [refreshReview, setRefreshReview] = useState(false)
    const { image, post, userName, _id, profilepic, time, title } = data


    useEffect(() => {

        fetch(`http://localhost:5000/comment/${_id}`)
            .then(res => res.json())
            .then(data => {
                setComment(data)
                setRefreshReview(!refreshReview)
            })
    }, [_id, refreshReview])




    useEffect(() => {

        fetch(`http://localhost:5000/likes/${_id}`)
            .then(res => res.json())
            .then(data => {
                setLikes(data)
                setRefreshReview(!refreshReview)
            })

    }, [_id, refreshReview])




    return (

        <div>

            <Link to={`/bloglayout/detailblog/${_id}`}>
                <div className="card lg:hidden md:hidden rounded-2xl mb-12 lg:h-[600px] bg-white shadow-xl lg:min-h-[600px] relative max-w-md lg:w-[400px] mx-auto">

                    <figure><img src={image} className='md:h-[350px] lg:h-[350px] md:w-[400px] w-full lg:w-full' alt="Album" /></figure>
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

            <div className='p-5 mt-6  hidden lg:inline md:inline'>
                <Link to={`/bloglayout/detailblog/${_id}`}>
                    <div className='card bg-white shadow-xl hover:shadow-2xl duration-500 p-10'>

                        {
                            title?.length > 60
                                ?
                                <h1 className='text-3xl font-bold text-black'>{title.slice(0, 60) + '...'}</h1>
                                :
                                <h1 className='text-3xl font-bold text-black'>{title}</h1>
                        }
                        <p className='font-bold mt-5 text-slate-600'><span className='mr-1'>Published:</span>{time} by <span className='text-[#66C555]'>{userName}</span></p>
                        <div>
                            <div className="card lg:card-side mt-9 bg-white">

                                <figure><img src={image} className='h-[300px] w-[300px] object-fill' alt="Album" /></figure>
                                <div className="card-body lg:w-[400px]">

                                    {post?.length > 250
                                        ?
                                        <p className='text-black text-xl'>{post.slice(0, 250) + '...'} <span className='font-bold'>See more</span></p>
                                        :
                                        <p className='text-black text-xl'>{post}</p>

                                    }

                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className='flex justify-end gap-9 mt-4'>
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
                </Link >
            </div>

        </div>
    );
};

export default DataCard;