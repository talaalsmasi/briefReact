import React from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';

const SingleMenuV1 = ({ menu }) => {
    const { thumb, delay, title, btnText } = menu

    return (
        <>
            <ReactWOW animation='fadeInUp' delay={delay}>
                <div className="menu-type-item animate" data-animate="fadeInUp">
                    <div className="thumb">
                        <img src={`assets/img/illustration/${thumb}`} alt="Image Not Found" />
                    </div>
                    <div className="info">
                        <h3>{title}</h3>
                        <ul className="menu-type-list">
                            {menu.listData.map(data =>
                                <li key={data.id}><span>{data.listName}</span> <b>{data.price}</b></li>
                            )}
                        </ul>
                        <Link to="/shop" className="btn mt-30 circle btn-sm btn-theme effect">{btnText}</Link>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SingleMenuV1;