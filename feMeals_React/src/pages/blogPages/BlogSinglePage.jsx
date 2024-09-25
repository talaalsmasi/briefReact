import BlogSingleContent from '@/components/blog/BlogSingleContent';
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import LayoutV6 from '@/components/layouts/LayoutV6';

const BlogSinglePage = () => {

    const { id } = useParams()
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV6 breadCrumb="blog-single" title="Blog Single">
                <BlogSingleContent blogInfo={data} />
            </LayoutV6>
        </>
    );
};

export default BlogSinglePage;