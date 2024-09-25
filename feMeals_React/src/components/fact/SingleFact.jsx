import React from 'react';
import CountUp from 'react-countup';

const SingleFact = ({ fact }) => {
    const { title, end, operator } = fact

    return (
        <>
            <div className="fun-fact">
                <div className="counter">
                    <div className="timer">
                        <CountUp end={end} enableScrollSpy />
                    </div>
                    <div className="operator">{operator}</div>
                </div>
                <span className="medium">{title}</span>
            </div>
        </>
    );
};

export default SingleFact;