import AboutV1 from '@/components/about/AboutV1';
import BannerV1 from '@/components/banner/BannerV1';
import BlogV1 from '@/components/blog/BlogV1';
import BrandV1 from '@/components/brand/BrandV1';
import ChefV1 from '@/components/chef/ChefV1';
import BodyDark from '@/components/classes/BodyDark';
import FoodMenuV3 from '@/components/food/FoodMenuV3';
import GalleryV1 from '@/components/gallery/GalleryV1';
import BusinessHours from '@/components/hours/BusinessHours';
import LayoutV4 from '@/components/layouts/LayoutV4';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import React from 'react';

const Home4Dark = () => {
    return (
        <>
            <LayoutV4>
                <BannerV1 />
                <BrandV1 />
                <AboutV1 />
                <FoodMenuV3 />
                <GalleryV1 />
                <ChefV1 />
                <BusinessHours />
                <TestimonialV1 />
                <BlogV1 />
                <BodyDark />
            </LayoutV4>
        </>
    );
};

export default Home4Dark;