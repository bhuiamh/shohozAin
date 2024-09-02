import React from 'react';
import { Outlet } from 'react-router-dom';

const BlogPage = () => {
    return (
        <div className='w-full'>    
           <Outlet/>
        </div>
    );
};

export default BlogPage;