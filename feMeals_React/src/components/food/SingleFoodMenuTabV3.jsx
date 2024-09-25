import React from 'react';
import { Link } from 'react-router-dom';

const SingleFoodMenuTabV3 = ({ data }) => {
    const { thumb, name, price, priceFull, leftInfo, rightInfo } = data

    return (
        <>
            <li>
                <div className="thumbnail">
                    <img src={`assets/img/food/${thumb}`} alt="Image Not Found" />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="title">
                            <h4><Link to="/shop-single">{name}</Link></h4>
                        </div>
                        <div className="price">
                            <span>${price}</span>
                            <span>${priceFull}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <p>
                                {leftInfo}
                            </p>
                        </div>
                        <div className="right">
                            <p>
                                {rightInfo}
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleFoodMenuTabV3;