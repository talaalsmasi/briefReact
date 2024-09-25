import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleServiceV1 = ({ service }) => {
    const { thumb, serviceName, openingHours, items, price, title, btnText } = service

    return (
        <>
            <div className="services-style-one">
                <div className="thumb">
                    <img src={`assets/img/services/${thumb}`} alt="Image Not Found" />
                    <h4><Link to="#">{serviceName}</Link></h4>
                </div>
                <div className="info">
                    <ul>
                        <li><span>Opening Time</span> <strong>{openingHours}</strong></li>
                        <li><span>{items}+ Items</span> <strong>${price}</strong></li>
                    </ul>
                    <p>
                        {title}
                    </p>
                    <Link className="btn btn-light circle btn-md animation" to="/reservation#">{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV1;