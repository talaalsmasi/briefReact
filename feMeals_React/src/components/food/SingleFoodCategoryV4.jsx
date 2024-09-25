import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFoodCategoryV4 = ({ data }) => {
    const { thumb, name, price, leftInfo, rightInfo } = data

    const formattedPrice = (Math.floor(price)).toFixed(2);

    return (
        <>
            <li>
                <div className="thumbnail">
                    <img src={`assets/img/food/${thumb}`} alt="Image Not Found" />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="title">
                            <h4><Link to="/shop-single#">{name}</Link></h4>
                        </div>
                        <div className="price">
                            <span>${formattedPrice}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <p>{leftInfo}</p>
                        </div>
                        <div className="right">
                            <p>{rightInfo}</p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleFoodCategoryV4;