import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import ShopSinglePageContent from '@/components/shop/ShopSinglePageContent';
import React from 'react';

const ShopSinglePageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="shop-single" title="Grilled Flank Steak">
                <ShopSinglePageContent />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default ShopSinglePageDark;