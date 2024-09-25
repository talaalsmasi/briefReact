import React from 'react';
import BannerV4 from '../../components/banner/BannerV4';
import FeatureV3 from '../../components/feature/FeatureV3';
import WhyChooseV1 from '@/components/whyChoose/WhyChooseV1';
import DealV1 from '@/components/deal/DealV1';
import FoodCategoryV3 from '@/components/food/FoodCategoryV3';
import DownloadApp from '@/components/app/DownloadApp';
import BusinessHours from '@/components/hours/BusinessHours';
import ChefV1 from '@/components/chef/ChefV1';
import BlogV1 from '@/components/blog/BlogV1';
import LayoutV1 from '@/components/layouts/LayoutV1';

const Home1 = () => {
    return (
        <>
            <LayoutV1>
                <BannerV4 />
                <FeatureV3 />
                <WhyChooseV1 />
                <DealV1 />
                <FoodCategoryV3 />
                <DownloadApp />
                <BusinessHours />
                <ChefV1 />
                <BlogV1 />
            </LayoutV1>
        </>
    );
};

export default Home1;