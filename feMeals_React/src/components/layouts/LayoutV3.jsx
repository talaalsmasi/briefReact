import React from 'react';
import FooterV1 from '../footer/FooterV1';
import HeaderV3 from '../header/HeaderV3';
import HeaderTopV1 from '../header/HeaderTopV1';

const LayoutV3 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderTopV1 sectionClass="bg-transparent" />
                <HeaderV3 />
                {children}
                <FooterV1 />
            </div>
        </>
    );
};

export default LayoutV3;