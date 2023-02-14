import React, { useEffect } from 'react';
import editor from "../../../assets/features/code-editor.png";
import upload from "../../../assets/features/upload.png";
import searchAI from "../../../assets/features/searchai.png";
import urlShort from "../../../assets/features/url-short.png";
import galaxy from "../../../assets/features/footer-galaxy.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    })

    return (
        <div className="text-white"
            style={{
                background: `url(${galaxy})`,
                backgroundSize: 'cover'
            }}
        >
            <div className=" lg:w-[1240px] m-auto pt-56 small-display md:px-10 sm:px-10">
                <div className='border-l-8 border-[#66C555] '>
                    <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4 mb-10'>Features Demonstration</h2>
                </div>

                <div>
                    {/* Code Editor */}
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={editor} alt="Code Editor" data-aos="fade-right" />
                            <div className='ml-20' data-aos="zoom-in-left">
                                <h1 className="text-5xl font-bold">Code Editor</h1>
                                <p className="py-6">
                                    - GitFair's code editor provides users with a customizable and intuitive interface to write, edit, and display the output of code.
                                    <br />
                                    <br />
                                    - It provides HTML, CSS & JavaScript code snippets can run and see the output till now.
                                    <br />
                                    <br />
                                    - It would enable users to create and edit code more easily and efficiently.
                                    </p>
                            </div>
                        </div>
                    </div>
                    {/* File Upload and Share */}
                    <div className="hero mt-40">
                        <div className="hero-content flex-col lg:flex-row-reverse ">
                            <img src={upload} alt="File Upload and Share" className='ml-24' data-aos="zoom-in-left" />
                            <div data-aos="zoom-in-right">
                                <h1 className="text-5xl font-bold" >File Upload and Share</h1>
                                <p className="py-6">
                                    - The file upload and share system in GitFair would enable users to upload files to the platform and share them with other users.
                                    <br />
                                    <br />
                                    - It may provide an easy and secure way to share files such as software products, code snippets, design files, and other digital assets.
                                    <br />
                                    <br />
                                    - This may allow users to upload files of various formats, such as PDFs, images, videos, and text files. Once uploaded, users may be able to set permissions on the files, such as setting them to private or public, and controlling who can access them.</p>
                            </div>
                        </div>
                    </div>
                    {/* Search AI */}
                    <div className="hero my-40">
                        <div className="hero-content flex-col lg:flex-row ">
                            <img src={searchAI} alt="Search AI" data-aos="zoom-in-right" />
                            <div className='ml-20' data-aos="zoom-in-left">
                                <h1 className="text-5xl font-bold">Search AI</h1>
                                <p className="py-6">
                                    - GitFair's Search AI may enable users to search for specific software products more easily, while also providing recommendations for similar products that may be of interest to them.
                                    <br />
                                    <br />
                                    - It may also learn from user behavior, such as the products they frequently search for, and adapt the search results to provide more relevant options over time.
                                    <br />
                                    <br />
                                    - It may also use data analysis to identify trends and patterns in user behavior, which can help to improve the search experience and offer more personalized recommendations to users.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* URL Shortener */}
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={urlShort} alt="URL Shortener" className='ml-24' data-aos="zoom-in-left" />
                            <div data-aos="zoom-in-right">
                                <h1 className="text-5xl font-bold" >URL Shortener</h1>
                                <p className="py-6">
                                    - GitFair's URL shortener may allow users to customize the shortened link with their own desired text, making it easier to remember and share.
                                    <br />
                                    <br />
                                    - It may provide analytics to track click-through rates and other user engagement metrics for the shortened links.
                                    <br />
                                    <br />
                                    - It also may ensure the security of the original long link and the shortened link, protecting users from phishing or other types of scams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;