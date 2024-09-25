import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFoodCategoryV3 = ({ data }) => {
    const { thumb, rating, review, oldPrice, newPrice, name, btnText } = data

    return (
        <>
            <div className="food-menu-style-three">
                <div className="thumb">
                    <img src={`assets/img/menu/${thumb}`} alt="Image Not Found" />
                    <div className="d-flex">
                        <div className="food-review">
                            <i className="fas fa-star"></i>
                            <span>{rating}({review}K)</span>
                        </div>
                        <div className="price">
                            <span><del>${oldPrice}</del> ${newPrice}</span>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h4><Link to="/shop-single#">{name}</Link></h4>
                    <ul>
                        <li>4 chicken legs</li>
                        <li>Chili sauce</li>
                        <li>Soft Drinks</li>
                    </ul>
                    <Link to="/shop-single#" className="cart-btn-border"><i className="fas fa-shopping-cart"></i> {btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleFoodCategoryV3;