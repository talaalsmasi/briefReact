import Blog2ColumnContent from '@/components/blog/Blog2ColumnContent';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const Blog2ColumnPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="blog-2-column" title="Blog 2 Column">
                <Blog2ColumnContent />
            </LayoutV6>
        </>
    );
};

export default Blog2ColumnPage;