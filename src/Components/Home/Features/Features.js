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
            <div className=" lg:w-[1240px] m-auto mt-36 lg:mt-56 md:mt-46 small-display md:px-10 sm:px-10">
                <div className='border-l-8 border-[#66C555] '>
                    <h2 className='text-3xl lg:text-5xl md:text-3xl font-bold px-4 mb-10'>Features Details</h2>
                </div>

                <div>
                    {/* Code Compiler */}
                    <div className="hero border-solid border-2 rounded-md border-gray-800">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={editor} alt="Code Editor" className='rounded-md' data-aos="fade-right" />
                            <div className='pt-6 lg:ml-20 lg:pt-0 md:pt-0' data-aos="zoom-in-left">
                                <h1 className="text-3xl lg:text-5xl md:text-3xl font-bold">Code Compiler</h1>
                                <p className="py-6">
                                    - GitFair's code compiler provides users with a customizable and intuitive interface to write, edit, and display the output of code.
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
                    {/* Upload Here */}
                    <div className="hero my-20 lg:mt-40 border-solid border-2 rounded-md border-gray-800">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={upload} alt="File Upload and Share" className='lg:ml-24 rounded-md' data-aos="zoom-in-left" />
                            <div data-aos="zoom-in-right" className='pt-6 lg:pt-0 md:pt-0'>
                                <h1 className="text-3xl lg:text-5xl md:text-3xl font-bold">Upload Here</h1>
                                <p className="py-6">
                                    - The file upload and share system in GitFair would enable users to upload files to the platform and share them with other users.
                                    <br />
                                    <br />
                                    - It provides an easy and secure way to share files such as software products, code snippets, design files, and other digital assets.
                                    <br />
                                    <br />
                                    - This allow users to upload files of various formats, such as PDFs, images, videos, and text files. Once uploaded, users may be able to set permissions on the files, such as setting them to private or public, and controlling who can access them.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Search AI */}
                    <div className="hero my-20 lg:my-40 border-solid border-2 rounded-lg border-gray-800">
                        <div className="hero-content flex-col lg:flex-row ">
                            <img src={searchAI} alt="Search AI" className='rounded-xl' data-aos="zoom-in-right" />
                            <div className='pt-6 lg:ml-20 lg:pt-0 md:pt-0' data-aos="zoom-in-left">
                                <h1 className="text-3xl lg:text-5xl md:text-3xl font-bold">Search AI</h1>
                                <p className="py-6">
                                    - GitFair's Search AI enables users to search for specific software products more easily, while also providing recommendations for similar products that may be of interest to them.
                                    <br />
                                    <br />
                                    - It also learns from user behavior, such as the products they frequently search for, and adapt the search results to provide more relevant options over time.
                                    <br />
                                    <br />
                                    - It also uses data analysis to identify trends and patterns in user behavior, which can help to improve the search experience and offer more personalized recommendations to users.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* URL Shortener */}
                    <div className="hero border-solid border-2 rounded-md border-gray-800">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={urlShort} alt="URL Shortener" className='lg:ml-24 rounded-lg' data-aos="zoom-in-left" />
                            <div data-aos="zoom-in-right" className='pt-6 lg:pt-0 md:pt-0'>
                                <h1 className="text-3xl lg:text-5xl md:text-3xl font-bold">URL Shortener</h1>
                                <p className="py-6">
                                    - GitFair's URL shortener allows users to customize the shortened link with their own desired text, making it easier to remember and share.
                                    <br />
                                    <br />
                                    - It provides analytics to track click-through rates and other user engagement metrics for the shortened links.
                                    <br />
                                    <br />
                                    - It also ensures the security of the original long link and the shortened link, protecting users from phishing or other types of scams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;