import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import userimg from '../../../../assets/resources/avatar2.png'


const ViewBlogs = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [time, setTime] = React.useState(new Date());


    React.useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);
    console.log()





    const url = `https://gitfair-server-hopefyjamshed.vercel.app/upload`;

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    refetch()


    const handleUpload = data => {
        // new uploaded process 

        console.log(data.text, data.photo)
        const image = data?.photo[0];
        const formData = new FormData();
        formData.append("file", image);
        formData.append('upload_preset', 'aafkdxzr')
        formData.append('cloud_name', 'dmfh8s0bz')

        fetch('https://api.cloudinary.com/v1_1/dmfh8s0bz/image/upload', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imginfo => {

                if (imginfo) {
                    const img = imginfo?.url;
                    const date = time.toLocaleString()
                    const uploadData = {
                        image: img,
                        title: data.title,
                        post: data.text,
                        email: user?.email,
                        profilepic: user?.photoURL,
                        userName: user?.displayName,
                        time: date
                    }

                    fetch('https://gitfair-server-hopefyjamshed.vercel.app/upload', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(uploadData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('successfully posted!')
                            reset()
                            navigate('/bloglayout/blog')

                        })

                }


            })

    }




    return (
        <div className=''>
            {/* upload a file  */}
            <div className='hidden'>
                <span>{time.toLocaleString("en-US", {

                    dateStyle: "medium",
                    timeStyle: "short",
                    hour24: false,

                })} </span>;
            </div>


            {/* modal  */}
            <div className=''>
                {/* modal  */}
                {/* The button to open modal */}


                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle bg-blur" />
                <div className="modal">
                    <div className="modal-box bg-white rounded-2xl w-11/12 max-w-5xl">

                        {/* form  */}
                        <div className='flex'>
                            {
                                user?.photoURL
                                    ?
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={userimg} alt='' />
                                        </div>
                                    </div>
                            }


                            <h3 className='font-bold ml-3 text-xl lg:text-2xl text-[#66C555]'>{user?.displayName}</h3>
                        </div>
                        <div className='mx-[50px] mt-5 bg-transparent p-5'>
                            <form onSubmit={handleSubmit(handleUpload)} className='mx-6'>
                                {/* textarea  */}
                                <div className=' justify-center'>


                                    <div>
                                        <textarea name='title' {...register('title')} className="textarea outline mb-3 text-black w-full text-xl lg:text-2xl bg-transparent rounded-none textarea-white " placeholder={`Title`}></textarea>
                                    </div>
                                    <textarea name='text' {...register('text')} className="textarea outline mb-3  w-full text-black text-xl lg:text-2xl bg-transparent rounded-none textarea-white " placeholder={`Description`}></textarea>
                                </div>
                                <hr />
                                {/* photo field  */}
                                <div className='flex justify-between items-center mt-4'>
                                    <input name='photo' {...register('photo')} type="file" className='bg-[#66C555] w-full lg:w-[250px] text-white rounded-full mt-3' placeholder='Photo' />
                                    <input className='btn bg-[#66C555] uppercase text-sm] text-white rounded-lg ml-3 border-none h-[15px]' type="submit" value="Post" />
                                </div>
                            </form>
                        </div>


                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn normal-case border-none rounded-lg bg-red-600">Cancel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBlogs;




