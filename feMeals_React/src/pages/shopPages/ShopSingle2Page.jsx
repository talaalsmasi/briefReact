import LayoutV6 from '@/components/layouts/LayoutV6';
import Shop2PageContent from '@/components/shop/Shop2PageContent';
import React from 'react';

const ShopSingle2Page = () => {
    return (
        <>
            <LayoutV6 breadCrumb="shop-single-2" title="Grilled Flank Steak">
                <Shop2PageContent />
            </LayoutV6>
        </>
    );
};

export default ShopSingle2Page;