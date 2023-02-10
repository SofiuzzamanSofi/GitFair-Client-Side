import React from 'react';
import { Link } from 'react-router-dom';
import userimg from '../../../assets/resources/avatar2.png'




const DataCard = ({ data, refetch }) => {
    refetch()
    const { image, post, userName, _id, profilepic, time, title } = data
    return (
        <div className='mb-5 mt-1' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">

            <div className="card lg:h-[600px] bg-white shadow-xl">

                <figure><img src={image} className=' h-full w-full' alt="Album" /></figure>
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
                    <div className=''>
                        <h1 className='text-2xl font-bold text-black'>{title}</h1>
                        {post?.length > 200
                            ?
                            <p className='text-black'>{post.slice(0, 200) + '...'} <Link to={`/bloglayout/detailblog/${_id}`} className='font-bold'>See more</Link></p>
                            :
                            <p className='text-black'>{post}</p>

                        }

                    </div>
                    <hr />

                    <div className='flex mt-5 justify-between'>

                        {
                            post?.length > 200 ?
                                <></>
                                :
                                <Link to={`/bloglayout/detailblog/${_id}`}><button className='text-black font-bold'>View Blog</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataCard;