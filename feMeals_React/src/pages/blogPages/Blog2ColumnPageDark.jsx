import Blog2ColumnContent from '@/components/blog/Blog2ColumnContent';
import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const Blog2ColumnPageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="blog-2-column" title="Blog 2 Column">
                <Blog2ColumnContent />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default Blog2ColumnPageDark;