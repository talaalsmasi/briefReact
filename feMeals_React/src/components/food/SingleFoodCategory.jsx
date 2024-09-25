import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFoodCategory = ({ food }) => {
    const { thumb, category, name } = food

    return (
        <>
            <Link to="/shop#">
                <img src={`assets/img/menu/${thumb}`} alt="Image Not Found" />
                <div className="overlay">
                    <span>{category}</span>
                    <h5>{name}</h5>
                </div>
            </Link>
        </>
    );
};

export default SingleFoodCategory;