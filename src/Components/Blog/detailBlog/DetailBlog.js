import { useLoaderData, } from 'react-router-dom';

const DetailBlog = () => {
    const infos = useLoaderData();
    console.log(infos)
    const { post, profilepic, image, time, userName, title } = infos



    return (
        <div className='w-full lg:w-[1240px] mx-auto bg-white px-5 py-12 min-h-screen'>
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


            <img className='w-full mx-auto lg:w-[600px] mt-8' src={image} alt="" />
            <h1 className='text-xl mt-6 text-slate-600'>{post}</h1>


        </div>
    );
};

export default DetailBlog;