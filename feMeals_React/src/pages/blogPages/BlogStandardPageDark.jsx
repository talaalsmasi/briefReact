import BlogStandardContent from '@/components/blog/BlogStandardContent';
import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const BlogStandardPageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="blog-standard" title="Blog Standard">
                <BlogStandardContent />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default BlogStandardPageDark;