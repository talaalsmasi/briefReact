import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFoodCategoryV3 = ({ data }) => {
    const { thumb, name } = data; 

    return (
        <>
            <div className="food-menu-style-three">
                <div className="thumb">
                    <img src={`assets/img/menu/${thumb}`} alt="Image Not Found" />
                </div>
                <div className="info">
                    <h4><Link to="/shop-single#">{name}</Link></h4>
                    <Link to="/subscription-details#" className="btn btn-primary mt-3">
                    Subscribe on This Diet
                                        </Link>
                </div>
            </div>
        </>
    );
};

export default SingleFoodCategoryV3;
