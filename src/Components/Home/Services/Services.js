import React from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';

const Services = () => {


    const Services = [
        {
            "id": 1,
            "title": "File Upload & Share",
            "details": "Developers can upload their code related files to save and share with others."
        },
        {
            "id": 2,
            "title": "Code Editor",
            "details": "HTML, CSS & JavaScript code snippets can run and see the output."
        },
        {
            "id": 3,
            "title": "Search AI",
            "details": "Users can try to search their queries using the chatGPT AI tool."
        },
        {
            "id": 4,
            "title": "Live Code Sharing",
            "details": "This is the place to code that can see other users by the shared link."
        },
        {
            "id": 5,
            "title": "URL Shortener",
            "details": "Anyone can shorten their descriptive link and share with others a short link."
        },
        {
            "id": 6,
            "title": "Online Support",
            "details": "Users can solve their issues related to the GitFair service by asking our chatbot."
        }
    ]


    return (
        <div className='lg:w-[1240px] m-auto pt-56 small-display md:px-10 sm:px-10  '>
            <div className='card category-head-div mb-16'>
                <div className='border-l-8 border-[#66C555]'>
                    <h2 className='lg:text-5xl md:text-2xl sm:text-xl font-bold px-4 text-white'>GitFair Services</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[136px] lg:px-12  pb-5'>
                {
                    Services.map(Service => <ServicesCard
                        key={Service.id}
                        Service={Service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;