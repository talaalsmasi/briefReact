import React from 'react';
import { Link } from 'react-router-dom';

const SingleProductGrid = ({ product }) => {
    const { thumb, badge, title, newPrice, oldPrice, btnText, productTag } = product

    const newP = (Math.floor(newPrice)).toFixed(2);
    const oldP = (Math.floor(oldPrice)).toFixed(2);

    return (
        <>
            <li className="product">
                <div className="product-contents">
                    <div className="product-image">
                        {badge &&
                            <span className="onsale">{badge}</span>
                        }
                        <Link to="/shop-single">
                            <img src={`assets/img/shop/${thumb}`} alt="Product" />
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
                    </div>
                    <div className="product-caption">
                        <div className="product-tags">
                            {productTag.map((data, index) =>
                                <Link to="#" key={index}>{data}</Link>
                            )}
                        </div>
                        <h4 className="product-title">
                            <Link to="/shop-single">{title}</Link>
                        </h4>
                        <div className="price">
                            {oldP && !isNaN(oldP) &&
                                <span><del> ${oldP}</del> </span>
                            }
                            <span>${newP}</span>
                        </div>
                        <Link to="#" className="cart-btn"><i className="fas fa-shopping-bag"></i> {btnText}</Link>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleProductGrid;