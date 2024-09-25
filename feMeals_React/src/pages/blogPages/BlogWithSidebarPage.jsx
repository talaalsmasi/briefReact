import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
                <BlogWithSidebarContent />
            </LayoutV6>
        </>
    );
};

export default BlogWithSidebarPage;