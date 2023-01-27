import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import img1 from '../../../assets/team-mates/personal.jpg';
import img2 from '../../../assets/team-mates/sofi.jfif';
import img3 from '../../../assets/team-mates/nayeem.jfif';
import img4 from '../../../assets/team-mates/rubel.jfif';
import img5 from '../../../assets/team-mates/taimul.jfif';
import img6 from '../../../assets/team-mates/jamshad.jfif';
import './Teammembers.css';

const teammembers = [
    {
        id: 1,
        image: img1,
        name: "Selim Alahi",
        designation: "Team Leader",
        fb: "https://www.facebook.com/alahi.selim",
        ld: "https://www.linkedin.com/in/selim-alahi",
        gt: "https://github.com/selimalahi"
    },
    {
        id: 2,
        image: img3,
        name: "Nayeem",
        designation: "Developer",
        fb: "https://github.com/mrseeker53",
        ld: "https://www.iedin.com/in/mrseeker53/",
        gt: "https://github.com/mrseeker53"
    },
    {
        id: 3,
         image: img2,
        name: "Sofi",
        designation: "Developer",
        fb: "https://www.facebook.com/sofiuzzaman.sofii",
        ld: "https://www.linkedin.com/in/sofiuzzaman-sf",
        gt: "https://github.com/SofiuzzamanSofi"
    },
    {
        id: 4,
        image: img5,
        name: "Taimul",
        designation: "Developer",
        fb: "https://www.facebook.com/Damagedbrain07",
        ld: "https://www.linkedin.com/in/taimullinked",
        gt: "https://github.com/taimul"
    },
    {
        id: 5,
        image: img6,
        name: "Jahidul Islam",
        designation: "Developer",
        fb: "/",
        ld: "https://www.linkedin.com/in/towhid-jamshed-287301244/",
        gt: "https://github.com/hopefyjamshed"
    },
    {
        id: 6,
        image: img4,
        name: "Rubel hossain",
        designation: "Developer",
        fb: "https://www.facebook.com/rubelhossain999/",
        ld: "https://www.linkedin.com/in/rubelhossain99",
        gt: "https://github.com/rubelhossain999"
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
                    {teammembers.map(
                        ({ id, image, name, designation, fb, ld, gt }) => (
                            <>
                            <div key={teammembers.id} className='lg:pt-14 lg:pb-14 small-d-p-top' >
                                <div className='flex gap-5'>
                                    <img src={image} alt='t-img'  className='team-card'/>
                                    <div>
                                        <h3 className='text-2xl font-medium'>{name}</h3>
                                        <h5 className='text-base font-normal'>{designation}</h5>
                                        <div className='mt-1 flex gap-3'>
                                            <a  href={fb} target="_blank" rel="noreferrer">
                                                <BsFacebook />
                                            </a>
                                            <a  href={ld} target="_blank" rel="noreferrer">
                                                <BsGithub />
                                            </a>
                                            <a  href={gt} target="_blank" rel="noreferrer">
                                                <BsLinkedin />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                      )}                       
                    
                </div>
            </div>
        </div>
    );
};

export default Teammembers;