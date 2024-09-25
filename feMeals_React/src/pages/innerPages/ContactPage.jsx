import ContactPageContent from '@/components/contact/ContactPageContent';
import LayoutV6 from '@/components/layouts/LayoutV6';
import React from 'react';

const ContactPage = () => {
    return (
        <>
            <LayoutV6 title="Contact Us" breadCrumb="contact">
                <ContactPageContent />
            </LayoutV6>
        </>
    );
};

export default ContactPage;