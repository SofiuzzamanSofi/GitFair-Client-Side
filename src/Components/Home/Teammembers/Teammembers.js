import React, { useEffect } from 'react';
import './Teammembers.css';
import { BsGithub, BsLinkedin, BsGlobe2, BsArrowRight } from "react-icons/bs";
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
import { Link } from 'react-router-dom';

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
    // AOS library for animation
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
            <div className='lg:w-[1240px] m-auto mt-36 lg:mt-56 md:mt-46 small-display md:px-10 sm:px-10'>
                <div className='border-l-8 border-[#66C555] '>
                    <h2 className='text-3xl lg:text-5xl md:text-3xl font-bold px-4'>Our Team Members</h2>
                </div>
                <div className='grid mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:max-w-screen lg:px-10 md:pt-8' >
                    {Members.map(
                        ({ id, image, name, designation, github, linkedin, portfolio }) => (
                            <>
                                <div key={Members.id} className='py-6 lg:py-14 md:py-10' data-aos="fade-left" data-aos-easing="ease-in-cubic" >
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
                <div className='my-16 lg:mb-96 lg:pb-12 md:my-24 md:pb-16'>
                    {/* Glowing Button */}
                    <div className="px-8 pb-4">
                        <div className="grid gap-8 items-start justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <button className="relative px-7 py-6 md:py-6 text-lg lg:text-2xl rounded-2xl leading-none flex items-center divide-x divide-slate-800">
                                    <span className="flex items-center space-x-5">
                                        <span className="pr-6 text-slate-100 font-semibold">GitFair Like As Globe For Developers</span>
                                    </span>
                                    <span className="pl-6 text-slate-100 font-semibold group-hover:text-green-400 transition duration-200">
                                        <Link to="/register" className='flex'>
                                            Sign up For GitFair
                                            <BsArrowRight className='ml-2 text-3xl lg:text-md md:text-lg mt-3 lg:mt-0 md:mt-0'/>
                                        </Link>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Globe */}
                    <img src={globe} alt="Globe" className='absolute w-full rounded-2xl right-2' />
                    <img src={astrocat} alt="Astrocat" className='relative w-1/3 left-28 top-6 lg:top-96 lg:left-96 md:top-36 md:left-56 pt-28' />
                </div>
            </div>
        </div >
    );
};

export default TeamMembers;