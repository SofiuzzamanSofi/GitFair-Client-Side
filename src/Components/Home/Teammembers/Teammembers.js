import React from 'react';
import './TeamMembers.css';
import { BsGithub, BsLinkedin, BsGlobe2 } from "react-icons/bs";
import img1 from '../../../assets/team/selim.png';
import img3 from '../../../assets/team/nayeem.png';
import img2 from '../../../assets/team/sofi.png';
import img5 from '../../../assets/team/taimul.png';
import img6 from '../../../assets/team/jamshad.png';
import img4 from '../../../assets/team/rubel.png';

const Members = [
    {
        id: 1,
        image: img1,
        name: "Selim Alahi",
        designation: "Team Leader",
        github: "https://github.com/selimalahi",
        linkedin: "https://www.linkedin.com/in/selim-alahi",
        portfolio: "https://www.facebook.com/alahi.selim"
    },
    {
        id: 2,
        image: img3,
        name: "Md Nayeem",
        designation: "Developer",
        github: "https://github.com/mrseeker53",
        linkedin: "https://www.linkedin.com/in/mrseeker53",
        portfolio: "https://mrseeker53-df0e7c.netlify.app"
    },
    {
        id: 3,
        image: img2,
        name: "Md Sofiuzzaman",
        designation: "Developer",
        github: "https://github.com/SofiuzzamanSofi",
        linkedin: "https://www.linkedin.com/in/sofiuzzaman-sf",
        portfolio: "https://sofiuzzamansofi.netlify.app"
    },
    {
        id: 4,
        image: img5,
        name: "Taimul Haque",
        designation: "Developer",
        github: "https://github.com/taimul",
        linkedin: "https://www.linkedin.com/in/taimullinked",
        portfolio: "https://meek-platypus-4f2b59.netlify.app"
    },
    {
        id: 5,
        image: img6,
        name: "Md Towhidul Islam",
        designation: "Developer",
        github: "https://github.com/hopefyjamshed",
        linkedin: "https://www.linkedin.com/in/towhid-jamshed-287301244",
        portfolio: "https://my-portfolio-7aa20.web.app"
    },
    {
        id: 6,
        image: img4,
        name: "Rubel Hossain",
        designation: "Developer",
        github: "https://github.com/rubelhossain999",
        linkedin: "https://www.linkedin.com/in/rubelhossain99",
        portfolio: "https://portfolio.rubelhossain99.com"
    },
]

const TeamMembers = () => {
    return (
        <div className='bg-[#000] text-white'>
            <div className='lg:w-[1240px] m-auto pt-56 small-display md:px-10 sm:px-10'>
                <div className='border-l-8 border-[#66C555] '>
                    <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4'>Our Team Members</h2>
                </div>
                <div className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:max-w-screen lg:px-10 md:pt-8'>
                    {Members.map(
                        ({ id, image, name, designation, github, linkedin, portfolio }) => (
                            <>
                                <div key={id} className='lg:pt-14 lg:pb-14 small-d-p-top md:py-6' >
                                    <div className='flex gap-5'>
                                        <img src={image} alt='t-img' className='team-card' />
                                        <div>
                                            <h3 className='text-2xl font-medium'>{name}</h3>
                                            <h5 className='text-base font-normal'>{designation}</h5>
                                            <div className='mt-1 flex gap-3'>
                                                <a href={github} target="_blank" rel="noreferrer">
                                                    <BsGithub />
                                                </a>
                                                <a href={linkedin} target="_blank" rel="noreferrer">
                                                    <BsLinkedin />
                                                </a>
                                                <a href={portfolio} target="_blank" rel="noreferrer">
                                                    <BsGlobe2 />
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

export default TeamMembers;