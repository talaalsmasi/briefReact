import LayoutV6 from '@/components/layouts/LayoutV6';
import ShopSinglePageContent from '@/components/shop/ShopSinglePageContent';
import React from 'react';

const ShopSinglePage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="shop-single" title="Grilled Flank Steak">
                <ShopSinglePageContent />
            </LayoutV6>
        </>
    );
};

export default ShopSinglePage;