import LayoutV6 from '@/components/layouts/LayoutV6';
import ShopPageContent from '@/components/shop/ShopPageContent';
import React from 'react';

const ShopPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="shop" title="Special Food">
                <ShopPageContent />
            </LayoutV6>
        </>
    );
};

export default ShopPage;