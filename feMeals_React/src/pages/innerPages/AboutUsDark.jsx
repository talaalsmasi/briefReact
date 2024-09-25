import AboutV1 from '@/components/about/AboutV1';
import BrandV1 from '@/components/brand/BrandV1';
import ChefV1 from '@/components/chef/ChefV1';
import BodyDark from '@/components/classes/BodyDark';
import BusinessHours from '@/components/hours/BusinessHours';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const AboutUsPageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="About-us" title="About Us">
                <BrandV1 />
                <AboutV1 />
                <ChefV1 />
                <BusinessHours />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default AboutUsPageDark;