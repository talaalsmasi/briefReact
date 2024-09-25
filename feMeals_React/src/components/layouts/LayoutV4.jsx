import React from 'react';
import FooterV1 from '../footer/FooterV1';
import HeaderTopV1 from '../header/HeaderTopV1';
import HeaderV4 from '../header/HeaderV4';

const LayoutV4 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderTopV1 />
                <HeaderV4 />
                {children}
                <FooterV1 />
            </div>
        </>
    );
};

export default LayoutV4;