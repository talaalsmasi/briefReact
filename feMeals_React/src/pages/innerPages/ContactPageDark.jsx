import BodyDark from '@/components/classes/BodyDark';
import ContactPageContent from '@/components/contact/ContactPageContent';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const ContactPageDark = () => {
    return (
        <>
            <LayoutV6 title="Contact Us" breadCrumb="contact">
                <ContactPageContent />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default ContactPageDark;