import BlogSingleContent from '@/components/blog/BlogSingleContent';
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';

const BlogSinglePageDark = () => {

    const { id } = useParams()
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV6 breadCrumb="blog-single" title="Blog Single">
                <BlogSingleContent blogInfo={data} />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default BlogSinglePageDark;