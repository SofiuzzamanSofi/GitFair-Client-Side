import React from 'react';
import { Link } from 'react-router-dom';

const blogDatas = [
    {
        image: "https://github.blog/wp-content/uploads/2022/05/Community-Open-Source@2x.png?resize=2400%2C1260",
        title: "GitFair Availability Report: January 2023",
        description: "What if developers want to leverage branch deployments but don't have a full ChatOps stack integrated with their repositories? We wanted to set out to find a way for all developers to be able to take advantage of branch deployments with ease, right from their GitHub repository, and so the branch-deploy Action was born!",
        btnLink: "/"

    },
    {
        image: "https://github.blog/wp-content/uploads/2023/02/docs-projects3.png?resize=1600%2C900",
        title: "How the GitFair Docs team uses GitHub Projects",
        description: "If that’s the case, then GitHub Docs are love letters to our 100 million developers who turn to them everyday for help and support. Whether it’s a student who wants to sign up for an account or a seasoned senior developer who needs to set up GitHub Enterprise Server, Docs meets each person where they are and in the language they speak (and code in, too).",
        btnLink: "/"

    },
    {
        image: "https://github.blog/wp-content/uploads/2023/01/100MDevs_Blog_1200x627_v3.gif?resize=1200%2C627",
        title: "Open source’s impact on the world’s 100 million developers",
        description: "Assertively disintermediate interactive relationships rather than holistic data. Uniquely procrastinate cross-unit expertise through transparent applications. Rapidiously visualize user-centric sources after cooperative schemas. Interactively develop 24/7 benefits via.",
        btnLink: "/"

    }
]


const Blog = () => {
    return (
        <div className='bg-white'>
            <div className='lg:w-[1240px] m-auto'>
                <h2 className='text-3xl text-black font-bold pt-16 text-center'>GitFair Official Blogs</h2>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        {
                            blogDatas?.map(blogData =>
                                <>
                                    <div className="overflow-hidden transition-shadow duration-300 bg-slate-300 rounded p-5">
                                        <Link to="/" aria-label="Article">
                                            <img
                                                src={blogData?.image}
                                                className="object-cover w-full h-64 rounded"
                                                alt=""
                                            />
                                        </Link>
                                        <div className="py-5">
                                            <Link
                                                to="/"
                                                aria-label="Article"
                                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                            >
                                                <p className="text-2xl font-bold leading-5">{blogData?.title.slice(0, 25) + "..."}</p>
                                            </Link>
                                            <p className="mb-4 text-gray-700">
                                                {blogData?.description.slice(0, 150) + "..."}
                                            </p>
                                            <div className="flex space-x-4">
                                                <Link to={blogData?.btnLink}>
                                                    <button class="bg-[#66C555] p-2 font-semibold text-xl rounded text-white">See More</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;