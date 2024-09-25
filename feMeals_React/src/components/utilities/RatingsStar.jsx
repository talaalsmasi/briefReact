import React from 'react';

const RatingsStar = ({ ratings }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <React.Fragment key={index} className="icon">
                {index + 1 <= ratings ? (
                    <i className="fas fa-star"></i>
                ) : number <= ratings ? (
                    <i className="fas fa-star-half-alt"></i>
                ) : (
                    <i className="far fa-star"></i>
                )}
            </React.Fragment>
        )
    })

    return (
        <>
            {ratingStar}
        </>
    );
};

export default RatingsStar;