import React from 'react';
import HeaderTopV1 from '../header/HeaderTopV1';
import FooterV1 from '../footer/FooterV1';
import HeaderV6 from '../header/HeaderV6';
import BreadCrumb from '../breadCrumb/BreadCrumb';

const LayoutV6 = ({ children, breadCrumb, title }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderTopV1 />
                <HeaderV6 />
                {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
                {children}
                <FooterV1 />
            </div>
        </>
    );
};

export default LayoutV6;