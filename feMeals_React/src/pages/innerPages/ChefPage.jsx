import ChefFull from '@/components/chef/ChefFull';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const ChefPage = () => {
    return (
        <>
            <LayoutV6 title="Restaurant Chef" breadCrumb="chef">
                <ChefFull />
            </LayoutV6>
        </>
    );
};

export default ChefPage;