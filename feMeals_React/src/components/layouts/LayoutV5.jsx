import React from 'react';
import FooterV2 from '../footer/FooterV2';
import HeaderTopV2 from '../header/HeaderTopV2';
import HeaderV5 from '../header/HeaderV5';

const LayoutV5 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderTopV2 />
                <HeaderV5 />
                {children}
                <FooterV2 />
            </div>
        </>
    );
};

export default LayoutV5;