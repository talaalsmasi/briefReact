import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleGalleryV1 = () => {
    return (
        <>
            <div className="gallery-style-one">
                <div className="item">
                    <img src="/assets/img/portfolio/2.jpg" alt="Image Not Found" />
                    <div className="overlay">
                        <span>Cheesy Favourite</span>
                        <h4><Link to="/shop-single#">Crispy Crust Pizzeria</Link></h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleGalleryV1;