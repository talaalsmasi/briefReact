import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import Shop2PageContent from '@/components/shop/Shop2PageContent';
import React from 'react';

const ShopSingle2PageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="shop-single-2" title="Grilled Flank Steak">
                <Shop2PageContent />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default ShopSingle2PageDark;