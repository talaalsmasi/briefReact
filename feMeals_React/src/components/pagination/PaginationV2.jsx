import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const PaginationV2 = () => {
    return (
        <>
            <li><Link className="previous page-numbers" to="#" onClick={handleSmoothScroll}><i className="fas fa-angle-left"></i></Link></li>
            <li><span aria-current="page" className="page-numbers current">1</span></li>
            <li><Link className="page-numbers" to="#" onClick={handleSmoothScroll}>2</Link></li>
            <li><Link className="next page-numbers" to="#" onClick={handleSmoothScroll}><i className="fas fa-angle-right"></i></Link></li>
        </>
    );
};

export default PaginationV2;