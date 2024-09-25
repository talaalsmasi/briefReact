import ChefFull from '@/components/chef/ChefFull';
import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const ChefPageDark = () => {
    return (
        <>
            <LayoutV6 title="Restaurant Chef" breadCrumb="chef">
                <ChefFull />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default ChefPageDark;