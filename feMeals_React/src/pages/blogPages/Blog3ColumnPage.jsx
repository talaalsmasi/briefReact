import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const Blog3ColumnPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="blog-3-column" title="Blog 3 Column">
                <Blog3ColumnContent />
            </LayoutV6>
        </>
    );
};

export default Blog3ColumnPage;