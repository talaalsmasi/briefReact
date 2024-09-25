import React from 'react';
import HeaderV2 from '../header/HeaderV2';
import FooterV2 from '../footer/FooterV2';

const LayoutV2 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderV2 />
                {children}
                <FooterV2 />
            </div>
        </>
    );
};

export default LayoutV2;