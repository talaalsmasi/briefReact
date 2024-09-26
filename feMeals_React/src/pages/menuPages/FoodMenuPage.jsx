import DeliveryV1 from '@/components/delivery/DeliveryV1';
import FoodMenuV4 from '@/components/food/FoodMenuV4';
import FoodMenuV5 from '@/components/food/FoodMenuV5';
import LayoutV6 from '@/components/layouts/LayoutV6';
import ReservationV1 from '@/components/reservation/ReservationV1';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import React from 'react';

const FoodMenuPage = () => {
    return (
        <>
            <LayoutV6 breadCrumb="food-menu" title="Food Menu">
                <FoodMenuV4 />
                
            </LayoutV6>
        </>
    );
};

export default FoodMenuPage;