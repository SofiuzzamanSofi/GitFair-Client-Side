import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetail = () => {
    const data = useLoaderData()
    const { title, img, para } = data
    console.log(data)
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default BlogDetail;