import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import CommentCard from './CommentCard';
import userimg from '../../../assets/resources/avatar2.png'
import { AiTwotoneLike } from "react-icons/ai"
import axios from 'axios';
import { toast } from 'react-hot-toast';


const DetailBlog = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const infos = useLoaderData();
    const [date, setDate] = React.useState(new Date());
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState('')
    const navigate = useNavigate()
    const [refreshReview, setRefreshReview] = useState(false)

    React.useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, []);
    console.log()

    const { post, profilepic, email, image, time, userName, title, _id } = infos

    useEffect(() => {
        if (user?.email) {
            fetch(`https://file-upload-server-gitfair.glitch.me/likes/${_id}`)
                .then(res => res.json())
                .then(data => {
                    setLikes(data)
                    setRefreshReview(!refreshReview)
                })
        }
    }, [refreshReview, _id, user?.email])




    const handleComment = data => {
        const pubDate = date.toLocaleString()
        const commentData = {
            comment: data.text,
            email: user?.email,
            profilepic: user?.photoURL,
            userName: user?.displayName,
            time: pubDate,
            id: _id
        }



        //     })
        axios.post(`https://file-upload-server-gitfair.glitch.me/comment`, commentData)
            .then(data => {
                reset()
            })
            .catch(error => console.log("error from comment add axios catch:", error));

    }

    const handlelike = () => {
        const likeData = {
            email: user?.email,
            userName: user?.displayName,
            id: _id
        }

        fetch('https://file-upload-server-gitfair.glitch.me/like', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeData)
        })
            .then(res => res.json())
            .then(data => {
                setRefreshReview(!refreshReview)

            })


    }

    const handleDeleteLike = () => {

        fetch(`https://file-upload-server-gitfair.glitch.me/likes/${user?.email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setRefreshReview(!refreshReview)
            })

    }



    const handleDeleteBlog = () => {

        alert('Are you sure you want to delete this blog?')
        if (user?.email === email) {
            axios.delete(`https://file-upload-server-gitfair.glitch.me/uploaded/${_id}`,)
                .then(data => {
                    toast.success('Blog Deleted')
                    navigate('/bloglayout/blog')
                })
                .catch(error => console.log("error from comment add axios catch:", error));
        }
        else {
            toast.error('sorry sir! You cannot Delete Others Blog.')
        }

    }


    useEffect(() => {

        fetch(`https://file-upload-server-gitfair.glitch.me/comment/${_id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
                setRefreshReview(!refreshReview)
            })
    }, [refreshReview, _id])



    return (
        <div className='w-full lg:w-[1240px] mx-auto bg-white px-5 py-12 min-h-screen'>

            <div className='hidden'>
                <span>{time.toLocaleString("en-US", {

                    dateStyle: "medium",
                    timeStyle: "short",
                    hour24: false,

                })} </span>;
            </div>
            {/* blog delete button  */}
            <button onClick={handleDeleteBlog} title='Delete Blog' className='text-3xl h-12 w-12 text-black hover:bg-gray-400 hover:text-white rounded-full'><span>X</span></button>

            <h1 className='font-bold text-2xl lg:text-5xl mb-5 text-slate-600 mt-8 text-center'>{title}</h1>
            <hr />
            <div className='flex justify-between items-center my-3'>

                <div className='h-12 flex items-center'>
                    <div className="avatar">
                        <div className="w-12 mr-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={profilepic} alt='pic' />
                        </div>
                    </div>
                    <h1 className='text-xl ml-2 text-[#66C555]  font-bold'>{userName}</h1>

                </div>
                <p className='font-bold  text-slate-600'><span className='mr-1'>Published:</span>{time}</p>
            </div>

            <hr />


            {
                image ?
                    <img className='w-full mx-auto lg:w-[600px] mt-8' src={image} alt="" />
                    :
                    ''
            }
            <h1 className='text-xl mt-6 mb-12 text-slate-600'>{post}</h1>

            {/* like button  */}
            {
                likes[0]?.email === user?.email
                    ?
                    <p className='text-black md:text-xl font-semibold'>You and {likes?.length - 1} other people likes it</p>
                    :
                    <p className='text-black md:text-xl font-semibold' title={likes[0]?.userName}>{likes?.length} people likes it</p>
            }
            <hr />
            <div>
                {
                    likes[0]?.email === user?.email
                        ?
                        <button className='mt-0' onClick={handleDeleteLike}>
                            <AiTwotoneLike className='text-lime-500 text-5xl'></AiTwotoneLike>
                        </button>
                        :
                        <button className='mt-0' onClick={handlelike}>
                            <AiTwotoneLike className='text-gray-500 text-5xl'></AiTwotoneLike>
                        </button>
                }

            </div>
            <hr />
            <div className='mt-6 bg-gray-100 p-2 lg:p-9'>


                <form onSubmit={handleSubmit(handleComment)} className='mx-6'>

                    <div className='flex items-center'>

                        {
                            user?.photoURL
                                ?
                                <div className="avatar">
                                    <div className="w-12 h-12 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} alt='user img' />
                                    </div>
                                </div>
                                :
                                <div className="avatar">
                                    <div className="w-12 h-12 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={userimg} alt='user img' />
                                    </div>
                                </div>
                        }

                        <textarea name='text' {...register('text', { required: 'please write something first!' })} className="textarea outline mb-3  w-full text-xl lg:text-2xl bg-white rounded-none textarea-white text-black" placeholder={`Add a Comment...`}></textarea>

                        <input className='btn hidden lg:inline bg-[#66C555] uppercase text-sm] text-white rounded-lg ml-3 border-none h-[15px]' type="submit" value="Post" />
                    </div>

                    <input className='btn inline lg:hidden bg-[#66C555] uppercase text-sm] text-white rounded-lg ml-3 border-none w-full mb-5 h-[15px]' type="submit" value="Post" />

                </form>
                <div className='lg:ml-5 mt-5 '>
                    {
                        comments?.map(u => <CommentCard
                            key={u._id}
                            u={u}
                            _id={_id}
                        ></CommentCard>)
                    }
                </div>
                <div>

                </div>

            </div>

        </div >
    );
};

export default DetailBlog;