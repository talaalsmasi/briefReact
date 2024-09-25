import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const BlogWithSidebarPageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="blog-with-sidebar" title="Blog With Sidebar">
                <BlogWithSidebarContent />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default BlogWithSidebarPageDark;