import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ReactWOW from 'react-wow';

const SingleFoodCategoryV5 = ({ category }) => {
    const { thumb, rating, title, text, delay } = category

    const formattedRating = (Math.floor(rating)).toFixed(1);

    return (
        <>
            <ReactWOW animation='fadeInUp' delay={delay}>
                <div className="food-category-item animate">
                    <div className="thumb">
                        <img src={`assets/img/thumb/${thumb}`} alt="Image Not Found" />
                    </div>
                    <div className="info">
                        <div className="food-review">
                            <div className="reviewer-avatar">
                                <img src="/assets/img/team/5.jpg" alt="Image Not Found" />
                                <img src="/assets/img/team/6.jpg" alt="Image Not Found" />
                                <img src="/assets/img/team/7.jpg" alt="Image Not Found" />
                            </div>
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                {formattedRating}
                            </div>
                        </div>
                        <h4><Link to="/shop-single#">{title}</Link></h4>
                        <p>
                            {text}
                        </p>
                        <Link to="/shop-single#" className="btn-read-more">Order Now <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleFoodCategoryV5;