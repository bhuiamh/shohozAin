import React from 'react';
import { Outlet } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='w-full'>
            <Outlet />
        </div>
    );
};

export default Blog;