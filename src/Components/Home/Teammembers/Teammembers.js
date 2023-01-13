import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const teammembers = [
    {
        id: 1,
        image: "https://i.ibb.co/z4Qp056/Rectangle-13.png",
        name: "Sofi",
        designation: "Team Leader",
        fb: "/",
        ld: "/",
        tw: "/"
    },
    {
        id: 2,
        image: "https://i.ibb.co/z4Qp056/Rectangle-13.png",
        name: "Nayeem",
        designation: "Developer",
        fb: "/",
        ld: "/",
        tw: "/"
    },
    {
        id: 3,
        image: "https://i.ibb.co/z4Qp056/Rectangle-13.png",
        name: "Salim",
        designation: "Developer",
        fb: "/",
        ld: "/",
        tw: "/"
    },
    {
        id: 4,
        image: "https://i.ibb.co/z4Qp056/Rectangle-13.png",
        name: "Taimul",
        designation: "Developer",
        fb: "/",
        ld: "/",
        tw: "/"
    },
    {
        id: 5,
        image: "https://i.ibb.co/z4Qp056/Rectangle-13.png",
        name: "Jahidul Islam",
        designation: "Developer",
        fb: "/",
        ld: "/",
        tw: "/"
    },
    {
        id: 6,
        image: "https://i.ibb.co/z4Qp056/Rectangle-13.png",
        name: "Rubel hossain",
        designation: "Developer",
        fb: "/",
        ld: "/",
        tw: "/"
    },
]

const Teammembers = () => {
    return (
        <div className='bg-[#000] text-white'>
            <div className='lg:w-[1240px] m-auto pt-56 small-display md:px-10 sm:px-10'>
                <div className='border-l-8 border-[#66C555] '>
                    <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4'>Our Team Members</h2>
                </div>
                <div className='grid mx-auto lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  lg:max-w-screen lg:px-10'>
                    {
                        teammembers?.map(teammember => {
                            return (
                                <>
                                    <div key={teammember.id} className='lg:pt-14 lg:pb-14 small-d-p-top' >
                                        <div className='flex gap-5'>
                                            <img src={teammember.image} alt='t-img' />
                                            <div>
                                                <h3 className='text-2xl font-medium'>{teammember.name}</h3>
                                                <h5 className='text-base font-normal'>{teammember.designation}</h5>
                                                <div className='mt-1 flex gap-3'>
                                                    <Link to={teammember.fb}>
                                                        <BsFacebook />
                                                    </Link>
                                                    <Link to={teammember.fb}>
                                                        <BsTwitter />
                                                    </Link>
                                                    <Link to={teammember.fb}>
                                                        <BsLinkedin />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Teammembers;