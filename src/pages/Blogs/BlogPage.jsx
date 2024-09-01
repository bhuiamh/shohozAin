import React from 'react';
import { Outlet } from 'react-router-dom';

const BlogPage = () => {
    return (
        <div className=''>    
           <Outlet/>
        </div>
    );
};

export default BlogPage;