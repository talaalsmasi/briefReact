import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import { useParams } from 'react-router-dom';
import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';

const BlogSingleWithSidebarPageDark = () => {

    const { id } = useParams()
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV6 breadCrumb="blog-single-with-sidebar" title="Blog Single With Sidebar">
                <BlogSingleWithSidebarContent blogInfo={data} />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default BlogSingleWithSidebarPageDark;