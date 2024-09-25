import React from 'react';
import { Link } from 'react-router-dom';
import ShopProductTab from '@/components/product/ShopProductTab';
import RelatedProducts from '@/components/product/RelatedProducts';

const Shop2PageContent = () => {
    return (
        <>
            <div className="validtheme-shop-single-area default-padding">
                <div className="container">
                    <div className="product-details">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="product-thumb">
                                    <div className="item-box">
                                        <div className="product-item">
                                            <Link to="assets/img/shop/1.png" className="item popup-gallery">
                                                <img src="/assets/img/shop/1.png" alt="Thumb" />
                                            </Link>
                                            <span className="onsale theme">-16%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="single-product-contents">
                                    <div className="summary-top-box">
                                        <div className="product-tags">
                                            <Link to="#">Cheese</Link>
                                            <Link to="#">Pizza</Link>
                                        </div>
                                        <div className="review-count">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                            <span>(8 Review)</span>
                                        </div>
                                    </div>
                                    <h2 className="product-title">
                                        Margherita Pizza
                                    </h2>
                                    <div className="price">
                                        <span><del>$8.00</del></span>
                                        <span>$5.00</span>
                                    </div>
                                    <div className="product-stock validthemes-in-stock">
                                        <span>In Stock</span>
                                    </div>
                                    <p>
                                        The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games. non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder
                                    </p>
                                    <div className="product-purchase-list">
                                        <input type="number" id="quantity" step="1" name="quantity" min="0" placeholder="0" />
                                        <Link to="#" className="btn secondary btn-theme btn-sm animation">
                                            <i className="fas fa-shopping-cart"></i>
                                            Add to cart
                                        </Link>
                                        <div className="shop-action">
                                            <ul>
                                                <li className="wishlist">
                                                    <Link to="#"><span>Add to wishlist</span></Link>
                                                </li>
                                                <li className="compare">
                                                    <Link to="#"><span>Compare</span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-estimate-delivary">
                                        <i className="fas fa-box-open"></i>
                                        <strong> 2-day Delivery</strong>
                                        <span>Speedy and reliable parcel delivery!</span>
                                    </div>
                                    <div className="product-meta">
                                        <span className="sku">
                                            <strong>SKU:</strong> BE45VGRT
                                        </span>
                                        <span className="posted-in">
                                            <strong>Category:</strong>
                                            <Link to="#">Computer</Link> ,
                                            <Link to="#">Speaker</Link>,
                                            <Link to="#">Headphone</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ShopProductTab />
                    <RelatedProducts />

                </div>
            </div>
        </>
    );
};

export default Shop2PageContent;