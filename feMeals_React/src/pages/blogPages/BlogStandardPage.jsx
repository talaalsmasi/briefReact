import BlogStandardContent from '@/components/blog/BlogStandardContent';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const BlogStandardPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="blog-standard" title="Blog Standard">
                <BlogStandardContent />
            </LayoutV6>
        </>
    );
};

export default BlogStandardPage;