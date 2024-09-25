import React from 'react';
import ReactWOW from 'react-wow';

const SingleChooseV1 = ({ choose }) => {
    const { thumb, info, text, delay } = choose

    return (
        <>
            <ReactWOW animation='fadeInUp' delay={delay}>
                <div className="item animate"  >
                    <img src={`assets/img/icon/${thumb}`} alt="Icon" />
                    <h4>{info}</h4>
                    <p>{text}</p>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleChooseV1;