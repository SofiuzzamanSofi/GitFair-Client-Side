import React, { useEffect } from 'react';
import './TeamMembers.css';
import { BsGithub, BsLinkedin, BsGlobe2 } from "react-icons/bs";
import img1 from '../../../assets/team/selim.png';
import img3 from '../../../assets/team/nayeem.png';
import img2 from '../../../assets/team/sofi.png';
import img5 from '../../../assets/team/taimul.png';
import img6 from '../../../assets/team/jamshad.png';
import img4 from '../../../assets/team/rubel.png';
import galaxy from '../../../assets/features/footer-galaxy.png';
import globe from '../../../assets/features/globe.gif';
import astrocat from '../../../assets/features/astrocat.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


// Data Set
const Members = [
    {
        id: 1,
        image: img1,
        name: "Selim Alahi",
        designation: "Team Lead",
        github: "https://github.com/selimalahi",
        linkedin: "https://www.linkedin.com/in/selim-alahi",
        portfolio: "https://www.facebook.com/alahi.selim"
    },
    {
        id: 2,
        image: img3,
        name: "Md Nayeem",
        designation: "Web Developer",
        github: "https://github.com/mrseeker53",
        linkedin: "https://www.linkedin.com/in/mrseeker53",
        portfolio: "https://mrseeker53-df0e7c.netlify.app"
    },
    {
        id: 3,
        image: img2,
        name: "Md Sofiuzzaman",
        designation: "Web Developer",
        github: "https://github.com/SofiuzzamanSofi",
        linkedin: "https://www.linkedin.com/in/sofiuzzaman-sf",
        portfolio: "https://sofiuzzamansofi.netlify.app"
    },
    {
        id: 4,
        image: img5,
        name: "Taimul Haque",
        designation: "Web Developer",
        github: "https://github.com/taimul",
        linkedin: "https://www.linkedin.com/in/taimullinked",
        portfolio: "https://meek-platypus-4f2b59.netlify.app"
    },
    {
        id: 5,
        image: img6,
        name: "Md Towhidul Islam",
        designation: "Web Developer",
        github: "https://github.com/hopefyjamshed",
        linkedin: "https://www.linkedin.com/in/towhid-jamshed-287301244",
        portfolio: "https://my-portfolio-7aa20.web.app"
    },
    {
        id: 6,
        image: img4,
        name: "Rubel Hossain",
        designation: "Web Developer",
        github: "https://github.com/rubelhossain999",
        linkedin: "https://www.linkedin.com/in/rubelhossain99",
        portfolio: "https://portfolio.rubelhossain99.com"
    },
]

const TeamMembers = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    })


    return (
        <div className='bg-[#000] text-white'
            style={{
                background: `url(${galaxy})`,
                backgroundSize: 'cover'
            }}
        >
            <div className='lg:w-[1240px] m-auto pt-56 small-display md:px-10 sm:px-10'>
                <div className='border-l-8 border-[#66C555] '>
                    <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4'>Our Team Members</h2>
                </div>
                <div className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:max-w-screen lg:px-10 md:pt-8' >
                    {Members.map(
                        ({ id, image, name, designation, github, linkedin, portfolio }) => (
                            <>
                                <div key={id} className='lg:pt-14 lg:pb-14 small-d-p-top md:py-6' data-aos="fade-left" data-aos-easing="ease-in-cubic" >
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
                {/* Globe Image */}
                <div className='mb-96 ml-34'>
                    <img src={globe} alt="Globe" className='absolute w-5/6' />
                    <img src={astrocat} alt="Astrocat" className='relative w-1/3 top-80 left-96 py-12' />
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;