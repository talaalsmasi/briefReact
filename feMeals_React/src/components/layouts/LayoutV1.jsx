import React from 'react';
import HeaderTopV1 from '../header/HeaderTopV1';
import FooterV1 from '../footer/FooterV1';
import HeaderV1 from '../header/HeaderV1'

const LayoutV1 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderTopV1 sectionClass="bg-transparent" />
                <HeaderV1 />
                {children}
                <FooterV1 />
            </div>
        </>
    );
};

export default LayoutV1;