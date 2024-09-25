import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import ShopPageContent from '@/components/shop/ShopPageContent';
import React from 'react';

const ShopPageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="shop" title="Special Food">
                <ShopPageContent />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default ShopPageDark;