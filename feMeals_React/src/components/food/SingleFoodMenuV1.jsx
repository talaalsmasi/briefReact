import React from 'react';
import { Link } from 'react-router-dom';

const SingleFoodMenuV1 = ({ food }) => {
    const { thumb, rating, title, text, oldPrice, newPrice } = food

    const oldP = (Math.floor(oldPrice)).toFixed(2);
    const newP = (Math.floor(newPrice)).toFixed(2);

    return (
        <>
            <div className="product">
                <div className="product-contents">
                    <div className="product-image">
                        <Link to="/shop-single">
                            <img src={`assets/img/product/${thumb}`} alt="Product" />
                        </Link>
                        <div className="shop-action">
                            <ul>
                                <li className="wishlist">
                                    <Link to="#"><span>Add to wishlist</span></Link>
                                </li>
                                <li className="quick-view">
                                    <Link to="#"><span>Quick view</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="product-review">
                            <i className="fas fa-star"></i>
                            <span>{rating}</span>
                        </div>
                    </div>
                    <div className="product-caption">
                        <h4 className="product-title">
                            <Link to="/shop-single">{title}</Link>
                        </h4>
                        <p>{text}</p>
                        <div className="bottom">
                            <div className="price">
                                <span><del>${oldP}</del> ${newP}</span>
                            </div>
                            <Link to="/shop-single"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFoodMenuV1;