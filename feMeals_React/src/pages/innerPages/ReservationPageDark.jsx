import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';
import ReservationV2 from '@/components/reservation/ReservationV2';
import React from 'react';

const ReservationPageDark = () => {
    return (
        <>
            <LayoutV6 breadCrumb="reservation" title="Online Reservation">
                <ReservationV2 />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default ReservationPageDark;